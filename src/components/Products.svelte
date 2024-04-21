<script>
    import ProductCard from "./ProductCard.svelte";
import SectionWrapper from "./SectionWrapper.svelte";
    let productFeatures = [
        {
            featureList: [],
            description: "",
            imgUrl: "",
        }
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
        <div class="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-14 lg:gap-20 relative text-base">
            {#each productFeatures as productFeature, index}
                <ProductCard index={index} productFeature={productFeature}>
                    {#if index === 0}
                        {:else if index === 1}
                        {:else}
                    {/if}
                </ProductCard>
            {/each}
        </div>
    </div>
</SectionWrapper>