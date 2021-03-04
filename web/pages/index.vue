<template>
  <b-container>
    <b-row>
      <b-col sm="12">
      <!-- <section v-if="info._id"> -->
      <header class="header">
        <h1 class="title">{{ info.name }}</h1>
        <p class="subtitle">{{ info.blurb }}</p>
        <!-- <BlockContent :blocks="info.description" :serializers="serializers" /> -->
        <BlockContent :blocks="info.description" />
      </header>
      <SeriesSessionList :sessions="info.program" />
      <!-- {{ info }} -->
      <MoreInfoForm />
      <!-- </section>
      <section v-else>
        <h2>No event data is available</h2>
      </section> -->
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import sanityClient from '../sanityClient'
import SanityImage from '~/components/SanityImage'
import BlockContent from 'sanity-blocks-vue-component'
import SeriesSessionList from '~/components/series/SeriesSessionList'
import MoreInfoForm from '~/components/forms/MoreInfoForm'

import { filter, sortBy } from 'lodash'
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
    // filter out sessions more than three days old and sort by start dt
    data.info.program = sortBy(
      filter(data.info.program, function(session) {
        return (
          add(new Date(session.session.schedule.from), { days: 3 }) > new Date()
        )
      }),
      'from'
    )
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

<style scoped></style>
