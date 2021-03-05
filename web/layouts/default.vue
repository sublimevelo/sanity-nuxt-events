<template>
  <div>
    <b-alert v-if="debug" variant="danger" show>Debug mode ON</b-alert>
    <Navbar
      :title="$store.state.conference.name"
      :ticket-link="$store.state.conference.ticket"
    />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      debug: this.$debug()
    }
  }
}
</script>

<style></style>
