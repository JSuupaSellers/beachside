<script>
    import Hero from "../components/Hero.svelte";
    import Products from "../components/Products.svelte";
    import CTAs from "../components/CTAs.svelte";
    import FAQ from "../components/FAQ.svelte";
    import Pricing from "../components/Pricing.svelte";
  
    const faqs = [
      {
        question: "What is your return policy?",
        answer: "We offer a 30-day return policy on all items. Please contact customer service for more details."
      },
      {
        question: "How do I track my order?",
        answer: "Once your order has shipped, we will send you an email with the tracking information."
      },
      // Add more FAQs as needed
    ];
  </script>
  
  <main class="flex flex-col">
    <Hero />
    <Products />
    <Pricing />
    <FAQ {faqs} />

  </main>
  