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
          {$language === "pt" ? "PT" : "EN"}
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
    background: var(--surface-color);
    border: 1px solid var(--surface-stroke);
    border-radius: 26px;
    backdrop-filter: blur(8px);
    box-shadow: 0 16px 34px var(--shadow-color);
    margin-top: 14px;
    animation: topSlide 0.65s ease both;
  }

  .container {
    height: 100%;
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
  }

  .toggle {
    background: color-mix(in srgb, var(--secondary-color) 84%, transparent);
    border: 1px solid var(--surface-stroke);
    border-radius: 50%;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: var(--primary-color);
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    margin-top: 5px;
    font-weight: bold;
  }

  .toggle:hover {
    background: color-mix(in srgb, var(--secondary-color) 96%, transparent);
    border-color: var(--accent-color);
    transform: scale(1.05) translateY(-2px);
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
    margin-left: 14px;
    color: var(--primary-color);
    text-align: left;
    flex: 0 1 auto;
  }

  .title {
    font-size: 1.65rem;
    line-height: 1.2;
    letter-spacing: 0.01em;
    margin: 0;
  }

  .subtitle {
    font-size: 1rem;
    color: var(--text-soft);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin: 0;
  }

  hr {
    border: 0;
    height: 1px;
    background: linear-gradient(90deg, var(--accent-color), rgba(210, 175, 85, 0.15));
    margin: 8px 0;
    width: 100%;
  }

  img {
    width: 10vw;
    height: 10vw;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid color-mix(in srgb, var(--accent-color) 80%, transparent);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2);
    animation: avatarPop 0.75s ease both 0.12s;
  }

  @keyframes topSlide {
    from {
      opacity: 0;
      transform: translateY(-16px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes avatarPop {
    from {
      opacity: 0;
      transform: scale(0.85);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
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
      height: auto;
      min-height: 170px;
      padding: 14px 0;
    }

    .title {
      font-size: 1.1rem;
      line-height: 1.3;
    }

    .subtitle {
      font-size: 0.9rem;
    }

    .toggle {
      width: 38px;
      height: 38px;
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
      border-radius: 20px;
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
      text-align: left;
      margin-left: 0;
      margin-top: 15px;
      width: 100%;
    }

    img {
      width: 92px;
      height: 92px;
      margin-bottom: -12px;
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
