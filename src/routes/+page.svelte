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
      answer: "Yes. They also are limited to 40 pounds."
    },
    {
      question: "Are there any age restrictions for renting bikes?",
      answer: "Yes, riders must be at least 18 years old to rent a bike on their own. Minors must have a parent or guardian sign the rental agreement on their behalf."
    },
    {
      question: "What happens if the bike breaks down?",
      answer: "In case of a breakdown, please call us immediately. We offer roadside assistance during our operating hours."
    },
    {
      question: "Do you provide any accessories with the bike rentals?",
      answer: "Yes, all bike rentals include a lock and optional basket at no extra charge."
    },
    {
      question: "What forms of payment do you accept?",
      answer: "We accept all major credit cards, debit cards, and cash payments at our rental location."
    },
    {
      question: "Are there any special safety rules or local regulations I should be aware of?",
      answer: "Yes, we advise all our customers to follow local biking regulations, including riding on the right side of the road and using bike lanes where available. Helmets are strongly recommended and provided for free."
    },
    {
      question: "Do you offer long-term rental discounts?",
      answer: "Yes, we offer discounts for rentals longer than a week. Please contact us for more details on long-term rates."
    }
];
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

  