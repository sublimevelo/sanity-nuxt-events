<template>
  <b-nav-item-dropdown>
    <!-- Using 'button-content' slot -->
    <template #button-content>
      <em>Minis</em>
    </template>
    <b-dropdown-item
      v-for="item in menuItems"
      :key="item.url"
      :href="item.url"
      >{{ item.title }}</b-dropdown-item
    >
  </b-nav-item-dropdown>
</template>
<script>
export default {
  props: {
    menuItems: {
      type: Array
    }
  }
}
</script>
