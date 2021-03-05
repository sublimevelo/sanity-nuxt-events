<template>
  <b-container>
    <b-row>
      <b-col sm="12">
        <section>
          <h1 class="title">{{ session.title }}</h1>
          <BlockContent :blocks="session.description" />
          <!-- {{ session }} -->
          <!-- <div class="bio" :v-if="bio.length > 0">
            <BlockContent v-if="bio" :blocks="bio" />
          </div>
          <div v-if="scheduleItems" class="conferenceSessions">
            <h2>Sessions</h2>
            <SessionItem
              v-for="scheduleItem in scheduleItems"
              :key="scheduleItem._key"
              :schedule-item="scheduleItem"
            />
          </div> -->
        </section>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import groq from 'groq'
import sanityClient from '~/sanityClient'
import BlockContent from 'sanity-blocks-vue-component'

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
    BlockContent
  },
  data() {
    return {
      title: undefined
      //   bio: [],
      //   program: this.$store.getters.getProgram,
      //   plainTextBio: blocksToText(this.bio)
    }
  },
  //   computed: {
  //     scheduleItems: data => {
  //       return data.program.schedule.filter(item => {
  //         return (
  //           item.conferenceSession &&
  //           item.conferenceSession.persons &&
  //           item.conferenceSession.persons.filter(
  //             person => person.person._id === data.id
  //           ).length > 0
  //         )
  //       })
  //     }
  //   },
  async asyncData({ params }) {
    return await sanityClient.fetch(query, params)
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
