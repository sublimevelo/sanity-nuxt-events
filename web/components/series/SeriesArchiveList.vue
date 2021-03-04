<template>
  <b-card-group deck>
    <ul>
      <li v-for="session in sessions['archived']" :key="session._id">
        <strong>{{ session.session.title }}</strong> -
        {{
          sessionDT(
            session.session.schedule.from,
            session.session.schedule.duration
          )
        }}
      </li>
    </ul>
  </b-card-group>
</template>
<script>
import sessionDT from '~/lib/sessionDT'

export default {
  props: {
    sessions: {
      type: Object
    }
  },
  methods: {
    sessionDT: sessionDT
  }
}
</script>

<style scoped>
/* @import '../styles/custom-properties.css'; */
</style>
