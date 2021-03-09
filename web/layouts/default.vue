<template>
  <div>
    <b-alert v-if="siteSettings.debug" variant="danger" show
      >Debug mode ON</b-alert
    >
    <Navbar :title="siteSettings.siteName" />
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
  data: data => {
    if (!data.$store.state) {
      return
    }
    return {
      year: new Date().getFullYear(),
      siteSettings: data.$store.state.siteSettings
    }
  }
}
</script>

<style></style>
