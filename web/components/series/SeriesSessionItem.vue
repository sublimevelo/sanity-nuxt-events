<template>
  <b-card
    v-if="!session.archived || (session.archived && showArchived)"
    class="mb-3"
    :class="{ archived: session.archived }"
    :img-src="sessionImage(session)"
    img-alt="session.persons[0].image.alt"
  >
    <!-- <div slot="header" class="mt-2">
      {{ session.sessionType }}
    </div> -->
    <h3 class="card-title h4 mb-0">
      {{ session.title }}
    </h3>
    <h6 class="subtitle mt-2 text-primary">
      <b-icon icon="info-circle" style="font-size: 1.3rem"></b-icon>

      {{ session.sessionType }}
    </h6>
    <b-card-text v-if="session.archived" class="dt text-muted">
      {{
        sessionDT(session.schedule.from, session.schedule.duration, true, false)
      }}
    </b-card-text>
    <b-card-text v-else class="dt text-muted">
      {{ sessionDT(session.schedule.from, session.schedule.duration) }}
    </b-card-text>
    <b-card-text>{{ session.summary }}</b-card-text>

    <div v-if="session.persons.length">
      <h4 class="h5">Presented by</h4>
      <b-list-group flush>
        <b-list-group-item
          v-for="person in getPresenters(session)[0]"
          :key="person._id"
          >{{ $personName(person.person) }}<br /><small
            >{{ person.person.title }}, {{ person.person.institution }}
          </small>
        </b-list-group-item>
        <b-list-group-item v-if="getPresenters(session)[1].length">
          ...
        </b-list-group-item>
      </b-list-group>
    </div>

    <b-card-footer>
      <b-button
        :to="{ path: '/minis/sessions/' + session.slug.current }"
        variant="primary"
        >More info</b-button
      >
    </b-card-footer>
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
    },
    getPresenters(session) {
      if (!session.persons) {
        return ''
      }
      return [session.persons.slice(0, 2), session.persons.slice(2)]
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
  max-width: 20rem;
  .list-group-item {
    background: transparent;
    padding: 0.5rem 0;
  }
}
</style>
