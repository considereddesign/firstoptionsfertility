<template>
  <div class="container-narrow mx-auto mt-20">
    <h1 class="md:pt-12">{{ msg }}</h1>
    <p class="text-lg mt-8">
      At First Options Fertility we specialise in male fertility testing. In a straightforward non-invasive process we analyse your semen and guide you on your first steps to taking control of your fertility.
    </p>
    <p class="text-lg mt-4">
      First Options Fertility is located in Gorey, Co. Wexford servicing clients in the South-East region in a discreet and professional manner.
    </p>

    <AppButton class="mt-12 primary"
      link="https://calendly.com/firstoptionsfertility/30min"
      msg="Make an Appointment"
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
