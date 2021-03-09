<template>
  <b-container>
    <b-row>
      <b-col
        ><b-list-group>
          <b-list-group-item
            v-for="person in people"
            :key="person._id"
            :href="'#' + person.slug.current"
          >
            <b-media vertical-align="center">
              <template #aside>
                <b-img
                  :src="
                    $urlFor(person.image)
                      .width(60)
                      .height(60)
                      .url()
                  "
                  alt="placeholder"
                >
                </b-img>
              </template>
              <h2 class="h6 mt-0 mb-0">{{ $personName(person) }}</h2>
              <p>
                <small>{{ person.title }}, {{ person.institution }}</small>
              </p>
            </b-media>
          </b-list-group-item>
        </b-list-group>
        <!-- <div v-for="person in people" :key="person._id">
          <b-link :href="'#' + person.slug.current">
            <b-media vertical-align="center" class="mb-2">
              <template #aside>
                <b-img
                  :src="
                    $urlFor(person.image)
                      .width(60)
                      .height(60)
                      .url()
                  "
                  alt="placeholder"
                ></b-img>
              </template>
              <h2 class="h6 mt-0 mb-0">{{ $personName(person) }}</h2>
              <p>
                <small>{{ person.title }}, {{ person.institution }}</small>
              </p>
            </b-media>
          </b-link>
        </div> -->
      </b-col>
    </b-row>
    <b-row v-for="person in people" :key="person._id" :id="person.slug.current">
      <b-col sm="12">
        <b-row>
          <b-col sm="7">
            <h2>
              {{ $personName(person) }}
            </h2>
            <p>
              <SocialLinks :socials="person.socials" />
            </p>
            <p class="lead">{{ person.title }}, {{ person.institution }}</p>
            <BlockContent :blocks="person.bio" />
          </b-col>
          <b-col sm="5">
            <b-img
              v-if="person.image"
              :src="processImage(person.image)"
              fluid
              :alt="$personName(person)"
              class="mb-3"
            ></b-img>
            <h3>Sessions</h3>
            <b-list-group>
              <b-list-group-item
                v-for="session in person.sessions"
                :key="session._id"
                :href="'/minis/sessions/' + session.slug.current"
                >{{ session.title }}</b-list-group-item
              >
            </b-list-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="7"> </b-col>
          <b-col sm="5">
            <!-- <ul>
              <li v-for="session in person.sessions" :key="session._id">
                {{ session.title }}
              </li>
            </ul> -->
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import sanityClient from '~/sanityClient'
import BlockContent from 'sanity-blocks-vue-component'
import SocialLinks from '~/components/blockContent/SocialLinks'

import { filter } from 'lodash'

// groq can't deep filter on arrays, so we'll need to filter out dates in script :(
const query = `
{
  'people': *[_type == "person"] | order(last) {
    ...,
    image { ..., asset->},
    "sessions": *[
      _type == "seriesSession"
      && references(^._id)
    ]
  }
}
`

export default {
  components: {
    SocialLinks,
    BlockContent
  },
  async asyncData() {
    let data = await sanityClient.fetch(query)

    data.people = filter(data.people, function(o) {
      return o.sessions.length > 0
    })

    return data
  },
  methods: {
    processImage: function(image) {
      if (!image) {
        return
      }
      image = this.$urlFor(image)
        .width(400)
        .height(250)
      return image.url()
    }
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

<style scoped lang="scss">
.list-group-item {
  padding: 0.5rem 1rem;
}
</style>
