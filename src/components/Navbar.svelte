<script>
  import {
    ScrollToWelcome,
    ScrollToAbout,
    ScrollToProjects,
    ScrollToExperience,
    ScrollToContact,
  } from "../lib/HandleHistory";
  const navitem = [
    { name: "Home", handler: ScrollToWelcome },
    { name: "About", handler: ScrollToAbout },
    { name: "Projects", handler: ScrollToProjects },
    { name: "Experience", handler: ScrollToExperience },
    { name: "Contact", handler: ScrollToContact },
  ];

  import "./Global.css";
  let isDropdownOpen = false;
</script>

<nav
  class="bg-zinc-950 h-12 w-3/4 flex justify-between items-center mx-auto rounded-md shadow-md shadow-black px-4"
>
  <!-- Mobile Hamburger Menu -->
  <div class="lg:hidden">
    <button
      class="text-white px-4 py-2 hover:bg-zinc-600 rounded-md"
      on:click={() => (isDropdownOpen = !isDropdownOpen)}
    >
      ☰
    </button>
  </div>

  <!-- Desktop Navigation -->
  <div class="lg:flex justify-center items-center mx-auto hidden">
    {#each navitem as { name, handler }}
      <button
        on:click={handler}
        class="text-white px-4 py-2 hover:bg-zinc-600 rounded-md"
      >
        {name}
      </button>
    {/each}
  </div>
</nav>

<!-- Dropdown for Small Devices -->
{#if isDropdownOpen}
  <div
    class="bg-zinc-950 text-white w-3/4 mx-auto mt-2 rounded-md shadow-md lg:hidden Animate-SlideInDown"
  >
    {#each navitem as { name, handler }}
      <button
        on:click={() => {
          handler;
          isDropdownOpen = false;
        }}
        class="block w-full text-left px-4 py-2 hover:bg-zinc-600 rounded-md"
      >
        {name}
      </button>
    {/each}
  </div>
{/if}
