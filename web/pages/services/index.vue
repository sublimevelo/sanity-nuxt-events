<template>
  <div>
    <b-container>
      <b-row>
        <b-col sm="12" v-for="serviceCat in services" :key="serviceCat._id">
          <h2 class="title">{{ serviceCat.title }}</h2>
          <b-row>
            <b-col
              sm="12"
              v-for="service in serviceCat.services"
              :key="service._id"
            >
              <h3 class="title">{{ service.name }}</h3>
              <BlockContent
                v-if="service.description"
                :blocks="service.description"
              />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import sanityClient from '~/sanityClient'
import BlockContent from 'sanity-blocks-vue-component'

// groq can't deep filter on arrays, so we'll need to filter out dates in script :(
const queryServices = `
{
  "services": *[_type == "serviceCategory"] | order(order)
	{
    _id,
    title,
    slug,
    image {
    	asset-> {
    		url
  		}
  	},
    services[]-> {

			_id,
      name,
			image {
        asset-> {
        	url
      	}
      },
			excerpt,
			description
    }
  }
}
`

export default {
  components: { BlockContent },
  data() {
    return {}
  },
  methods: {},
  async asyncData() {
    let data = await sanityClient.fetch(queryServices)
    return data
  },
  head() {
    return {
      title: 'LEAD Services | ' + this.$store.state.siteSettings.companyName
      // title: 'LEAD Services | '
      // meta: [
      //   {
      //     hid: 'description',
      //     name: 'description',
      //     content: this.info.summary
      //   },
      //   {
      //     hid: 'keywords',
      //     name: 'keywords',
      //     content: this.info.keywords.join(',')
      //   }
      // ]
    }
  }
}
</script>

<style scoped lang="scss"></style>
