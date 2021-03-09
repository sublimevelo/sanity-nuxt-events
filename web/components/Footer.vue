<template>
  <footer class="footer">
    <div class="power">
      Powered by
      <b-link :href="siteSettings.rootURL">{{ siteSettings.siteName }}</b-link>
      {{ year }} :: {{ siteSettings.phone }} :: {{ siteSettings.email }}
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'No title set'
    }
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

<style scoped></style>
