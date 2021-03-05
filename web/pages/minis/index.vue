<template>
  <b-container>
    <b-row>
      <b-col sm="12">
        <header class="header">
          <h1 class="title">{{ info.name }}</h1>
        </header>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="6">
        <h2>About {{ info.name }}</h2>
        <div v-if="$debug">
          <p></p>
          <p class="subtitle">
            [This blurb won't show on the page in production, only for SEO]
            <small>
              <em>
                {{ info.blurb }}
              </em>
            </small>
          </p>
        </div>
        <BlockContent :blocks="info.description" />
      </b-col>
      <b-col sm="6">
        <h2>Request More Information</h2>
        <MoreInfoForm />
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="12">
        <h2 class="title">
          {{ info.name }} {{ showArchived ? 'All' : 'Upcoming' }} Sessions
        </h2>
        <b-button
          @click="showArchived = !showArchived"
          variant="primary"
          class="mb-3"
          >{{ showArchived ? 'Hide' : 'Show' }} Archived Sessions</b-button
        >
        <SeriesSessionList
          :sessions="info.program"
          :showArchived="showArchived"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="12">
        <h2>Searchable Archived Sessions</h2>
        <div>
          <iframe
            width="100%"
            height="600"
            src="https://app.searchie.io/playlist/XPno5vXbGN/embed"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import sanityClient from '~/sanityClient'
import BlockContent from 'sanity-blocks-vue-component'
import SeriesSessionList from '~/components/series/SeriesSessionList'
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
    BlockContent,
    MoreInfoForm
  },
  data() {
    return {
      showArchived: false
    }
  },
  async asyncData() {
    let data = await sanityClient.fetch(queryCurrentSeries)

    const mapped = data.info.program.map(function(session) {
      session.session.archived =
        add(new Date(session.session.schedule.from), { days: 3 }) < new Date()
      return session
    })
    data.info.program = mapped

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
