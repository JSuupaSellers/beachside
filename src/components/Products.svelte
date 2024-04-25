<script>
    import ProductCard from "./ProductCard.svelte";
import SectionWrapper from "./SectionWrapper.svelte";
let productFeatures = [
    {
        featureList: ["Single Speed", "Lightweight Frame", "Reliable Coaster Brakes"],
        description: "Perfect for casual rides around the island. Our single-speed bikes are easy to handle and great for all ages.",
        imgUrl: "url_to_single_speed_bike_image.jpg",
    },
    {
        featureList: ["Baby Seat Carrier", "Baby Trailer Attachment", "Sturdy Build"],
        description: "Experience the ultimate in family-friendly cycling with our versatile bikes. Equipped with a baby seat carrier or a baby trailer attachment, these bikes are built to ensure a comfortable and secure ride for your little ones. ",
        imgUrl: "url_to_baby_seat_bike_image.jpg",
    },
    {
        featureList: ["Kids Bikes", "Adjustable Seats", "Training Wheels"],
        description: "Make your child's biking experience fun and memorable. Our kids' bikes come in various sizes and exciting colors.",
        imgUrl: "url_to_kids_bike_image.jpg",
    },
];
</script>

<SectionWrapper id="products">
    <div class="flex flex-col gap-10 sm:gap-14 md:gap-24 flex-1 items-center justify-center pb-10 md:pb-14">
        <div class="flex flex-col gap-2">
            <p class="opacity-60 text-base sm:text-lg md:text-xl text-center">
                Start your <span class="text-indigo-400">adventure</span> today
            </p>
            <h2 class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center">
                Explore our <span class="text-red-400">products</span>
            </h2>
        </div>
        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative text-base">
            {#each productFeatures as productFeature, index}
                <ProductCard index={index} productFeature={productFeature}>
                    {#if index === 0}
                        Enjoy single speed <span class="text-indigo-400 font-medium">simplicity</span>
                        {:else if index === 1}
                        <span class="text-indigo-400 font-medium">Family-Friendly </span>rides 
                        {:else}
                        Bikes for little <span class="text-indigo-400 font-medium">explorers</span>
                    {/if}
                </ProductCard>
            {/each}
        </div>
    </div>
</SectionWrapper>