<script>
	import { Eye, Github } from "lucide-svelte";
	import {
		portfolioTranslations,
		projects,
	} from "../stores/portfolioTranslations.js";
</script>

<div class="projetos-container">
	{#each $projects as projeto (projeto.id)}
		<div class="projeto-item">
			<img src={projeto.src} alt={projeto.title} class="projeto-img" />
			<div class="projeto-content">
				<h3>{projeto.title}</h3>
				<p>{projeto.description}</p>
			</div>
			<div class="projeto-actions">
				<a
					href={projeto.link}
					target="_blank"
					class="action-link"
					title={$portfolioTranslations.viewProject}
				>
					<Eye size={24} />
				</a>
				<a
					href={projeto.git}
					target="_blank"
					class="action-link"
					title={$portfolioTranslations.viewCode}
				>
					<Github size={24} />
				</a>
			</div>
		</div>
	{/each}
</div>

<style>
	.projetos-container::-webkit-scrollbar {
		display: none;
	}

	.projetos-container {
		width: 100%;
		height: auto;
		display: grid;
		grid-template-columns: 1fr;
		color: var(--primary-color);
		margin: 0 auto;
		line-height: 1.2;
		text-align: left;
		box-sizing: border-box;
		overflow: visible;
		gap: 14px;
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
		padding: 14px 16px 28px;
		scroll-padding-bottom: 0;
	}

	.projeto-item {
		width: 100%;
		height: auto;
		min-height: 108px;
		flex: 0 0 auto;
		padding: 24px;
		background-color: color-mix(in srgb, var(--primary-color) 90%, #000 10%);
		border-radius: 18px;
		display: flex;
		align-items: center;
		color: var(--secondary-color);
		font-size: 1.1em;
		box-sizing: border-box;
		overflow: visible;
		position: relative;
		background-clip: padding-box;
		gap: 15px;
		border: 1px solid rgba(255, 255, 255, 0.07);
		box-shadow: 0 10px 18px rgba(11, 33, 23, 0.24);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
		animation: cardIn 0.5s ease both;
		max-width: 100%;
	}

	.projeto-item:hover {
		background-color: color-mix(in srgb, var(--secondary-color) 22%, var(--primary-color) 78%);
		transform: none;
		box-shadow: 0 10px 18px rgba(11, 33, 23, 0.24);
	}

	.projeto-img {
		width: 60px;
		height: 60px;
		object-fit: cover;
		border-radius: 8px;
		flex-shrink: 0;
		border: 1px solid rgba(255, 255, 255, 0.2);
	}

	.projeto-content {
		display: flex;
		flex-direction: column;
		gap: 5px;
		width: auto;
		flex: 1;
		min-width: 0;
	}

	.projeto-actions {
		display: flex;
		flex-direction: column;
		gap: 8px;
		flex-shrink: 0;
	}

	.action-link {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 6px;
		padding: 6px 6px;
		background-color: color-mix(in srgb, var(--secondary-color) 94%, transparent);
		color: var(--primary-color);
		text-decoration: none;
		border-radius: 50px;
		transition: all 0.2s ease;
		white-space: nowrap;
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.action-link:hover {
		background-color: color-mix(in srgb, var(--secondary-color) 100%, white 10%);
		transform: translateY(-2px) scale(1.03);
	}

	.projeto-item h3 {
		margin: 0;
		font-size: 1.2em;
		font-weight: 600;
		color: var(--secondary-color);
		overflow-wrap: anywhere;
	}

	.projeto-item p {
		margin: 0;
		font-size: 0.9em;
		opacity: 0.8;
		color: var(--secondary-color);
		overflow-wrap: anywhere;
	}

	.projeto-item:nth-child(1) { animation-delay: 0.04s; }
	.projeto-item:nth-child(2) { animation-delay: 0.08s; }
	.projeto-item:nth-child(3) { animation-delay: 0.12s; }
	.projeto-item:nth-child(4) { animation-delay: 0.16s; }
	.projeto-item:nth-child(5) { animation-delay: 0.2s; }
	.projeto-item:nth-child(6) { animation-delay: 0.24s; }

	@keyframes cardIn {
		from {
			opacity: 0;
			transform: translateY(14px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	/*--------------------------RESPONSIVIDADE--------------------------*/
	@media (min-width: 1700px) {
		.projeto-item {
			min-height: 120px;
			font-size: 1.6em;
			padding: 25px;
			gap: 20px;
		}

		.projeto-img {
			width: 90px;
			height: 90px;
			border-radius: 12px;
		}

		.action-link {
			gap: 9px;
			padding: 10px;
		}

		.action-link :global(svg) {
			width: 32px;
			height: 32px;
		}
		
		.projeto-content {
			gap: 8px;
		}
	}

	@media (max-width: 1000px) {
		.projetos-container {
			gap: 10px;
			padding: 12px 12px 22px;
		}

		.projeto-item {
			min-height: 84px;
			padding: 18px;
			gap: 12px;
			font-size: 1em;
		}

		.projeto-img {
			width: 50px;
			height: 50px;
		}

		.projeto-actions {
			gap: 6px;
		}

		.action-link {
			padding: 5px;
		}
		
		.action-link :global(svg) {
			width: 20px;
			height: 20px;
		}
	}
	
	@media (max-width: 670px) {
		.projetos-container {
			gap: 8px;
			padding: 10px 10px 18px;
		}
		
		.projeto-item {
			padding: 16px;
			min-height: auto;
			gap: 8px;
			font-size: 0.9em;
			align-items: flex-start;
			flex-wrap: wrap;
		}
		
		.projeto-img {
			width: 40px;
			height: 40px;
			border-radius: 6px;
		}
		
		.projeto-content {
			gap: 3px;
		}
		
		.projeto-item h3 {
			font-size: 1.1em;
		}
		
		.projeto-item p {
			font-size: 0.85em;
		}
		
		.projeto-actions {
			gap: 5px;
			flex-direction: row;
			width: 100%;
			justify-content: flex-end;
		}
		
		.action-link {
			padding: 4px;
		}
		
		.action-link :global(svg) {
			width: 18px;
			height: 18px;
		}
	}
</style>
