<script>
	import Header from '$lib/components/Header.svelte';
	import Banner from '$lib/components/Curriculo.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Contatos from '$lib/components/Contato.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<main>
	<Header />
	<Navbar />
	<Footer />
</main>

<style>
	main {
		height: auto;
		min-height: 100dvh;
		display: flex;
		flex-direction: column;
		overflow: visible;
		max-width: none;
		width: 100%;
		margin: 0 auto;
		padding: 0 16px 12px;
		box-sizing: border-box;
		animation: pageReveal 0.7s ease both;
	}

	@media (max-width: 700px) {
		main {
			min-height: 100dvh;
			height: auto;
			overflow: visible;
			padding: 0 8px 64px;
		}
	}

	@keyframes pageReveal {
		from {
			opacity: 0;
			transform: translateY(16px) scale(0.99);
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}
</style>
