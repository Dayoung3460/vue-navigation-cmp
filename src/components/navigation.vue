<template>
  <div>
    <button @click="navigationPrevious" v-show="!isFirst()">
      Previous
    </button>
    <button @click="navigationNext">
      {{ nextButtonText() }}
    </button>
  </div>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {
      currentStep: this.$route.path === '/' ? 1 : this.$route.path.replace('/', '')
    }

  },

  created() {

  },
  methods: {
    nextButtonText() {
      if(this.$route.name === 'forthStep' || (this.$route.name === 'thirdStep' && !this.$store.state.hasFourthStep)) {
        return 'finish'
      }
      return 'Next'
    },
    isFirst() {
      return this.$route.name === 'firstStep'
    },

    navigationNext() {
      if(this.$route.name === 'fourthStep' || (this.$route.name === 'thirdStep' && !this.$store.state.hasFourthStep)) {
        this.submit()
      } else {
        this.$router.push(`/${++this.currentStep}`)
      }
    },

    navigationPrevious() {
      if(this.$route.name === 'fourthStep') {
        this.$router.push('/3')
      } else if(this.$route.name === 'thirdStep') {
        this.$router.push('/2')
      } else if(this.$route.name === 'secondStep') {
        this.$router.push('/')
      }
    },
    submit() {
      alert('Submitted to the back-end')
    }
  },


}
</script>

<style scoped>

</style>
