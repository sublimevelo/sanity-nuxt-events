<template>
  <footer class="footer">
    <b-container>
      <b-row>
        <b-col md="6">
          &copy;<b-link :href="siteSettings.rootURL">{{
            siteSettings.siteName
          }}</b-link>
          {{ year }}
        </b-col>
        <b-col md="6" style="text-align: right;">
          <a
            v-if="siteSettings.phone"
            :href="'tel:' + linkPhone(siteSettings.phone)"
            >{{ siteSettings.phone }}</a
          ><br />
          <a v-if="siteSettings.email" :href="'mailto:' + siteSettings.email">{{
            siteSettings.email
          }}</a>
        </b-col>
      </b-row>
    </b-container>
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
  },
  methods: {
    linkPhone(num) {
      if (!num) {
        return ''
      }
      return num.replace(/[\.-]/g, '')
    }
  }
}
</script>

<style scoped>
.footer {
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #f5f5f5;
}
</style>
