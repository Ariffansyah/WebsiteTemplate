<script>
  import { ScrollToAbout } from "../lib/HandleHistory";
  import { Hr } from "flowbite-svelte";
  import "./Global.css";

  const Skills = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "MongoDB"],
    },
    {
      title: "Others",
      skills: ["Git", "GitHub", "VSCode"],
    },
  ];

  const Projects = [
    {
      name: "Project Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://banner2.cleanpng.com/20180710/cop/aawppr8zh.webp",
      alt: "Project",
    },
    {
      name: "Project Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://banner2.cleanpng.com/20180710/cop/aawppr8zh.webp",
      alt: "Project",
    },
    {
      name: "Project Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://banner2.cleanpng.com/20180710/cop/aawppr8zh.webp",
      alt: "Project",
    },
    {
      name: "Project Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://banner2.cleanpng.com/20180710/cop/aawppr8zh.webp",
      alt: "Project",
    },
    {
      name: "Project Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://banner2.cleanpng.com/20180710/cop/aawppr8zh.webp",
      alt: "Project",
    },
    {
      name: "Project Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://banner2.cleanpng.com/20180710/cop/aawppr8zh.webp",
      alt: "Project",
    },
  ];

  const Experience = [
    {
      Name: "Experience Name",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      Image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Aspect_ratio_-_16x9.svg/2560px-Aspect_ratio_-_16x9.svg.png",
    },
    {
      Name: "Experience Name",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      Image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Aspect_ratio_-_16x9.svg/2560px-Aspect_ratio_-_16x9.svg.png",
    },
  ];
</script>

<main>
  <section id="welcomesection" class="Animate-FadeIn">
    <div
      class="flex flex-col lg:flex-row justify-center items-center h-screen-nav mx-auto w-3/4 lg:w-2/3"
    >
      <div class="my-10 mr-0 lg:mr-10 w-3/4 order-last lg:order-none">
        <h1
          class="text-white text-xl lg:text-4xl font-bold text-center lg:text-start"
        >
          Your Name
        </h1>
        <p class="text-white text-sm lg:text-lg text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="flex justify-center lg:justify-start">
          <button
            on:click={ScrollToAbout}
            class="bg-zinc-600 text-white px-4 py-2 rounded-md mt-10 shadow-md shadow-black"
          >
            more
          </button>
        </div>
      </div>
      <div class="">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="Your Profile"
          class="w-48 h-48 lg:w-64 lg:h-64 rounded-full shadow-md shadow-black"
        />
      </div>
    </div>
  </section>
  <section id="aboutsection">
    <div
      class="flex flex-col lg:flex-row justify-center items-start min-h-screen mx-auto w-3/4"
    >
      <div class="my-10 lg:mr-10">
        <h1 class="text-white text-center text-xl lg:text-4xl font-bold">
          About me
        </h1>
        <p class="text-white mt-3 text-center text-sm lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h1 class="text-white text-center text-md lg:text-2xl font-bold mt-5">
          Skills
        </h1>
        <div class="flex flex-col lg:flex-row justify-center mt-3">
          {#each Skills as { title, skills }}
            <div
              class="flex flex-col items-center lg:items-start mx-auto mt-3 lg:mt-0"
            >
              <h1 class="text-white font-bold text-md lg:text-2xl">
                {title}
              </h1>
              <div class="flex flex-col justify-center">
                {#each skills as skills}
                  <h2 class="text-white text-sm lg:text-lg">
                    {skills}
                  </h2>
                {/each}
              </div>
            </div>
          {/each}
        </div>
        <Hr classHr="my-8 w-full" />
        <div
          class="flex flex-col justify-center items-center"
          id="projectsection"
        >
          <h1 class="text-white text-center text-md lg:text-2xl font-bold">
            Projects
          </h1>
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 lg:mx-10 mt-8"
          >
            {#each Projects as { name, description, image, alt }}
              <div
                class="flex flex-col item-center bg-zinc-900 h-auto w-auto rounded-md p-4 shadow-md shadow-black"
              >
                <img
                  src={image}
                  {alt}
                  class="w-64 h-64 rounded-md shadow-md shadow-black"
                />
                <h1 class="text-white text-center text-sm lg:text-lg mt-2">
                  {name}
                </h1>
                <p class="text-white text-center text-xs lg:text-sm w-64">
                  {description}
                </p>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="experiencesection">
    <div
      class="flex flex-col lg:flex-row justify-center min-h-screen mx-auto w-3/4"
    >
      <div class="my-10 lg:mr-10">
        <h1 class="text-white text-center text-xl lg:text-4xl font-bold">
          Experience
        </h1>
        <p class="text-white mt-3 text-center text-sm lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Hr classHr="my-8 w-full" />
        {#each Experience as { Name, Description, Image }}
          <div class="flex flex-col justify-center mt-5">
            <h1 class="text-white text-center text-md lg:text-2xl font-bold">
              {Name}
              <img
                src={Image}
                alt="Your Profile"
                class="shadow-md lg:w-1/2 mx-auto shadow-black mt-2"
              />
            </h1>
            <p class="text-white mt-2 text-center text-sm lg:text-lg">
              {Description}
            </p>
          </div>
        {/each}
        <Hr classHr="my-8 w-full" />
      </div>
    </div>
  </section>
  <section id="contactsection">
    <div
      class="flex flex-col lg:flex-row justify-center h-36 mx-auto
      w-3/4"
    >
      <div>
        <h1 class="text-white text-center text-xl lg:text-4xl font-bold">
          Contact
        </h1>
        <div class="mt-3 flex flex-row justify-center items-center">
          <a href="link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 mx-3"
              viewBox="0 0 512 512"
              ><path
                fill="#ffffff"
                d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
              />X-Twitter</svg
            >
          </a>
          <a href="link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 mx-3"
              viewBox="0 0 512 512"
              ><path
                fill="#ffffff"
                d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
              />Mail</svg
            >
          </a>
          <a href="link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 mx-3"
              viewBox="0 0 496 512"
              ><path
                fill="#ffffff"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              />Github</svg
            >
          </a>
        </div>
      </div>
    </div>
  </section>
</main>
