<script>
  import Hero from "../components/Hero.svelte";
  import Products from "../components/Products.svelte";
  import CTAs from "../components/CTAs.svelte";
  import FAQ from "../components/FAQ.svelte";
  import Pricing from "../components/Pricing.svelte";
  import { onMount } from 'svelte';

  let currentSection = 0;
  let sections = ['hero', 'products', 'pricing', 'faq'];
  const faqs = [
    {
      question: "Do you rent E-bikes?",
      answer: "Jekyll Island is governed by Jekyll Island Authority and they currently prohibit the rentals of any e-bikes on the island."
    },
    {
      question: "Is there a weight limit for the kids trailer?",
      answer: "There's a rough weight limit of approximately 40 pounds per seat & belt of the trailer. You can fit up to two kids of 40 pounds each."
    },
    {
      question: "Do you have anything for dogs?",
      answer: "Yes, we have converted some of our kids trailers into dog trailers. They also are limited to 40 pounds."
    },
    // Add more FAQs as needed
  ];

  function scrollToSection(index) {
    const section = document.getElementById(sections[index]);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      currentSection = index;
    }
  }

  function handleWheel(event) {
    if (event.deltaY > 0) {
      // Scroll down
      if (currentSection < sections.length - 1) {
        scrollToSection(currentSection + 1);
      }
    } else {
      // Scroll up
      if (currentSection > 0) {
        scrollToSection(currentSection - 1);
      }
    }
  }

  function handleSwipe(event) {
    if (event.deltaY > 0) {
      // Swipe down
      if (currentSection < sections.length - 1) {
        scrollToSection(currentSection + 1);
      }
    } else {
      // Swipe up
      if (currentSection > 0) {
        scrollToSection(currentSection - 1);
      }
    }
  }

  let startY;

  function handleTouchStart(event) {
    startY = event.touches[0].clientY;
  }

  function handleTouchMove(event) {
    if (!startY) return;

    let endY = event.touches[0].clientY;
    let deltaY = startY - endY;

    if (deltaY > 30) {
      // Swipe up
      if (currentSection < sections.length - 1) {
        scrollToSection(currentSection + 1);
      }
    } else if (deltaY < -30) {
      // Swipe down
      if (currentSection > 0) {
        scrollToSection(currentSection - 1);
      }
    }
  }

  // Add event listener for wheel events
  onMount(() => {
    window.addEventListener('wheel', handleWheel);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('wheel', handleSwipe);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  });
</script>

<style>
  main {
    scroll-behavior: smooth;
  }
</style>

<main class="flex flex-col">
  <section id="hero" class="section">
    <Hero />
  </section>
  <section id="products" class="section">
    <Products />
  </section>
  <section id="pricing" class="section">
    <Pricing />
  </section>
  <section id="faq" class="section">
    <FAQ {faqs} />
  </section>
</main>

  