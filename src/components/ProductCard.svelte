<script>
    export let index;
    export let productFeature;
</script>
<div class="flex flex-col gap-8 md:gap-10 pt-10 sm:pt-5">
    <div class="flex flex-col gap-8 md:gap-10">
        <h4 class="text-2xl sm:text-3xl md:text-4xl max-w-[1000px] w-full font-medium relative pr-4 after:absolute after:top-full after:left-0 after:w-1/5 after:h-1.5 after:m-1 after:bg-slate-900">
            <slot />
        </h4>
        <p>{productFeature.description}</p>
        <div class="flex flex-col gap-3">
            {#each productFeature.featureList as feature}
                <div class="flex gap-2 items-center">
                    <div class="grid place-items-center px-1.5 text-xs sm:text-sm aspect-square rounded-full border-[1.5px] bg-white border-solid border-green-300">
                        <i class="fa-solid fa-bolt text-green-400"></i>
                    </div>
                    <p>{feature}</p>
                </div>
            {/each}
        </div>
    </div>
</div>

