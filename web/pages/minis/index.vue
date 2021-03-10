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
      <b-col sm="7">
        <h2>About {{ info.name }}</h2>
        <BlockContent :blocks="info.description" />
      </b-col>
      <b-col sm="5">
        <h2>Request More Information</h2>
        <MoreInfoForm />
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="12">
        <h2 class="title">
          {{ info.name }}
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
          <!-- <b-dropdown
            id="dropdown-dropright"
            dropright
            text="Filter by topic"
            variant="primary"
            class="mb-3"
          >
            <b-dropdown-item href="#">All</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here</b-dropdown-item>
          </b-dropdown> -->
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
    <b-row>
      <b-col sm="12">
        <h2>Searchable Archived Sessions</h2>
        <p>
          We welcome you to search all previous sessions for the topic of your
          choice. Hours of content can be time-consuming to review and the same
          topic may be addressed in multiple sessions.
        </p>
        <p>
          Have fun and we welcome you to join us on the first Wednesday of each
          month for another Connections: Mini!
        </p>
        <div>
          <b-button v-b-toggle.collapse-1 variant="primary"
            >How do I search?</b-button
          >
          <b-collapse id="collapse-1" class="mt-2">
            <b-card>
              <p class="card-text">
                Simply start the video below and click the "magnifying glass"
                icon
                <b-icon
                  icon="search"
                  class="rounded bg-primary p-1"
                  variant="light"
                  style="font-size: 1.3rem"
                ></b-icon>
                in the video window. Enter any topic or search word of your
                choice and be taken to the location where your topic was
                discussed - within any Mini presentation - or multiple
                presentations.
              </p>
            </b-card>
          </b-collapse>
        </div>
        <p></p>
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
      showArchived: false,
      numActiveSessions: 0,
      showMD: true
    }
  },
  methods: {
    toggleArchivedSessions() {
      this.showArchived = !this.showArchived
      this.$bvToast.show('session-toast')
    }
  },
  mounted() {
    if (!this.numActiveSessions) {
      this.showArchived = true
    }
  },
  async asyncData() {
    let data = await sanityClient.fetch(queryCurrentSeries)

    let mapped = data.info.program.map(function(session) {
      session.session.archived =
        add(new Date(session.session.schedule.from), { days: 3 }) < new Date()
      return session
    })

    mapped = sortBy(mapped, ['session.schedule.from'])
    data.info.program = mapped

    data.numActiveSessions = filter(mapped, function(o) {
      return !o.session.archived
    }).length

    return data
  },
  head() {
    // if (!this.haveInfo) {
    //   return
    // }
    return {
      title: this.info.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.info.summary
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.info.keywords.join(',')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss"></style>
