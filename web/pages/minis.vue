<template>
  <b-container>
    <b-row>
      <b-col sm="12">
        <div>
          <b-nav pills small>
            <b-nav-item
              v-for="item in minisNavItems"
              :active="$route.path == item.url"
              :key="item.url"
              :href="item.url"
            >
              {{ item.title }}
            </b-nav-item>
          </b-nav>
        </div>
        <NuxtChild />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import minisNavItems from '~/lib/minisNavItems'
export default {
  data() {
    return {
      minisNavItems: minisNavItems
    }
  }
}
</script>
<style scoped></style>
