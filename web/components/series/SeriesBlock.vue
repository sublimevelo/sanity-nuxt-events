<template>
  <div :class="{ container: containerize }">
    <b-row>
      <b-col>
        <h2 class="title mb-0">
          {{ title }}
          <small class="text-muted">
            - {{ showArchived ? 'All' : 'Upcoming' }} Sessions</small
          >
        </h2>
        <b-alert v-if="!numActiveSessions" variant="info" show
          >No upcoming sesssions. Showing archived sessions.</b-alert
        >
        <b-button-toolbar
          aria-label="Toolbar with button groups and dropdown menu"
        >
          <b-button
            v-if="numActiveSessions"
            @click="toggleArchivedSessions()"
            variant="primary"
            class="mr-1 mb-3"
            >{{ showArchived ? 'Hide' : 'Show' }} Archived Sessions</b-button
          >
        </b-button-toolbar>
        <b-toast
          toaster="b-toaster-bottom-left"
          id="session-toast"
          title="Updating session list..."
          variant="primary"
          auto-hide-delay="3000"
        >
          {{ !showArchived ? 'Hiding' : 'Showing' }} archived sessions. Done.
        </b-toast>
        <SeriesSessionList
          :sessions="info.program"
          :showArchived="showArchived"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import sanityClient from '~/sanityClient'
import BlockContent from 'sanity-blocks-vue-component'
import SeriesSessionList from '~/components/series/SeriesSessionList'

import { filter, sortBy, partition } from 'lodash'
import add from 'date-fns/add'

// groq can't deep filter on arrays, so we'll need to filter out dates in script :(
const queryCurrentSeries = `
*[_type == "series" && slug.current == "connections-minis"][0] {
		...,
    _id,
    image { ..., asset->},
      organizers[]->,
      program[] {
      session-> {
        ...,
        image { ..., asset->},
        persons[] {
          ...,
          person-> {
            ...,
          }
        }
      }
    }
	}
`

export default {
  props: {
    title: { type: String },
    containerize: { type: Boolean, default: false },
    sessions: { type: Array }
  },
  components: {
    SeriesSessionList,
    BlockContent
  },
  data() {
    return {
      showArchived: false,
      numActiveSessions: 0,
      showMD: true,
      info: {}
    }
  },
  mounted() {
    if (!this.numActiveSessions) {
      this.showArchived = true
    }
  },
  async fetch() {
    let fetchedData = await sanityClient.fetch(queryCurrentSeries)
    // console.log(fetchedData)

    let mapped = fetchedData.program.map(function(session) {
      session.session.archived =
        add(new Date(session.session.schedule.from), { days: 3 }) < new Date()
      return session
    })

    mapped = sortBy(mapped, ['session.schedule.from'])
    fetchedData.program = mapped

    this.numActiveSessions = filter(mapped, function(o) {
      return !o.session.archived
    }).length

    this.info = fetchedData
  },
  methods: {
    toggleArchivedSessions() {
      this.showArchived = !this.showArchived
      this.$bvToast.show('session-toast')
    }
  }
}
</script>

<style scoped lang="scss"></style>
