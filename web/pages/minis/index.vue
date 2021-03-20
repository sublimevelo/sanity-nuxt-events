<template>
  <div>
    <div class="banner rellax-header" data-rellax-speed="-2">
      <b-container>
        <b-row>
          <b-col sm="12">
            <header class="header rellax-text" data-rellax-speed="-1">
              <h1 class="title">{{ info.name }}</h1>
            </header>
          </b-col>
        </b-row>
      </b-container>
      <div class="banner-image "></div>
    </div>
    <MinisTabs />
    <b-container>
      <b-row>
        <b-col sm="7">
          <h2 class="title">About {{ info.name }}</h2>
          <BlockContent :blocks="info.description" />
        </b-col>
        <b-col sm="5">
          <h2 class="title">Request More Information</h2>
          <MoreInfoForm />
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="12">
          <SeriesBlock :title="info.name" />
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="12">
          <h2 class="title">Searchable Archived Sessions</h2>
          <p>
            We welcome you to search all previous sessions for the topic of your
            choice. Hours of content can be time-consuming to review and the
            same topic may be addressed in multiple sessions.
          </p>
          <p>
            Have fun and we welcome you to join us on the first Wednesday of
            each month for another Connections: Mini!
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
  </div>
</template>

<script>
import sanityClient from '~/sanityClient'
import BlockContent from 'sanity-blocks-vue-component'
import MinisTabs from '~/components/nav/MinisTabs'
import SeriesBlock from '~/components/series/SeriesBlock'
import SeriesSessionList from '~/components/series/SeriesSessionList'
import MoreInfoForm from '~/components/forms/MoreInfoForm'

import initParallax from '@/utils/initParallax'

const queryCurrentSeries = `
{
  "info": *[_type == "series" && slug.current == "connections-minis"][0] {
		...,
    _id,
    image { ..., asset->},
      organizers[]->,
	}
}
`

export default {
  components: {
    SeriesBlock,
    SeriesSessionList,
    BlockContent,
    MinisTabs,
    MoreInfoForm
  },
  data() {
    return {}
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
    initParallax()
  },
  async asyncData() {
    return await sanityClient.fetch(queryCurrentSeries)
  },
  head() {
    return {
      title:
        'Connections: Minis | ' + this.$store.state.siteSettings.companyName,
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

<style scoped lang="scss">
.banner {
  // margin-top: 53px;
  height: 400px;
  overflow: hidden;
  position: relative;
  .header {
    position: absolute;
    width: 100%;
    top: 0;
    color: #fff;
    text-align: center;
  }
}
.banner-image {
  background: url('~assets/images/stlouis-banner.jpeg');
  height: 600px;
}
.jarallax.stlouis {
  height: 400px;
  /* position: relative; */
  /* margin-top: -200px; */
}
</style>
