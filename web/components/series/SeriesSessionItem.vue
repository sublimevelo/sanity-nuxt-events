<template>
  <b-card
    v-if="!session.archived || (session.archived && showArchived)"
    class="mb-3"
    :class="{ archived: session.archived }"
    :img-src="sessionImage(session)"
    img-alt="session.persons[0].image.alt"
  >
    <template #header>
      <h4 class="mb-0">
        {{ session.title }}
      </h4></template
    >
    <b-card-text v-if="session.archived" class="dt text-muted">
      {{
        sessionDT(session.schedule.from, session.schedule.duration, true, false)
      }}
    </b-card-text>
    <b-card-text v-else class="dt text-muted">
      {{ sessionDT(session.schedule.from, session.schedule.duration) }}
    </b-card-text>
    <b-card-text>{{ session.summary }}</b-card-text>

    <b-card-text>
      <strong>Presented by</strong>
      <br />
      <span v-for="(person, idx) in session.persons" :key="person._id">
        {{ $personName(person.person)
        }}<span v-if="!idx == session.persons.length - 1">, </span> </span
      ><br />
    </b-card-text>
    <template #footer>
      <b-button
        :to="{ path: '/minis/sessions/' + session.slug.current }"
        variant="primary"
        >More info</b-button
      >
    </template>
  </b-card>
</template>
<script>
import sessionDT from '~/lib/sessionDT'

import { dateFilter } from 'vue-date-fns'

export default {
  props: {
    session: Object,
    showArchived: Boolean
  },
  methods: {
    sessionDT: sessionDT,
    sessionImage: function(session) {
      let image = session.image || session.persons[0].person.image
      if (!image) {
        return
      }
      image = this.$urlFor(image)
        .width(400)
        .height(250)
      if (session.archived) {
        image = image.saturation(-100)
      }
      return image.url()
    }
  },
  filters: {
    dateFilter
  }
}
</script>

<style lang="scss" scoped>
.archived {
  background: rgba(0, 0, 0, 0.1);
  .dt {
    color: rgb(100, 8, 8) !important;
  }
}

.card {
  min-width: 18rem;
}
</style>
