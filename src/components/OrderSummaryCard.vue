<template>
  <div class="mx-6 w-full bg-white rounded-2xl sm:w-[450px] shadow-xl">
    <!-- Hero Section Start -->
    <div class="hero-section rounded-t-2xl sm:h-[221px]">
    </div>
    <!-- Hero Section End -->

    <!-- Content Section Start -->
    <div class=" py-8 sm:py-12">
      <h1 class="font-redhatdisplay font-black text-darkBlue text-2xl mb-6">Order Summary</h1>
      <p class="mx-10 sm:mx-20 text-desaturatedBlue mb-[30px] text-base">
        You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
      </p>
      <div class="mx-6 sm:mx-12 h-20 bg-veryPaleBlue rounded-2xl flex py-[1.125rem] px-4 mb-6">
        <img src="../assets/images/icon-music.svg" alt="" class=" pr-4">
        <div class="w-full text-left">
          <h2 class="text-darkBlue font-black text-sm">Annual Plan</h2>
          <p class="text-sm text-desaturatedBlue">$59.99/year</p>
        </div>
        <div class="flex items-center text-right">
          <a href="#" class="font-black text-secondary text-xs underline underline-offset-1 hover:text-opacity-70 hover:no-underline">Change</a>
        </div>
      </div>
      <a href="#" class="flex mx-6 sm:mx-12 mb-4 sm:mb-6 h-[3.125rem] justify-center items-center text-white text-sm font-bold bg-secondary rounded-2xl shadow-xl hover:opacity-70">Proceed to Payment</a>
      <a href="#" class="text-center font-bold text-desaturatedBlue text-sm hover:text-darkBlue">Cancel Order</a>
    </div>
    <!-- Content Section End -->
  </div>
</template>

<script>
export default {

}
</script>

<style>
.hero-section{
  @apply w-full h-40;
  background-image: url('../assets/images/illustration-hero.svg');
  background-size: cover;
}
</style>