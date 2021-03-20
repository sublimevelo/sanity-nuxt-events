<template>
  <b-navbar
    toggleable="lg"
    :sticky="true"
    type="dark"
    variant="primary"
    class="mb-0"
  >
    <b-navbar-brand href="/">LEAD Philanthropy</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav> -->

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
        <!-- <b-nav-item href="/team">Our Team</b-nav-item> -->
        <!-- <b-nav-item href="/experience">Experience</b-nav-item> -->
        <!-- <b-nav-item href="/connections">Connections</b-nav-item> -->
        <!-- <b-nav-item-dropdown text="Minis" right>
          <b-dropdown-item href="/minis">About Minis</b-dropdown-item>
          <b-dropdown-item href="/minis/speakers"
            >Minis Speakers</b-dropdown-item
          >
        </b-nav-item-dropdown> -->

        <!-- <b-nav-item href="/connections">CallerMax®</b-nav-item> -->

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Log In</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <!-- <navbar position="fixed" type="primary" menu-classes="ml-auto">
    <template slot-scope="{ toggle, isToggled }">
      <nuxt-link v-popover:popover1 class="navbar-brand" to="/">
        LEAD Philanthropy
      </nuxt-link>
      <el-popover
        ref="popover1"
        popper-class="popover"
        placement="bottom"
        width="300"
        trigger="hover"
      >
        <div class="popover-body">
          Designed by Invision. Coded &nbsp; by CreativeTim and BinarCode
        </div>
      </el-popover>
    </template>
    <template slot="navbar-menu">
      <drop-down
        tag="li"
        title="Minis"
        icon="now-ui-icons design_app"
        class="nav-item"
      >
        <nav-link to="/">
          <i class="now-ui-icons design_image"></i> Presentation
        </nav-link>
        <nav-link to="/components">
          <i class="now-ui-icons business_chart-pie-36"></i> Components
        </nav-link>
        <a
          href="https://demos.creative-tim.com/nuxt-now-ui-kit-pro/documentation"
          target="_blank"
          class="dropdown-item"
        >
          <i class="now-ui-icons design_bullet-list-67"></i> Documentation
        </a>
      </drop-down>
      <drop-down
        tag="li"
        title="sections"
        icon="now-ui-icons files_paper"
        class="nav-item"
      >
        <nav-link to="/sections#headers">
          <i class="now-ui-icons shopping_box"></i> Headers
        </nav-link>
        <nav-link to="/sections#features">
          <i class="now-ui-icons ui-2_settings-90"></i> Features
        </nav-link>
        <nav-link to="/sections#blogs">
          <i class="now-ui-icons text_align-left"></i> Blogs
        </nav-link>
        <nav-link to="/sections#teams">
          <i class="now-ui-icons sport_user-run"></i> Teams
        </nav-link>
        <nav-link to="/sections#projects">
          <i class="now-ui-icons education_paper"></i> Projects
        </nav-link>
        <nav-link to="/sections#pricing">
          <i class="now-ui-icons business_money-coins"></i> Pricing
        </nav-link>
        <nav-link to="/sections#testimonials">
          <i class="now-ui-icons ui-2_chat-round"></i> Testimonials
        </nav-link>
        <nav-link to="/sections#contactus">
          <i class="now-ui-icons tech_mobile"></i> Contact Us
        </nav-link>
      </drop-down>

      <drop-down
        tag="li"
        title="Examples"
        icon="now-ui-icons design_image"
        class="nav-item"
      >
        <nav-link to="/about">
          <i class="now-ui-icons business_bulb-63"></i> About-us
        </nav-link>
        <nav-link to="/blog-post">
          <i class="now-ui-icons text_align-left"></i> Blog Post
        </nav-link>
        <nav-link to="/blog-posts">
          <i class="now-ui-icons design_bullet-list-67"></i> Blog Posts
        </nav-link>
        <nav-link to="/contact">
          <i class="now-ui-icons location_pin"></i> Contact Us
        </nav-link>
        <nav-link to="/landing">
          <i class="now-ui-icons education_paper"></i> Landing Page
        </nav-link>
        <nav-link to="/login">
          <i class="now-ui-icons users_circle-08"></i> Login Page
        </nav-link>
        <nav-link to="/pricing">
          <i class="now-ui-icons business_money-coins"></i> Pricing
        </nav-link>
        <nav-link to="/ecommerce">
          <i class="now-ui-icons shopping_shop"></i> Ecommerce Page
        </nav-link>
        <nav-link to="/product">
          <i class="now-ui-icons shopping_bag-16"></i> Product Page
        </nav-link>
        <nav-link to="/profile">
          <i class="now-ui-icons users_single-02"></i> Profile Page
        </nav-link>
        <nav-link to="/signup">
          <i class="now-ui-icons tech_mobile"></i> Signup Page
        </nav-link>
      </drop-down>
      <li class="nav-item">
        <a
          class="nav-link btn btn-default btn-neutral"
          href="https://www.creative-tim.com/product/nuxt-now-ui-kit-pro"
          target="_blank"
        >
          <p>Buy Now</p>
        </a>
      </li>
    </template>
  </navbar> -->
</template>

<script>
import {
  DropDown,
  NavbarToggleButton,
  Navbar,
  NavLink
} from '~/components/nowUI'
import { Popover } from 'element-ui'
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    DropDown,
    Navbar,
    NavbarToggleButton,
    NavLink,
    [Popover.name]: Popover
  }
}
</script>

<style scoped></style>
