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
        <div v-if="$debug() && showMD">
          <h4 class="mt-3" @click="showMD = !showMD">Metadata (x)</h4>
          <p class="subtitle">
            This info won't show on the page in production, only for SEO
          </p>
          <p>
            Summary:
            <small>
              <em>
                {{ info.summary }}
              </em>
            </small>
          </p>
          <p>
            Keywords:
            <small v-for="k in info.keywords" :key="k">
              <em> "{{ k }}", </em>
            </small>
          </p>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="12">
        <h2 class="title">
          {{ info.name }},
          <small class="text-muted"
            >{{ showArchived ? 'All' : 'Upcoming' }} Sessions</small
          >
        </h2>
        <b-alert v-if="!numActiveSessions" variant="info" show
          >No upcoming sesssions. Showing archived sessions.</b-alert
        >
        <b-button
          v-if="numActiveSessions"
          @click="toggleArchivedSessions()"
          variant="primary"
          class="mb-3"
          >{{ showArchived ? 'Hide' : 'Show' }} Archived Sessions</b-button
        >
        <b-toast
          toaster="b-toaster-bottom-left"
          id="session-toast"
          title="Updating session list"
          auto-hide-delay="3000"
        >
          {{ !showArchived ? 'Hiding' : 'Showing' }} archived sessions
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
      // this.$bvToast.toast(`Showing archived sessions`, {
      //   title: `Updating session list`,
      //   toaster: toaster,
      //   solid: true
      //   // 'auto-hide-delay': 1000
      // })
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
