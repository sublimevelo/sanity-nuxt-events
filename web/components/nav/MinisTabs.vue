<template>
  <div class="mt-3">
    <b-container>
      <b-row>
        <b-col sm="12">
          <div>
            <b-nav tabs>
              <b-nav-item
                v-for="item in minisNavItems"
                :active="onCurrentPath(item.url)"
                :key="item.url"
                :href="item.url"
              >
                {{ item.title }}
              </b-nav-item>
            </b-nav>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
// This content is included in ALL pages under /minis
// <NuxtChild /> is the entry point for child content
import minisNavItems from '~/lib/minisNavItems'
import { pull, isEqual } from 'lodash'
export default {
  data() {
    return {
      minisNavItems: minisNavItems
    }
  },
  methods: {
    onCurrentPath(thisURL) {
      thisURL = pull(thisURL.split('/'), '')
      const root = pull(this.$route.path.split('/'), '')
      return isEqual(thisURL, root)
    }
  }
}
</script>
<style scoped lang="scss">
.nav-tabs > .nav-item > .nav-link {
  background-color: #fff;
  &.active {
    background-color: #1259a0;
  }
}
</style>
