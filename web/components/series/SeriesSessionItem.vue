<template>
  <b-card
    :title="session.title"
    :img-src="
      urlFor(session.persons[0].person.image)
        .width(400)
        .height(250)
        .url()
    "
    img-alt="session.persons[0].image.alt"
  >
    <b-card-text class="text-muted">
      {{ sessionDT(session.schedule.from, session.schedule.duration) }}
    </b-card-text>
    <b-card-text>{{ session.summary }}</b-card-text>

    <b-card-text>
      <strong>Presented by</strong>
      <br />
      <span v-for="person in session.persons" :key="person._id">
        {{ person.person.name }} </span
      ><br />
    </b-card-text>
    <b-button
      :to="{ path: '/minis/sessions/' + session.slug.current }"
      variant="primary"
      >More info</b-button
    >
    <template #footer>
      <small class="text-muted"></small>
    </template>
  </b-card>
</template>
<script>
import SanityImage from '~/components/SanityImage'
import urlFor from '~/lib/imageBuilder'
import sessionDT from '~/lib/sessionDT'

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
    sessionDT: sessionDT,
    urlFor: urlFor
  },
  filters: {
    dateFilter
  }
}
</script>

<style lang="scss" scoped>
// @import '../styles/custom-properties.css';

.media {
  border-bottom: 1px solid #bbb;
}

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
