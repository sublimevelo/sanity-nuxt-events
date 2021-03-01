<template>
  <b-row cols="1" cols-lg="2" class="series-session-list">
    <div v-for="session in sessions" :key="session._id" class="series-session">
      <b-col>
        <SeriesSessionItem :session="session.session" />
        <!-- {{ sessions }} -->
      </b-col>
    </div>
  </b-row>
</template>
<script>
import SeriesSessionItem from '~/components/series/SeriesSessionItem'

export default {
  components: {
    SeriesSessionItem
  },
  props: {
    sessions: {
      type: Array
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
