<template>
  <div class="">
    <SiteHero msg="Knowledge is power. Know your fertility."/>
    <ImageGallery />
    <WhySection />
    <HowSection />
    <StarterServices />
    <ScaleServices />
  </div>
</template>

<script>
import SiteHero from './SiteHero.vue'
import ImageGallery from './ImageGallery.vue'
import WhySection from './WhySection.vue'
import HowSection from './HowSection.vue'
import StarterServices from './StarterServices.vue'
import ScaleServices from './ScaleServices.vue'

export default {
  name: 'HomePage',
  components: {
    SiteHero,
    ImageGallery,
    WhySection,
    HowSection,
    StarterServices,
    ScaleServices,
  },
  props: {
    msg: String
  }
}
</script>
