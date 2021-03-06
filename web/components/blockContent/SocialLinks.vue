<template>
  <span>
    <span v-for="social in socials" :key="social._id">
      <b-link :href="social.url">
        <b-icon
          :icon="getIcon(social.title)"
          class="h2 mr-2 rounded bg-primary p-1"
          variant="light"
        ></b-icon
      ></b-link>
    </span>
  </span>
</template>

<script>
const socialsMap = {
  li: { title: 'LinkedIn', icon: 'linkedin' },
  tw: { title: 'Twitter', icon: 'twitter' },
  fb: { title: 'Facebook', icon: 'facebook' }
}

export default {
  props: {
    socials: {
      type: Array
    }
  },
  methods: {
    socialTitle: key => {
      return socialsMap[key].title
    },
    getIcon: key => {
      return socialsMap[key].icon
    }
  }
}
</script>
