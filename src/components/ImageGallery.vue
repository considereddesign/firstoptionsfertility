<template>
  <div class="mt-24 flex overflow-hidden w-full justify-center">
    <!-- <div class=""> -->
      <div class="flex items-baseline">
        <div class="image-container">
          <img src="@/assets/images/gallery-image--2.png" alt="First Options Fertility - Male Feritility Testing"/>
        </div>
        <div class="image-container">
          <img src="@/assets/images/gallery-image--1.png" alt="First Options Fertility - Know your fertility"/>
        </div>
        <div class="image-container">
          <img src="@/assets/images/gallery-image-0.png" alt="First Options Fertility - Semen Sample Collection"/>
        </div>
        <div class="image-container">
          <img src="@/assets/images/gallery-image-1.png" alt="First Options Fertility - Non-invasive process"/>
        </div>
        <div class="image-container">
          <img src="@/assets/images/gallery-image-2.png" alt="First Options Fertility - located in Gorey, Co. Wexford"/>
        </div>
        <div class="image-container">
          <img src="@/assets/images/gallery-image-3.png" alt="First Options Fertility - Produce your semen sample in the safety and privacy of your own home"/>
        </div>
      </div>
    <!-- </div> -->
  </div>
</template>

<script>

export default {
  name: 'ImageGallery',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image-container {
  border-radius: 16px;
  overflow: hidden;
  width: 282px;
  margin-right: 16px;
}
@media screen and (max-width: 780px) {
  .image-container {
    width: 120px;
  }
}
</style>
