<template>
  <div>
    <b-card
      class="mb-3"
      :img-src="processImage(person.person.image)"
      img-alt="person.person.image.alt"
    >
      <h3 class="card-title h4 mb-0">
        {{ $personName(person.person) }}
      </h3>
      <b-card-text>
        {{ person.person.title }}, {{ person.person.institution }}
      </b-card-text>
      <b-card-text>
        <SocialLinks :socials="person.person.socials" />
      </b-card-text>
      <b-card-footer>
        <b-button
          :to="{
            path: '/minis/speakers/#' + person.person.slug.current
          }"
          variant="primary"
          >My Bio</b-button
        >
      </b-card-footer>
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
