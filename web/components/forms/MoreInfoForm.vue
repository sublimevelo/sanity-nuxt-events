<template>
  <div>
    <b-form
      name="minis-more-info"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      v-if="show"
    >
      <input type="hidden" name="form-name" value="minis-more-info" />
      <input
        id="input-bot-field"
        name="input-bot-field"
        v-model="form.bot"
        type="hidden"
        placeholder="Don’t fill this out if you’re human"
      />

      <b-form-group
        id="input-group-email"
        label="Email address:"
        label-for="input-email"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-email"
          name="input-email"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-name"
        label="Your name:"
        label-for="input-name"
      >
        <b-form-input
          id="input-name"
          name="input-name"
          v-model="form.name"
          type="text"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>

    <!-- <h5>Form data</h5>
    <p>{{ form.email }}</p>
    <p>{{ form.name }}</p> -->
  </div>
</template>
<script>
export default {
  name: 'MinisMoreInfoForm',
  data() {
    return {
      form: {
        email: '',
        name: '',
        bot: ''
      },
      show: true
    }
  }
}
</script>
