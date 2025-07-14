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
		height: 100%;
		display: flex;
		flex-direction: column;
		color: var(--primary-color);
		margin: 0 auto;
		line-height: 1.2;
		text-align: left;
		box-sizing: border-box;
		overflow-y: auto;
		gap: 15px;
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}

	.projeto-item {
		width: 100%;
		height: auto;
		min-height: 80px;
		flex: 0 0 auto;
		padding: 20px;
		background-color: var(--primary-color);
		border-radius: 15px;
		display: flex;
		align-items: center;
		color: var(--secondary-color);
		font-size: 1.1em;
		box-sizing: border-box;
		overflow: hidden;
		position: relative;
		background-clip: padding-box;
		gap: 15px;
	}

	.projeto-img {
		width: 60px;
		height: 60px;
		object-fit: cover;
		border-radius: 8px;
		flex-shrink: 0;
	}

	.projeto-content {
		display: flex;
		flex-direction: column;
		gap: 5px;
		width: 100%;
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
		background-color: var(--secondary-color);
		color: var(--primary-color);
		text-decoration: none;
		border-radius: 50px;
		transition: all 0.2s ease;
		white-space: nowrap;
	}

	.action-link:hover {
		background-color: rgba(255, 252, 226, 0.9);
		transform: translateY(-1px);
	}

	.projeto-item h3 {
		margin: 0;
		font-size: 1.2em;
		font-weight: 600;
		color: var(--secondary-color);
	}

	.projeto-item p {
		margin: 0;
		font-size: 0.9em;
		opacity: 0.8;
		color: var(--secondary-color);
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
		}

		.projeto-item {
			min-height: 60px;
			padding: 15px;
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
		}
		
		.projeto-item {
			padding: 12px;
			min-height: auto;
			gap: 10px;
			font-size: 0.9em;
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
