<script>
    import { footerTranslations } from '../stores/footerTranslations.js';
    
    const ano = new Date().getFullYear();
</script>

<footer>
    <div class="copyright">{$footerTranslations.copyright.replace('{year}', ano)}</div>
</footer>

<style>
	footer {
		background-color: var(--surface-color);
		color: var(--primary-color);
		padding: 8px 40px;
		text-align: center;
		width: 100%;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: auto;
		border: 1px solid var(--surface-stroke);
		border-radius: 14px;
		box-shadow: 0 10px 24px var(--shadow-color);
		margin: 10px 0 0;
	}

	.copyright {
		font-size: 0.9rem;
		opacity: 0.85;
	}

	@media (max-width: 700px) {
		footer {
			padding: 8px 12px;
			border-radius: 0;
			position: fixed;
			left: 0;
			right: 0;
			bottom: 0;
			width: 100%;
			margin: 0;
			z-index: 20;
		}

		.copyright {
			font-size: 0.8rem;
			line-height: 1.3;
		}
	}

</style>
