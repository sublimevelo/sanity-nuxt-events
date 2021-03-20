<template>
  <b-navbar
    toggleable="lg"
    :sticky="true"
    variant="primary"
    type="light"
    class="mb-0"
  >
    <b-navbar-brand href="/">LEAD Philanthropy</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="/about">About Us</b-nav-item>
        <b-nav-item href="/services">Services</b-nav-item>
        <b-nav-item-dropdown text="Our Team" right>
          <b-dropdown-item href="/team">Our Team</b-dropdown-item>
          <b-dropdown-item href="/experience">Our Experience</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item href="/testimonials">Testimonials</b-nav-item>
        <b-nav-item href="/resources">Resources</b-nav-item>
        <b-nav-item href="/contact">Contact Us</b-nav-item>

        <b-nav-item-dropdown text="Events" right>
          <b-dropdown-item href="/connections">Connections</b-dropdown-item>
          <b-dropdown-item href="/minis">Connections: Minis</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown right>
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Log In</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
// import {
//   DropDown,
//   NavbarToggleButton,
//   Navbar,
//   NavLink
// } from '~/components/nowUI'
// import { Popover } from 'element-ui'
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    // DropDown,
    // Navbar,
    // NavbarToggleButton,
    // NavLink,
    // [Popover.name]: Popover
  }
}
</script>

<style scoped></style>
