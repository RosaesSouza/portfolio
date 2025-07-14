<script>
    import { footerTranslations } from '../stores/footerTranslations.js';
    
    const ano = new Date().getFullYear();
</script>

<footer>
    <div class="copyright">{$footerTranslations.copyright.replace('{year}', ano)}</div>
</footer>

<style>
	footer {
		background-color: var(--primary-color);
		color: var(--secondary-color);
		padding: 8px 40px;
		text-align: center;
        width: 100vw;
		margin-top: auto;
	}

	.copyright {
		font-size: 0.9rem;
	}

</style>
