<script>
    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    function scrollToSection(event) {
        const targetId = event.target.getAttribute('data-scroll');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        toggleMenu();
    }
</script>

<header class="flex flex-col relative z-20">
    <div class="max-w-[1400px] mx-auto w-full flex items-center justify-between p-4 py-6">
        <a href="/">
            <h1 class="font-semibold">
                BEACHSIDE <span class="text-indigo-400">BIKE</span> RENTALS
            </h1>
        </a>
        <div class="text-center text-gray-600 font-semibold">
            <span class="text-red-400">Everyday</span> 9 am - 5 pm EST
        </div>
        <button class="md:hidden grid place-items-center" on:click={toggleMenu}>
            <i class="fa-solid fa-bars"></i>
        </button>
        <nav class="hidden md:flex items-center gap-4 lg:gap-6">
            <a href="#products" class="duration-200 hover:text-indigo-400 cursor-pointer">Products</a>
            <a href="#faq" class="duration-200 hover:text-indigo-400 cursor-pointer">FAQ</a>
            <button class="specialBtn" data-scroll="pricing" on:click={scrollToSection}>See Prices</button>
        </nav>
    </div>


    <div class={`fixed inset-0 z-30 bg-black bg-opacity-50 transition-opacity ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} on:click={toggleMenu}></div>

    <div class={`fixed top-0 right-0 z-40 w-64 h-full bg-white shadow-lg transform transition-transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav class="p-8 flex flex-col items-center gap-4 lg:gap-6 md:hidden">
            <a href="#products" class="duration-200 hover:text-indigo-400 cursor-pointer" on:click={toggleMenu}>Products</a>
            <a href="#faq" class="duration-200 hover:text-indigo-400 cursor-pointer" on:click={toggleMenu}>FAQ</a>
            <button class="specialBtn" data-scroll="pricing" on:click={scrollToSection}>See Prices</button>
        </nav>
    </div>
</header>

<style>
  .specialBtn {
    background-color: #6366F1; /* bg-indigo-500 */
    color: white; /* text-white */
    padding: 0.5rem 1rem; /* py-2 px-4 */
    border-radius: 0.25rem; /* rounded */
    transition: background-color 0.2s; /* transition duration-200 */
  }

  .specialBtn:hover {
    background-color: #4338CA; /* bg-indigo-700 */
  }
</style>
