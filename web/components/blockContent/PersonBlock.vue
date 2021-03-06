<template>
  <div>
    <b-card
      class="mb-3"
      :img-src="processImage(person.person.image)"
      img-alt="person.person.image.alt"
    >
      <template #header>
        <h4 class="mb-0">
          {{ $personName(person.person) }}
        </h4>
      </template>
      <b-card-text>
        {{ person.person.title }}, {{ person.person.institution }}
      </b-card-text>
      <b-card-text>
        <SocialLinks :socials="person.person.socials" />
      </b-card-text>
      <template #footer>
        <b-button
          :to="{
            path: '/minis/speakers/#' + person.person.slug.current
          }"
          variant="primary"
          >My Bio</b-button
        >
      </template>
    </b-card>
  </div>
</template>

<script>
import SocialLinks from '~/components/blockContent/SocialLinks'

export default {
  props: {
    person: {
      type: Object
    }
  },
  components: {
    SocialLinks
  },
  methods: {
    processImage: function(image) {
      if (!image) {
        return
      }
      image = this.$urlFor(image)
        .width(400)
        .height(250)
      return image.url()
    }
  }
}
</script>
