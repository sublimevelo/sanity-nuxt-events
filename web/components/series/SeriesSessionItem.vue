<template>
  <div>
    <b-link
      :to="{ path: '/sessions/' + session.slug.current }"
      class="stealth-link"
    >
      <b-media vertical-align="top" class="mb-2 pb-2">
        <template #aside>
          <div v-for="person in session.persons" :key="person._id">
            <SanityImage
              :image="person.person.image"
              :alt="person.person.image.alt"
              :width="80"
              :height="80"
              fit="crop"
              crop="focalpoint"
            />
          </div>
        </template>
        <h5 class="mt-0 mb-0">{{ session.title }}</h5>
        <p class="mb-1">
          {{ sessionDT(session.schedule.from, session.schedule.duration) }}
        </p>
        <p class="mb-0">{{ session.summary }}</p>
      </b-media>
    </b-link>
  </div>
</template>
<script>
import SanityImage from '~/components/SanityImage'
import blocksToText from '~/lib/blocksToText'
import { parseISO } from 'date-fns'
import { format } from 'date-fns'
import { add } from 'date-fns'
import { dateFilter } from 'vue-date-fns'

export default {
  components: {
    SanityImage
  },
  props: {
    session: {
      type: Object
    }
  },
  methods: {
    sessionDT: function(from, dur) {
      return `${format(parseISO(from), 'MMMM dd, ha')} - ${format(
        add(parseISO(from), { minutes: dur }),
        'ha'
      )}`
    }
  },
  filters: {
    dateFilter
  }
}
</script>

<style lang="scss" scoped>
// @import '../styles/custom-properties.css';

// .media {
//   border-bottom: 1px solid #bbb;
// }

a.stealth-link {
  &:link,
  &:hover,
  &:visited,
  &:active {
    color: #000;
    text-decoration: none;
  }
}
</style>
