<script>
    import CtAs from "./CTAs.svelte";
import Header from "./Header.svelte";
    import SectionWrapper from "./SectionWrapper.svelte"
</script>

<SectionWrapper>
    <Header />
    <div class="flex flex-col gap-10 flex-1 items-center justify-center pb-10 md:pb-14">
        <h2 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-[1200px] mx-auto w-full font-semibold">
            <span class="text-indigo-400">Explore</span> Jekyll Island In <br /><span class="text-red-400">Style</span>
        </h2>
        <p class="text-xl sm:text-2xl md:text-3xl text-center max-w-[1000px] mx-auto w-full"> Discover the beauty of Jekyll Island on two wheels. Our top-notch bicycle rental service offers a variety of styles and sizes for every adventure. <span class="italic">Visit us and start exploring today!</span></p> 
        <CtAs />
    </div>
</SectionWrapper>