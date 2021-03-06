<template>
  <b-container>
    <b-row>
      <b-col sm="12">
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
              <b-card
                v-for="person in session.persons"
                :key="person._id"
                class="mb-3"
                :class="{ archived: session.archived }"
                :img-src="processImage(person.person.image)"
                img-alt="person.person.image.alt"
              >
                <template #header>
                  <h4 class="mb-0">
                    {{ person.person.first + ' ' + person.person.last }}
                  </h4>
                </template>
                <b-card-text
                  >{{ person.person.title }},
                  {{ person.person.institution }}</b-card-text
                >
                <b-card-text>
                  <SocialLinks :socials="person.person.socials" />
                </b-card-text>
                <template #footer>
                  <b-button
                    :to="{
                      path: '/minis/speakers/' + person.person.slug.current
                    }"
                    variant="primary"
                    >My Bio</b-button
                  >
                </template>
              </b-card>
            </b-col>
          </b-row>
        </section>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import groq from 'groq'
import sanityClient from '~/sanityClient'
import BlockContent from 'sanity-blocks-vue-component'
import SocialLinks from '~/components/blockContent/SocialLinks'

import urlFor from '~/lib/imageBuilder'
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
    SocialLinks
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
    urlFor: urlFor,
    processImage: function(image) {
      if (!image) {
        return
      }
      image = urlFor(image)
        .width(400)
        .height(250)
      return image.url()
    }
  }
  //   head() {
  //     const { name } = this.$store.getters.conference
  //     return {
  //       title: `Sessions | ${name}`,
  //       meta: [
  //         {
  //           hid: 'description',
  //           name: 'description',
  //           content: this.plainTextBio
  //         }
  //       ]
  //     }
  //   }
}
</script>

<style scoped></style>
