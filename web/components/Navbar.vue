<template>
  <header class="header">
    <b-navbar toggleable="lg" type="dark" variant="primary" class="mb-3">
      <b-container>
        <b-navbar-brand href="/">{{ title }}</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <MinisNavItemsDropdown :menuItems="minisNavItems" />
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <!-- <b-nav-form>
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Search"
              ></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit"
                >Search</b-button
              >
            </b-nav-form> -->

            <!-- <b-nav-item-dropdown text="User Tools" right>
              <b-dropdown-item href="#">Login</b-dropdown-item>
            </b-nav-item-dropdown> -->

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>Client Tools</em>
              </template>
              <b-dropdown-item href="#">Login</b-dropdown-item>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </header>
</template>

<script>
import MinisNavItemsDropdown from '~/components/nav/MinisNavItemsDropdown'
import minisNavItems from '~/lib/minisNavItems'

export default {
  components: { MinisNavItemsDropdown },
  data() {
    return {
      minisNavItems: minisNavItems
    }
  },
  props: {
    title: {
      type: String,
      default: 'No title set'
    },
    ticketLink: {
      type: String,
      default: undefined
    }
  }
}
</script>

<style scoped>
.navbar .container {
  padding-left: 15px;
  padding-right: 15px;
}
</style>
