<script>
    import SectionWrapper from "./SectionWrapper.svelte";

  const regularBikes = [
    { duration: '1 Hour', price: '$6.00' },
    { duration: '4 Hours', price: '$14.00' },
    { duration: 'All Day', price: '$20.00' },
    { duration: '2 Days', price: '$38.00' },
    { duration: '3 Days', price: '$50.00' },
    { duration: '1 Week', price: '$60.00' },
  ];

  const specialtyBikes = [
    { duration: '1 Hour', price: '$9.00' },
    { duration: '4 Hours', price: '$20.00' },
    { duration: 'All Day', price: '$28.00' },
    { duration: '2 Days', price: '$55.00' },
    { duration: '3 Days', price: '$75.00' },
    { duration: '1 Week', price: '$80.00' },
  ];

  const surreyBikes = [
    { type: 'Small 1 Hour', price: '$20.00' },
    { type: 'Small 2 Hours', price: '$30.00' },
    { type: 'Small 3 Hours', price: '$50.00' },
    { type: 'Small 4 Hours', price: '$60.00' },
    { type: 'Large 1 Hour', price: '$30.00' },
    { type: 'Large 2 Hours', price: '$45.00' },
    { type: 'Large 3 Hours', price: '$75.00' },
    { type: 'Large 4 Hours', price: '$90.00' },
  ];

  const regularBikeImages = [
    'https://beachsidebikerentals.s3.amazonaws.com/sun_boardwalk_men_blue.png',
    'https://beachsidebikerentals.s3.amazonaws.com/sun_boardwalk_womens_black.png',
    'https://beachsidebikerentals.s3.amazonaws.com/priority_white.webp',
    'https://beachsidebikerentals.s3.amazonaws.com/3g_gray.webp'  // Replace with actual URLs
  ];

  const specialtyBikeImages = [
    'https://beachsidebikerentals.s3.amazonaws.com/sun_traditional_kid_trike_blue.png', // Replace with actual URLs // Replace with actual URLs
    'https://beachsidebikerentals.s3.amazonaws.com/sun_traditional_trike_yellow.png'  // Replace with actual URLs
  ];

  const surreyBikeImages = [
    'https://beachsidebikerentals.s3.amazonaws.com/single_surrey.jpg', // Replace with actual URLs
    'https://beachsidebikerentals.s3.amazonaws.com/double_surrey.jpg', // Replace with actual URLs // Replace with actual URLs
  ];
</script>
<SectionWrapper id="pricing">
  <main class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <section class="text-center mb-12">
          <h1 class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center">Our <span class="text-red-400">Pricing</span></h1>
          <p class="mt-4 text-lg text-gray-600">Helmets, baskets, and locks are included in the pricing.</p>
      </section>

      <section class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div class="border rounded-lg shadow-sm p-6">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Regular Bikes</h2>
              <swiper-container space-between="10" slides-per-view="1" centered-slides="true" pagination="true">
                  {#each regularBikeImages as image}
                      <swiper-slide>
                          <img src={image} alt="Regular Bike" class="w-full rounded-lg" />
                      </swiper-slide>
                  {/each}
              </swiper-container>
              <ul class="mt-4">
                  {#each regularBikes as bike}
                      <li class="flex justify-between py-2">
                          <span>{bike.duration}</span>
                          <span class="font-semibold">{bike.price}</span>
                      </li>
                  {/each}
              </ul>
          </div>

          <div class="border rounded-lg shadow-sm p-6">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Specialty Bikes</h2>
              <swiper-container space-between="10" slides-per-view="1" centered-slides="true" pagination="true">
                  {#each specialtyBikeImages as image}
                      <swiper-slide>
                          <img src={image} alt="Specialty Bike" class="w-full rounded-lg" />
                      </swiper-slide>
                  {/each}
              </swiper-container>
              <ul class="mt-4">
                  {#each specialtyBikes as bike}
                      <li class="flex justify-between py-2">
                          <span>{bike.duration}</span>
                          <span class="font-semibold">{bike.price}</span>
                      </li>
                  {/each}
              </ul>
          </div>

          <div class="border rounded-lg shadow-sm p-6">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Surrey Family Bikes</h2>
              <swiper-container space-between="10" slides-per-view="1" centered-slides="true" pagination="true">
                  {#each surreyBikeImages as image}
                      <swiper-slide>
                          <img src={image} alt="Surrey Family Bike" class="w-full rounded-lg" />
                      </swiper-slide>
                  {/each}
              </swiper-container>
              <ul class="mt-4">
                  {#each surreyBikes as bike}
                      <li class="flex justify-between py-2">
                          <span>{bike.type}</span>
                          <span class="font-semibold">{bike.price}</span>
                      </li>
                  {/each}
              </ul>
          </div>
      </section>
  </main>
</SectionWrapper>

