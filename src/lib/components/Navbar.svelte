<script>
  import { quintOut } from 'svelte/easing';
  import { navTranslations } from '../stores/navTranslations.js';

  import Curriculo from './Curriculo.svelte';
  import Contato from './Contato.svelte';
  import Portfolio from './Portfolio.svelte';

  const menuOrder = ['curriculo', 'portfolio', 'contato'];

  let activeMenu = 'portfolio';
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
      `
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
      `
    };
  }
</script>

<nav>
  <button on:click={() => setMenu('curriculo')} class:active={activeMenu === 'curriculo'}>
    {$navTranslations.curriculum}
    <hr>
  </button>
  <button on:click={() => setMenu('portfolio')} class:active={activeMenu === 'portfolio'}>
    {$navTranslations.portfolio}
    <hr>
  </button>
  <button on:click={() => setMenu('contato')} class:active={activeMenu === 'contato'}>
    {$navTranslations.contact}
    <hr>
  </button>
</nav>

<main>
  {#if activeMenu === 'curriculo'}
    <div in:slideIn="{{ x: enterX, duration: 400, delay: 100 }}" out:slideOut="{{ x: leaveX, duration: 300 }}">
      <Curriculo />
    </div>
  {:else if activeMenu === 'portfolio'}
    <div in:slideIn="{{ x: enterX, duration: 400, delay: 100 }}" out:slideOut="{{ x: leaveX, duration: 300 }}">
      <Portfolio />
    </div>
  {:else if activeMenu === 'contato'}
    <div in:slideIn="{{ x: enterX, duration: 400, delay: 100 }}" out:slideOut="{{ x: leaveX, duration: 300 }}">
      <Contato />
    </div>
  {/if}
</main>

<style>
 nav {
    display: flex;
    justify-content: space-around;
    padding: 30px 0 0;
    width: 100%;
    max-width: 75%;
    margin: 0 auto;
    position: relative;
  }

  nav button {
    background: none;
    border: none; 
    font-size: 1.2em;
    cursor: pointer; 
    padding: 5px 10px;
    position: relative;
    color: #a0a0a0;
    transition: color 0.3s ease; 
    outline: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  nav button hr {
    width: 100%;
    border: none;
    margin-top: 5px;
    transition: all 0.3s ease;
  }

  nav button.active {
    color: var(--primary-color); 
  }

  nav button.active hr {
    background-color: var(--primary-color); 
    height: 2px; 
  }

  main{
    padding: 20px;
    flex-direction: column;
    flex-grow: 1; 
    display: flex;
    align-items: center; 
    justify-content: flex-start; 
    overflow: hidden;
    position: relative;
    width: 90%;
    margin: 0 auto; 
    box-sizing: border-box; 
    height: calc(100vh - 25vh - 100px);
    min-height: 0;
  }

  main > div {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    min-height: 0;
    padding: 20px;
    box-sizing: border-box;
  }

</style>
