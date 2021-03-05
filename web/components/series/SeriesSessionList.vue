<template>
  <b-card-group deck>
    <SeriesSessionItem
      v-for="session in sessions"
      :key="session._id"
      :session="session.session"
      :showArchived="showArchived"
    />
  </b-card-group>
</template>
<script>
import SeriesSessionItem from '~/components/series/SeriesSessionItem'

export default {
  components: {
    SeriesSessionItem
  },
  props: {
    sessions: Array,
    showArchived: Boolean
  }
}
</script>

<style scoped>
/* @import '../styles/custom-properties.css'; */

.conferenceSessionList {
  margin: 0;
  padding: 0;
}
</style>
