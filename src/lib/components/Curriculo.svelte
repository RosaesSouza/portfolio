<script>
	import { curriculumTranslations } from "../stores/curriculumTranslations.js";
</script>

<div class="curriculo-container">
	<section class="academica-section">
		<h2>{$curriculumTranslations.academicTitle}</h2>

		<div class="curso-item">
			<h3>{$curriculumTranslations.education.degree}</h3>
			<p>
				<strong>{$curriculumTranslations.education.institution}</strong>
			</p>
			<p>{$curriculumTranslations.education.period}</p>
		</div>

		<div class="curso-item">
			<h3>{$curriculumTranslations.education.highSchool}</h3>
			<p>
				<strong>{$curriculumTranslations.education.institution}</strong>
			</p>
			<p>{$curriculumTranslations.education.completion}</p>
		</div>
	</section>

	<section class="experiencia-section">
		<h2>{$curriculumTranslations.experienceTitle}</h2>

		<div class="experiencia-item">
			<h3>{$curriculumTranslations.experience.currentJob.title}</h3>
			<p>
				<strong
					>{$curriculumTranslations.experience.currentJob
						.company}</strong
				>
			</p>
			<p>{$curriculumTranslations.experience.currentJob.period}</p>
			<ul class="nota">
				{#each $curriculumTranslations.experience.currentJob.tasks as task}
					<li>{task}</li>
				{/each}
			</ul>
		</div>

		<div class="experiencia-item">
			<h3>{$curriculumTranslations.experience.internship.title}</h3>
			<p>
				<strong
					>{$curriculumTranslations.experience.internship
						.company}</strong
				>
			</p>
			<p>{$curriculumTranslations.experience.internship.period}</p>
			<ul class="nota">
				{#each $curriculumTranslations.experience.internship.tasks as task}
					<li>{task}</li>
				{/each}
			</ul>
		</div>
	</section>
</div>

<style>
    .curriculo-container::-webkit-scrollbar {
        display: none;
    }

    .curriculo-container {
        width: 100%;
        max-height: 55vh;
        display: flex;
        flex-direction: column;
        color: var(--primary-color);
        margin: 0 auto;
        line-height: 1.2;
        text-align: left;
        box-sizing: border-box;
        overflow-y: auto;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }

    h2 {
        color: var(--primary-color);
        font-size: 1.8em;
        margin: 0px 0px 20px 0px;
        padding-bottom: 10px;
        text-align: center;
    }

    h3 {
        font-size: 1.4em;
        color: var(--primary-color);
        margin-top: 25px;
        margin-bottom: 5px;
    }

    p {
        margin-bottom: 5px;
    }

    .nota {
        font-style: italic;
        font-size: 0.9em;
        color: var(--primary-color);
        opacity: 0.6;
        margin-top: -3px;
    }

    ul {
        list-style-type: disc;
        margin-left: 20px;
        padding-left: 0;
        margin-top: 5px;
    }

    li {
        margin-bottom: 5px;
    }

    .curso-item,
    .experiencia-item {
        width: 100%;
        max-width: 800px;
        margin-left: 5px;
        border-left: 3px solid #ccc;
        padding-left: 15px;
        margin-bottom: 30px;
    }

    /*--------------------------RESPONSIVIDADE--------------------------*/
    @media (min-width: 1700px) {
        .curriculo-container {
            max-height: 70vh;
            line-height: 1.5;
        }

        h2 {
            font-size: 2.3em;
        }

        h3 {
            font-size: 2em;
        }

        p {
            font-size: 1.8em;
        }

        .nota {
            font-size: 1.4em;
        }
        
        ul {
            margin-left: 30px;
        }
        
        li {
            margin-bottom: 8px;
        }
        
        .curso-item,
        .experiencia-item {
            padding-left: 25px;
            border-left: 5px solid #ccc;
            margin-bottom: 40px;
        }
    }

    @media (max-width: 1000px) {
        .curriculo-container {
            max-height: 60vh;
        }
        
        h2 {
            font-size: 1.5em;
            position: relative;
            margin-bottom: 15px;
        }

        h3 {
            font-size: 1.2em;
            margin-top: 20px;
        }
        
        p {
            font-size: 0.95em;
        }
        
        .nota {
            font-size: 0.85em;
        }
        
        .curso-item,
        .experiencia-item {
            padding-left: 12px;
            margin-bottom: 25px;
        }
    }

    @media (max-width: 700px) {
        .curriculo-container {
            max-height: calc(100vh - 250px);
            padding: 0 10px;
        }
        
        h2 {
            font-size: 1.3em;
            margin-bottom: 10px;
            padding-bottom: 5px;
        }
        
        h3 {
            font-size: 1.1em;
            margin-top: 15px;
        }
        
        p {
            font-size: 0.9em;
            line-height: 1.3;
        }
        
        .nota {
            font-size: 0.8em;
        }
        
        ul {
            margin-left: 15px;
            margin-top: 3px;
        }
        
        li {
            margin-bottom: 3px;
            line-height: 1.3;
        }
        
        .curso-item,
        .experiencia-item {
            padding-left: 10px;
            border-left: 2px solid #ccc;
            margin-bottom: 20px;
        }
    }
</style>
