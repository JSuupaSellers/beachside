<script>
    let phoneNumber = "912-635-9801"
</script>

<div class="flex items-center gap-4">
    <button
        on:click={() => window.location.href = `tel:${phoneNumber}`}
        class="flex items-center text-base sm:text-lg md:text-xl specialBtnDark "
        >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884l2.847-2.853a1 1 0 0 1 1.588.092l2.293 3.525a1 1 0 0 1-.208 1.269l-1.352 1.204a1.003 1.003 0 0 0-.249 1.312l2.826 4.242a1.003 1.003 0 0 0 1.312.25l1.204-1.352a1 1 0 0 1 1.269-.209l3.525 2.293a1 1 0 0 1 .092 1.588l-2.853 2.847a1 1 0 0 1-1.401.03c-1.377-1.304-2.78-2.632-4.217-3.984-1.435-1.353-2.774-2.73-4.02-4.137a1 1 0 0 1-.03-1.401z"/>
        </svg>
        Call Us
    </button>
    <button
            on:click={() => window.open('https://www.google.com/maps/search/?api=1&query=Beachside+Bike+Rentals', '_blank')}
            class="flex items-center text-base sm:text-lg md:text-xl specialBtnDark"
        >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a1 1 0 01-.832-.445c-1.616-2.162-4.268-5.463-4.268-8.555C4.9 5.474 7.373 3 10 3s5.1 2.474 5.1 5.55c0 3.092-2.652 6.393-4.268 8.555A1 1 0 0110 18zm0-8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/>
          </svg>
            Find Us
        </button>
</div>