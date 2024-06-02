<script>
    import SectionWrapper from "./SectionWrapper.svelte";

    export let faqs = [
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
      // Add more FAQs as needed
    ];
  </script>
  
  <SectionWrapper id = "FAQ">
    <div class="my-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center"><span class="text-indigo-400">Frequently</span> Asked Questions</h2>
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