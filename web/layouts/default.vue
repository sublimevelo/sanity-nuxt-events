<template>
  <div>
    <main-navbar></main-navbar>
    <nuxt />
    <!-- <main-footer></main-footer> -->
  </div>
</template>
<script>
import MainNavbar from '@/components/nav/MainNavbar.vue'
// import MainFooter from '@/components/nav/MainFooter.vue'
export default {
  components: {
    MainNavbar
    // MainFooter
  }
}
</script>
<style></style>
