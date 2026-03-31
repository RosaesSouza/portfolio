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
        height: auto;
        max-height: none;
        min-height: fit-content;
        display: flex;
        flex-direction: column;
        color: var(--primary-color);
        margin: 0 auto;
        line-height: 1.3;
        text-align: left;
        box-sizing: border-box;
        overflow: visible;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
        animation: sectionReveal 0.55s ease both;
        padding: 14px 16px 28px;
        gap: 18px;
        scroll-padding-bottom: 0;
    }

    .academica-section,
    .experiencia-section {
        width: 100%;
        max-width: 920px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 24px;
        min-width: 0;
    }

    h2 {
        color: var(--primary-color);
        font-size: 1.8em;
        margin: 0px 0px 16px 0px;
        padding-bottom: 8px;
        text-align: center;
        letter-spacing: 0.02em;
        border-bottom: 1px solid color-mix(in srgb, var(--accent-color) 48%, transparent);
        grid-column: 1 / -1;
    }

    h3 {
        font-size: 1.4em;
        color: var(--primary-color);
        margin-top: 0;
        margin-bottom: 5px;
        overflow-wrap: anywhere;
    }

    p {
        margin-bottom: 5px;
        line-height: 1.35;
        overflow-wrap: anywhere;
    }

    .nota {
        font-style: italic;
        font-size: 0.9em;
        color: var(--text-soft);
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
        overflow-wrap: anywhere;
    }

    .curso-item,
    .experiencia-item {
        width: 100%;
        max-width: 100%;
        margin-left: 0;
        border-left: 3px solid color-mix(in srgb, var(--accent-color) 45%, transparent);
        background: color-mix(in srgb, var(--secondary-color) 82%, transparent);
        border-radius: 12px;
        padding: 14px 16px;
        margin-bottom: 0;
        box-shadow: 0 7px 14px color-mix(in srgb, var(--shadow-color) 52%, transparent);
        min-width: 0;
        overflow: visible;
    }

    @keyframes sectionReveal {
        from {
            opacity: 0;
            transform: translateY(12px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /*--------------------------RESPONSIVIDADE--------------------------*/
    @media (min-width: 1700px) {
        .curriculo-container {
            max-height: none;
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
            padding: 20px 24px;
            border-left: 5px solid #ccc;
            margin-bottom: 0;
        }
    }

    @media (max-width: 1000px) {
        .academica-section,
        .experiencia-section {
            grid-template-columns: 1fr;
            max-width: 100%;
        }

        .curriculo-container {
            height: auto;
            max-height: 100%;
            padding: 10px 10px 22px;
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
            padding: 10px 12px;
            margin-bottom: 12px;
        }
    }

    @media (max-width: 700px) {
        .curriculo-container {
            height: auto;
            max-height: 100%;
            padding: 8px 0 18px;
            align-items: center;
        }

        .academica-section,
        .experiencia-section {
            width: 90%;
            max-width: 90%;
            margin: 0 auto;
            padding: 0;
            box-sizing: border-box;
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
            padding: 10px;
            border-left: 2px solid color-mix(in srgb, var(--accent-color) 50%, transparent);
            margin: 0 auto 10px;
            max-width: 100%;
            width: 100%;
            overflow-wrap: anywhere;
            word-break: break-word;
        }
    }
</style>
