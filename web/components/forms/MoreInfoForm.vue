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
        v-model="form.bot"
        type="hidden"
        placeholder="Bots only"
      />

      <b-form-group
        id="input-group-email"
        label="Email address:"
        label-for="input-email"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-email"
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
          id="input-email"
          v-model="form.name"
          type="text"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>
    </b-form>

    <h5>Form data</h5>
    <p>{{ form.email }}</p>
    <p>{{ form.name }}</p>
  </div>

  <!-- <form
    name="ask-question"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="form-name" value="ask-question" />
    <label v-for="(panelist, index) in panelists" :key="index">
      <input
        type="radio"
        name="panelist"
        :value="panelist"
        @input="ev => updatePanelist"
        :checked="panelist === currentPanelist"
      />
      <span>{{ panelist }}</span>
    </label>
    <p class="hidden">
      <label
        >Don’t fill this out if you’re human: <input name="bot-field"
      /></label>
    </p>
    <button>Submit</button>
  </form> -->
</template>
<script>
export default {
  name: 'MinisMoreInfoForm',
  methods: {
    updatePanelist(ev) {
      this.currentPanelist = ev.target.value
    }
  },
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
