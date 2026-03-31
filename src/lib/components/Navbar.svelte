<script>
  import { quintOut } from "svelte/easing";
  import { navTranslations } from "../stores/navTranslations.js";

  import Curriculo from "./Curriculo.svelte";
  import Contato from "./Contato.svelte";
  import Portfolio from "./Portfolio.svelte";

  const menuOrder = ["curriculo", "portfolio", "contato"];

  let activeMenu = "portfolio";
  let previousMenuIndex = menuOrder.indexOf(activeMenu);

  let enterX = 200;
  let leaveX = -200;

  $: {
    const currentMenuIndex = menuOrder.indexOf(activeMenu);

    if (currentMenuIndex > previousMenuIndex) {
      enterX = 200;
      leaveX = -200;
    } else if (currentMenuIndex < previousMenuIndex) {
      enterX = -200;
      leaveX = 200;
    }

    previousMenuIndex = currentMenuIndex;
  }

  function setMenu(menuName) {
    activeMenu = menuName;
  }

  function slideIn(node, params) {
    const { delay = 0, duration = 400, x = 0 } = params;

    return {
      delay,
      duration,
      easing: quintOut,
      css: (t, u) => `
        transform: translateX(${u * x}px);
        opacity: ${t};
      `,
    };
  }

  function slideOut(node, params) {
    const { delay = 0, duration = 300, x = 0 } = params;

    return {
      delay,
      duration,
      easing: quintOut,
      css: (t, u) => `
        transform: translateX(${u * x}px);
        opacity: ${t};
      `,
    };
  }
</script>

<nav>
  <button
    on:click={() => setMenu("curriculo")}
    class:active={activeMenu === "curriculo"}
  >
    <span class="nav-label">{$navTranslations.curriculum}</span>
    <hr />
  </button>
  <button
    on:click={() => setMenu("portfolio")}
    class:active={activeMenu === "portfolio"}
  >
    <span class="nav-label">{$navTranslations.portfolio}</span>
    <hr />
  </button>
  <button
    on:click={() => setMenu("contato")}
    class:active={activeMenu === "contato"}
  >
    <span class="nav-label">{$navTranslations.contact}</span>
    <hr />
  </button>
</nav>

<main>
  {#if activeMenu === "curriculo"}
    <div
      in:slideIn={{ x: enterX, duration: 400, delay: 100 }}
      out:slideOut={{ x: leaveX, duration: 300 }}
    >
      <Curriculo />
    </div>
  {:else if activeMenu === "portfolio"}
    <div
      in:slideIn={{ x: enterX, duration: 400, delay: 100 }}
      out:slideOut={{ x: leaveX, duration: 300 }}
    >
      <Portfolio />
    </div>
  {:else if activeMenu === "contato"}
    <div
      in:slideIn={{ x: enterX, duration: 400, delay: 100 }}
      out:slideOut={{ x: leaveX, duration: 300 }}
    >
      <Contato />
    </div>
  {/if}
</main>

<style>
  nav {
    display: flex;
    justify-content: center;
    align-items: stretch;
    padding: 24px 0 0;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    position: relative;
    gap: 12px;
    animation: navFade 0.65s ease both 0.1s;
  }

  nav button {
    background: color-mix(in srgb, var(--secondary-color) 78%, transparent);
    border: 1px solid var(--surface-stroke);
    border-radius: 999px;
    font-size: 1.2em;
    cursor: pointer;
    padding: 0 20px;
    position: relative;
    color: var(--text-soft);
    transition: color 0.3s ease, transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
    outline: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 56px;
    line-height: 1.1;
    text-align: center;
    box-shadow: 0 6px 16px var(--shadow-color);
    font-family: "Space Grotesk", sans-serif;
    font-weight: 600;
    flex: 1 1 0;
  }

  nav button hr {
    position: absolute;
    left: 50%;
    bottom: 9px;
    width: 0;
    transform: translateX(-50%);
    border: none;
    margin: 0;
    transition: all 0.3s ease;
    height: 2px;
    border-radius: 999px;
    background: linear-gradient(90deg, var(--accent-color), #ffc14e);
  }

  .nav-label {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    transform: translateY(-1px);
  }

  nav button:hover {
    transform: translateY(-2px);
    background: color-mix(in srgb, var(--secondary-color) 90%, transparent);
    color: var(--primary-color);
  }

  nav button.active {
    color: var(--primary-color);
    background: color-mix(in srgb, var(--secondary-color) 96%, transparent);
    box-shadow: 0 10px 22px var(--shadow-color);
  }

  nav button.active hr {
    width: min(56%, 64px);
  }

  main {
    padding: 18px;
    flex-direction: column;
    flex-grow: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    overflow: visible;
    position: relative;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    min-height: fit-content;
    background: transparent;
    border: none;
    border-radius: 0;
    box-shadow: none;
    margin-top: 10px;
    flex: 0 0 auto;
  }

  main > div {
    width: 100%;
    height: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: fit-content;
    padding: 22px 22px 28px;
    box-sizing: border-box;
    overflow: visible;
  }

  @keyframes navFade {
    from {
      opacity: 0;
      transform: translateY(12px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /*--------------------------RESPONSIVIDADE--------------------------*/
  @media (min-width: 1700px) {
    nav button {
      font-size: 2rem;
    }
  }

  @media (max-width: 1000px) {
    nav {
      max-width: 100%;
      padding: 20px 0 0;
      gap: 8px;
    }

    nav button {
      font-size: 1.1rem;
      padding: 0 12px;
      min-height: 50px;
    }

    main {
      width: 100%;
      padding: 8px 2px;
      border-radius: 0;
    }
    
    main > div {
      padding: 16px 12px 24px;
    }
  }

  @media (max-width: 670px) {
    nav {
      max-width: 100%;
      padding: 15px 0 0;
      gap: 6px;
      flex-wrap: wrap;
      justify-content: center;
    }
    
    nav button {
      font-size: 0.95rem;
      padding: 0 10px;
      min-width: 110px;
      min-height: 46px;
      flex: 1 1 30%;
    }

    main {
      height: auto;
      min-height: 0;
      padding: 8px 0;
      width: 100%;
      border-radius: 0;
    }
    
    main > div {
      padding: 12px 8px 20px;
    }
  }
</style>
