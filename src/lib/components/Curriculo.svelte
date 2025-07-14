<script>
	import { curriculumTranslations } from '../stores/curriculumTranslations.js';
</script>

<div class="curriculo-container">
	<section class="academica-section">
	  <h2>{$curriculumTranslations.academicTitle}</h2>
	  
	  <div class="curso-item">
		<h3>{$curriculumTranslations.education.degree}</h3>
		<p><strong>{$curriculumTranslations.education.institution}</strong></p>
		<p>{$curriculumTranslations.education.period}</p>
	  </div>
	  
	  <div class="curso-item">
		<h3>{$curriculumTranslations.education.highSchool}</h3>
		<p><strong>{$curriculumTranslations.education.institution}</strong></p>
		<p>{$curriculumTranslations.education.completion}</p>
	  </div>
	</section>
  
	<section class="experiencia-section">
	  <h2>{$curriculumTranslations.experienceTitle}</h2>
	  
	  <div class="experiencia-item">
		<h3>{$curriculumTranslations.experience.currentJob.title}</h3>
		<p><strong>{$curriculumTranslations.experience.currentJob.company}</strong></p>
		<p>{$curriculumTranslations.experience.currentJob.period}</p>
		<ul class="nota">
		  {#each $curriculumTranslations.experience.currentJob.tasks as task}
			<li>{task}</li>
		  {/each}
		</ul>
	  </div>
  
	  <div class="experiencia-item">
		<h3>{$curriculumTranslations.experience.internship.title}</h3>
		<p><strong>{$curriculumTranslations.experience.internship.company}</strong></p>
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
	  max-height: 50vh;
	  display: flex;
	  flex-direction: row;
	  color: var(--primary-color);
	  margin: 0 auto; 
	  line-height: 1.2; 
	  text-align: left; 
	  box-sizing: border-box; 
	  overflow-y:scroll; 
	}
  
	h2 {
	  position: sticky;
	  top: -2px;
	  background-color: var(--secondary-color);
	  color: var(--primary-color);
	  z-index: 2;
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
  
	.curso-item, .experiencia-item {
	  margin-left: 30px;
	  border-left: 3px solid #ccc; 
	  padding-left: 15px;
	}
  
	.experiencia-item{
		margin-left: 5px;
		display: block; 
	}
  
	@media (max-width: 1000px) {
	  .curriculo-container {
		flex-direction: column;
	  }

	  .curso-item, .experiencia-item {
	    margin-bottom: 30px;
	  }

	  .experiencia-item{
		margin-top: 5px;
	  }

	  h2 {
		font-size: 1.5em;
		position: relative;
	  }

	  h3 {
		font-size: 1.2em;
	  }
	}
  </style>