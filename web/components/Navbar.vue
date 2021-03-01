<template>
  <header class="header">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-container>
        <b-navbar-brand href="/">{{ title }}</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="/sessions">Sessions</b-nav-item>
            <b-nav-item href="/speakers">Speakers</b-nav-item>
            <b-nav-item v-if="ticketLink" :href="ticketLink"
              >Tickets</b-nav-item
            >
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
                <em>User Tools</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Login</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </header>
</template>

<script>
export default {
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

/* @import '../styles/custom-properties.css';

.header {
  padding: 1.5rem;
  max-width: var(--width-medium);
  box-sizing: border-box;
  margin: 0 auto;
}

@media screen and (min-width: 520px) {
  .header {
    display: flex;
    justify-content: space-between;
  }
}

@media screen and (min-width: 520px) {
  nav {
    display: flex;
    justify-content: flex-end;
  }
  nav a {
    margin-left: 2rem;
  }
}

.header a {
  display: block;
  color: inherit;
  text-decoration: inherit;
}

.home {
  font-weight: 600;
} */
</style>
