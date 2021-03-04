<template>
  <b-container>
    <b-row>
      <b-col sm="12">
        <header class="header">
          <h1 class="title">{{ info.name }}</h1>
          <p class="subtitle">{{ info.blurb }}</p>
          <BlockContent :blocks="info.description" />
        </header>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="12">
        <SeriesSessionList :sessions="info.program" />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h2>Archived Sessions</h2>
        <SeriesArchiveList :sessions="info.program" />
      </b-col>
      <b-col>
        <h2>Request More Information</h2>
        <MoreInfoForm />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import sanityClient from '~/sanityClient'
import SanityImage from '~/components/SanityImage'
import BlockContent from 'sanity-blocks-vue-component'
import SeriesSessionList from '~/components/series/SeriesSessionList'
import SeriesArchiveList from '~/components/series/SeriesArchiveList'
import MoreInfoForm from '~/components/forms/MoreInfoForm'

import { filter, sortBy, partition } from 'lodash'
import add from 'date-fns/add'

// groq can't deep filter on arrays, so we'll need to filter out dates in script :(
const queryCurrentSeries = `
{
  "info": *[_type == "series" && slug.current == "connections-minis"][0] {
		...,
        _id,
        image { ..., asset->},
            organizers[]->,
            program[] {
            session-> {
                ...,
                persons[] {
                ...,
                  person-> {
                    ...,
                  }
                }
            }
        }
	}
}
`

export default {
  components: {
    SeriesSessionList,
    SeriesArchiveList,
    SanityImage,
    BlockContent,
    MoreInfoForm
    // SessionList
  },
  mounted() {
    // use $dateCalc plugin to set up start time for each program conferenceSession
    // this.$dateCalc(this.info.program, new Date())
    // make sure we have data to work with!
    // console.log('data?')
    // console.log(this.data)
  },
  // filters: {
  //   dateFilter
  // },
  // data() {
  //   return {
  //     haveInfo: false
  //   }
  // },
  async asyncData() {
    let data = await sanityClient.fetch(queryCurrentSeries)
    // partition by from date
    let [upcoming, archived] = partition(data.info.program, function(session) {
      return (
        add(new Date(session.session.schedule.from), { days: 3 }) > new Date()
      )
    })
    upcoming = sortBy(upcoming, 'from')
    archived = sortBy(archived, 'from')
    archived.reverse()

    // console.log(upcoming)
    // console.log(archived)

    data.info.program = { upcoming: upcoming, archived: archived }
    return data
  }
  // head() {
  //   if (!this.haveInfo) {
  //     return
  //   }
  //   return {
  //     title: this.info.name,
  //     meta: [
  //       {
  //         hid: 'description',
  //         name: 'description',
  //         content: this.info.description
  //       }
  //     ]
  //   }
  // }
}
</script>

<style scoped lang="scss"></style>
