<template>
  <div>
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
  }
}
</script>

<style></style>
