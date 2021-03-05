<template>
  <b-container>
    <b-row>
      <b-col sm="12">
        <div v-for="person in people" :key="person._id">
          <h2>{{ person.first }} {{ person.last }}</h2>
          <p>{{ person.title }}, {{ person.institution }}</p>
          <BlockContent :blocks="person.bio" />
          <h3>Socials</h3>
          <SocialLinks :socials="person.socials" />
          <h3>Sessions</h3>
          <ul>
            <li v-for="session in person.sessions" :key="session._id">
              {{ session.title }}
            </li>
          </ul>
        </div>
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
    image {
        alt,
        "url": asset->url
        },
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
