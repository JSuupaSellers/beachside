<script>
    import SectionWrapper from "./SectionWrapper.svelte";

    export let faqs = [
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
  
  <SectionWrapper id = "FAQ">
    <div class="my-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-extrabold text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
        <div class="space-y-6">
        {#each faqs as faq}
            <div class="p-6 border-b border-gray-200">
            <h3 class="text-xl font-semibold text-gray-900">{faq.question}</h3>
            <p class="mt-2 text-base text-gray-700">{faq.answer}</p>
            </div>
        {/each}
        </div>
    </div>
  </SectionWrapper>