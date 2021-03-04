<template>
  <b-card-group deck>
    <SeriesSessionItem
      v-for="session in sessions['upcoming']"
      :key="session._id"
      :session="session.session"
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
    sessions: {
      type: Object
    }
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
