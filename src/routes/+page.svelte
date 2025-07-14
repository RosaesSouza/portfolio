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
		height: 100vh;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}
</style>
