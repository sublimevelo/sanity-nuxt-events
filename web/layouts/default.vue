<template>
  <div id="top">
    <main-navbar></main-navbar>
    <nuxt />
    <!-- <main-footer></main-footer> -->
    <div class="action backToTop" @click="toTop()">
      <b-icon
        icon="arrow-up"
        class="h2 rounded bg-primary p-1 mb-0"
        variant="light"
      ></b-icon>
    </div>
  </div>
</template>
<script>
import MainNavbar from '@/components/nav/MainNavbar.vue'
// import MainFooter from '@/components/nav/MainFooter.vue'
export default {
  components: {
    MainNavbar
    // MainFooter
  },
  methods: {
    toTop() {
      window.scrollTo(0, 0)
    }
  }
}
</script>
<style>
.action.backToTop {
  position: fixed;
  bottom: 10px;
  right: 10px;
}
</style>
