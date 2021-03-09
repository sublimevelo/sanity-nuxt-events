<template>
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "EducationEvent",
      "name": "{{ session.title }}",
      "startDate": "{{ startDate }}",
      "endDate": "{{ endDate }}",
      "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "location": {
        "@type": "VirtualLocation",
        "url": "{{ sessionURL }}"
      },
      "image": "{{ sessionImage(session)}}",
      "description": "{{ session.summary }}",
      "offers": {
        "@type": "Offer",
        "url": "{{ sessionURL }}",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      "performer": {
        "@type": "Person",
        "name": "{{ $personName(session.persons[0].person) }}",
        "alternateName": "{{ session.persons[0].person.title + ' ' + session.persons[0].person.institution }}"
      },
      "organizer": {
        "@type": "Organization",
        "name": "{{ siteSettings.companyName }}",
        "url": "{{ siteSettings.rootURL }}"
      }
    }
  </script>
</template>

<script>
import { parseISO, add, formatISO } from 'date-fns'

export default {
  props: {
    session: Object
    // showArchived: Boolean
  },
  data: data => {
    if (!data.$store.state) {
      return
    }
    return {
      siteSettings: data.$store.state.siteSettings
    }
  },
  methods: {
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
  computed: {
    startDate: function() {
      return formatISO(parseISO(this.session.schedule.from))
    },
    endDate: function() {
      return formatISO(
        add(parseISO(this.session.schedule.from), {
          minutes: this.session.schedule.duration
        })
      )
    },
    sessionURL: function() {
      return `${this.siteSettings.rootURL}${this.$route.path}`
    }
  }
}
</script>
