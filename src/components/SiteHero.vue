<template>
  <div class="container-narrow mx-auto mt-20">
    <h1 class="md:pt-12">{{ msg }}</h1>
    <p class="text-lg mt-8">
      At First Options Fertility we specialise in male fertility testing. In a straightforward simple process we assess your semen and guide you on your first steps to taking control of your fertility.
    </p>
    <p class="text-lg mt-4">
      First Options Fertility is located in Gorey, Co. Wexford. It is a modern fit for purpose health care centre with easy access from the surrounding areas.
    </p>

    <AppButton class="mt-12 primary"
      link="https://talentacquisitionie.typeform.com/to/dKDMZE5W"
      msg="Get Started"
      target="_blank"
    />
    <AppButton class="mt-12 ml-2 tertiary" link="#why-us" msg="Learn more" />
  </div>
</template>

<script>
import AppButton from './ui/AppButton.vue'

export default {
  name: 'SiteHero',
  components: {
    AppButton
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
