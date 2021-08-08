<template>
  <div class="first">

    <h1>first step</h1>
    <label for="first-name">First Name</label>
    <input type="text" id="first-name" name="firstName" v-model="firstName"/>

    <label for="email-address">Email address</label>
    <input type="email" id="email-address" name="email" v-model="email"/>
    <navigation/>
  </div>
</template>

<script>
import Navigation from "@/components/navigation";
export default {
  name: 'FirstStep',
  components: {Navigation},
  computed: {
    firstName: {
      get() {
        return this.$store.state.firstName
      },
      set(value) {
        this.$store.commit('setFirstName', {firstName: value})
      }
    },
    email: {
      get() {
        return this.$store.state.email
      },
      set(value) {
        this.$store.commit('setEmail', {email: value})
      }
    }
  }

}
</script>

<style scoped>

</style>
