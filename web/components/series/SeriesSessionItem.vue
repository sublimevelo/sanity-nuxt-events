<template>
  <b-card
    v-if="!session.archived || (session.archived && showArchived)"
    :class="{ archived: session.archived }"
    :title="session.title"
    :img-src="sessionImage(session)"
    img-alt="session.persons[0].image.alt"
  >
    <b-card-text v-if="session.archived" class="dt text-muted">
      {{
        sessionDT(session.schedule.from, session.schedule.duration, true, false)
      }}
    </b-card-text>
    <b-card-text v-else class="dt text-muted">
      {{ sessionDT(session.schedule.from, session.schedule.duration) }}
    </b-card-text>
    <b-card-text>{{ session.summary }}</b-card-text>

    <b-card-text>
      <strong>Presented by</strong>
      <br />
      <span v-for="person in session.persons" :key="person._id">
        {{ person.person.first }} {{ person.person.last }}</span
      ><br />
    </b-card-text>
    <template #footer>
      <b-button
        :to="{ path: '/minis/sessions/' + session.slug.current }"
        variant="primary"
        >More info</b-button
      >
      <small class="text-muted"></small>
    </template>
  </b-card>
</template>
<script>
import urlFor from '~/lib/imageBuilder'
import sessionDT from '~/lib/sessionDT'

import { dateFilter } from 'vue-date-fns'

export default {
  props: {
    session: Object,
    showArchived: Boolean
  },
  methods: {
    sessionDT: sessionDT,
    urlFor: urlFor,
    sessionImage: function(session) {
      let image = urlFor(session.persons[0].person.image)
        .width(400)
        .height(250)
      if (session.archived) {
        image = image.saturation(-100)
      }
      return image.url()
    }
  },
  filters: {
    dateFilter
  }
}
</script>

<style lang="scss" scoped>
// @import '../styles/custom-properties.css';

.archived {
  background: #ddd;
  .dt {
    color: rgb(100, 8, 8) !important;
  }
}

// .media {
//   border-bottom: 1px solid #bbb;
// }

// a.stealth-link {
//   &:link,
//   &:hover,
//   &:visited,
//   &:active {
//     color: #000;
//     text-decoration: none;
//   }
// }
</style>
