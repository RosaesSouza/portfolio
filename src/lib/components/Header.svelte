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

<div class="header">
  <div class="container">
    <img src={img.src} alt={$headerTranslations.profileAlt} />
    <div class="header-text">
      <p class="title">
        <strong>Gabriel Rosaes de Souza</strong><br />
        {$headerTranslations.title}
      </p>
      <hr />
      <p class="subtitle">
        PHP &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;svelte
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JavaScript
      </p>
    </div>
    <div class="header-options">
      <button
        class="toggle"
        on:click={toggleTheme}
        aria-label={$headerTranslations.themeToggle}
      >
        {#if $darkMode}
          <div>
            <Sun size={20} />
          </div>
        {:else}
          <div>
            <Moon size={20} />
          </div>
        {/if}
      </button>
      <button
        class="toggle"
        on:click={toggleLanguage}
        aria-label={$headerTranslations.languageToggle}
      >
        <div>
          {$language === "pt" ? "EN" : "PT"}
        </div>
      </button>
    </div>
  </div>
</div>

<style>
  .header {
    width: 100vw;
    height: 25vh;
    min-height: 200px;
    background: var(--primary-color);
  }

  .container {
    height: 100%;
    width: 90%;
    margin: 0 5%;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
  }

  .toggle {
    background: #fffce21a;
    border: 1px solid #fffce233;
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
    font-size: 0.8em;
    font-weight: bold;
  }

  .toggle:hover {
    background: #fffce233;
    border-color: #fffce266;
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
  @media (max-width: 1000px) {
    .header {
      height: 15vh;
      min-height: 100px;
    }

    .toggle {
      width: 40px;
      height: 40px;
    }
  }
</style>
