<script>
  import { Moon, Sun } from "lucide-svelte";
  import { darkMode, toggleTheme } from "../stores/themeStore.js";
  import { language, toggleLanguage } from "../stores/languageStore.js";
  import { headerTranslations } from "../stores/headerTranslations.js";

  const img = {
    src: "/perfil.webp",
    alt: "Imagem de perfil do Gabriel Rosaes de Souza",
  };
</script>

<header class="header">
  <div class="container">
    <img src={img.src} alt={$headerTranslations.profileAlt} />
    <div class="header-text">
      <p class="title">
        <strong>Gabriel Rosaes de Souza</strong><br />
        {$headerTranslations.title}
      </p>
      <hr />
      <p class="subtitle">
        PHP &nbsp;&nbsp;-&nbsp;&nbsp; svelte &nbsp;&nbsp;-&nbsp;&nbsp; JavaScript
      </p>
    </div>
    <div class="header-options">
      <button
        class="toggle"
        on:click={toggleTheme}
        aria-label={$headerTranslations.themeToggle}
      >
        {#if $darkMode}
          <Sun size={20} />
        {:else}
          <Moon size={20} />
        {/if}
      </button>
      <button
        class="toggle"
        on:click={toggleLanguage}
        aria-label={$headerTranslations.languageToggle}
      >
        <span class="toggle-text">
          {$language === "pt" ? "EN" : "PT"}
        </span>
      </button>
    </div>
  </div>
</header>

<style>
  .header {
    width: 100%;
    height: 25vh;
    min-height: 200px;
    background: var(--primary-color);
  }

  .container {
    height: 100%;
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    position: relative;
  }

  .toggle {
    background: rgba(255, 252, 226, 0.1);
    border: 1px solid rgba(255, 252, 226, 0.2);
    border-radius: 50%;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: var(--secondary-color);
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    margin-top: 5px;
    font-weight: bold;
  }

  .toggle:hover {
    background: rgba(255, 252, 226, 0.2);
    border-color: rgba(255, 252, 226, 0.4);
    transform: scale(1.05);
  }

  .toggle:active {
    transform: scale(0.95);
  }

  .toggle :global(svg) {
    transition: transform 0.4s ease;
  }

  .toggle:hover :global(svg) {
    transform: rotate(15deg);
  }

  .toggle-text {
    font-size: 0.8rem;
  }

  .header-options {
    display: grid;
    gap: 10px;
    margin-left: auto;
  }

  .header-text {
    margin-left: 4%;
    color: var(--secondary-color);
  }

  .title {
    font-size: 1.5rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  hr {
    border: 0;
    height: 1px;
    background: var(--secondary-color);
    margin: 5px 0;
  }

  img {
    width: 10vw;
    height: 10vw;
    object-fit: cover;
    border-radius: 50%;
  }

  /*--------------------------RESPONSIVIDADE--------------------------*/
  @media (min-width: 1700px) {
    .header {
      height: 35vh;
      min-height: 370px;
    }

    .title {
      font-size: 2.5rem;
    }

    .toggle-text {
      font-size: 1.5rem;
    }

    .subtitle {
      font-size: 2rem;
    }

    .toggle {
      width: 80px;
      height: 80px;
      border-width: 2px;
    }

    .toggle :global(svg) {
      width: 40px;
      height: 40px;
    }
  }

  @media (max-width: 1000px) {
    .header {
      height: 15vh;
      min-height: 120px;
    }

    .title {
      font-size: 1rem;
      line-height: 1.3;
    }

    .subtitle {
      font-size: 0.9rem;
    }

    .toggle {
      width: 35px;
      height: 35px;
    }

    .toggle :global(svg) {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 670px) {
    .header {
      height: auto;
      min-height: 180px;
      padding: 20px 0 10px 0;
    }

    .container {
      width: 90%;
      flex-direction: column;
      position: relative;
    }

    .header-options {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      flex-direction: row;
      gap: 10px;
    }

    .header-text {
      text-align: center;
      margin-left: 0;
      margin-top: 15px;
      width: 100%;
    }

    img {
      width: 100px;
      height: 100px;
      margin-bottom: -25px;
    }

    .toggle {
      width: 32px;
      height: 32px;
      margin-top: 0;
    }

    .toggle :global(svg) {
      width: 18px;
      height: 18px;
    }
  }
</style>
