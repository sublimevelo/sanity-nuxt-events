<template>
  <div>
    <MinisTabs />
    <b-container>
      <b-row>
        <b-col sm="12">
          <SeriesSessionSchema :session="session" />
          <section>
            <h1 class="title">{{ session.title }}</h1>
            <b-row>
              <b-col sm="8">
                <b-img
                  v-if="session.image"
                  :src="processImage(session.image)"
                  fluid
                  alt="Responsive image"
                  class="mb-3"
                ></b-img>
                <div class="mb-3 dt text-muted">
                  {{
                    sessionDT(session.schedule.from, session.schedule.duration)
                  }}
                </div>
                <BlockContent
                  v-if="session.description"
                  :blocks="session.description"
                />
                <div v-else>No description provided</div>
              </b-col>
              <b-col sm="4">
                <PersonBlock
                  v-for="person in session.persons"
                  :key="person._id"
                  :person="person"
                />
              </b-col>
            </b-row>
          </section>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import groq from 'groq'
import sanityClient from '~/sanityClient'
import BlockContent from 'sanity-blocks-vue-component'
import PersonBlock from '~/components/blockContent/PersonBlock'
import MinisTabs from '~/components/nav/MinisTabs'

import SeriesSessionSchema from '~/components/series/SeriesSessionSchema'

import sessionDT from '~/lib/sessionDT'

const query = groq`
{
"session": *[_type == "seriesSession" && slug.current == $slug] {
    ...,
    persons[] {
      person-> {
        ...,
        image {
          ...,
          asset->
        }
      }
    }
  }[0]
}
`

export default {
  components: {
    BlockContent,
    PersonBlock,
    SeriesSessionSchema,
    MinisTabs
    // SocialLinks
  },
  data() {
    return {
      title: undefined
      //   bio: [],
      //   program: this.$store.getters.getProgram,
      //   plainTextBio: blocksToText(this.bio)
    }
  },
  async asyncData({ params }) {
    return await sanityClient.fetch(query, params)
  },
  methods: {
    sessionDT: sessionDT,
    processImage: function(image) {
      if (!image) {
        return
      }
      image = this.$urlFor(image)
        .width(400)
        .height(250)
      return image.url()
    }
  },
  head() {
    return {
      title:
        'Connections: Minis Speakers | ' +
        this.$store.state.siteSettings.companyName
      // title: 'LEAD Services | '
      // meta: [
      //   {
      //     hid: 'description',
      //     name: 'description',
      //     content: this.info.summary
      //   },
      //   {
      //     hid: 'keywords',
      //     name: 'keywords',
      //     content: this.info.keywords.join(',')
      //   }
      // ]
    }
  }
}
</script>

<style scoped></style>
