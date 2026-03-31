<script>
	import { contactTranslations } from '../stores/contactTranslations.js';
</script>

<div class="contatos-container">
  <h2>{$contactTranslations.title}</h2>

  <div class="contact-grid">
    <article class="contact-item">
      <h3>{$contactTranslations.github}</h3>
      <p>
        <strong>
          <a
            href="https://github.com/RosaesSouza"
            target="_blank"
            rel="noopener noreferrer"
          >github.com/RosaesSouza</a>
        </strong>
      </p>
    </article>

    <article class="contact-item">
      <h3>{$contactTranslations.email}</h3>
      <p>
        <strong>
          <a href="mailto:gabrielrosaessouza@gmail.com"
            >gabrielrosaessouza@gmail.com</a
          >
        </strong>
      </p>
    </article>

    <article class="contact-item">
      <h3>{$contactTranslations.phone}</h3>
      <p><strong>(28) 99904-2952</strong></p>
    </article>

    <article class="contact-item">
      <h3>{$contactTranslations.linkedin}</h3>
      <p>
        <strong>
          <a
            href="https://www.linkedin.com/in/gabriel-rosaes-3a875122a/"
            target="_blank"
            rel="noopener noreferrer"
            >linkedin.com/in/gabriel-rosaes-3a875122a</a
          >
        </strong>
      </p>
    </article>
  </div>
</div>

<style>
  .contatos-container {
    width: 100%;
    min-width: 0;
    height: auto;
    max-height: none;
    display: grid;
    grid-template-rows: auto 1fr;
    color: var(--primary-color);
    margin: 0 auto;
    padding: 8px 10px 10px;
    line-height: 1.2;
    text-align: center;
    box-sizing: border-box;
    overflow: visible;
    animation: sectionReveal 0.55s ease both;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(180px, 1fr));
    gap: 10px;
    align-content: start;
  }

  .contact-item {
    border: 1px solid var(--surface-stroke);
    background: color-mix(in srgb, var(--secondary-color) 85%, transparent);
    border-radius: 14px;
    padding: 10px;
    min-height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
  }

  a {
    color: var(--primary-color);
    text-decoration: none;
    transition: color 0.25s ease;
  }

  a:hover {
    color: var(--accent-color);
  }

  h2 {
    background-color: transparent;
    color: var(--primary-color);
    font-size: 1.6em;
    margin: 0 0 8px 0;
    padding-bottom: 2px;
    text-align: center;
  }

  h3 {
    font-size: 0.98em;
    color: var(--primary-color);
    margin: 0 0 4px;
    overflow-wrap: anywhere;
  }

  p {
    font-size: 0.9em;
    margin: 0;
    color: var(--text-soft);
    line-height: 1.35;
    word-break: break-word;
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

  @media (min-width: 1700px) {
    .contact-grid {
      gap: 12px;
    }

    .contact-item {
      min-height: 95px;
      padding: 14px;
    }

    h2 {
      font-size: 2.2em;
    }

    h3 {
      font-size: 1.35em;
    }

    p {
      font-size: 1.1em;
    }
  }

  @media (max-width: 1000px) {
    h2 {
      font-size: 1.4em;
    }

    h3 {
      font-size: 0.96em;
    }

    .contact-grid {
      grid-template-columns: repeat(2, minmax(160px, 1fr));
      gap: 8px;
    }
  }

  @media (max-width: 560px) {
    .contatos-container {
      padding: 6px 6px 8px;
    }

    h2 {
      font-size: 1.25em;
    }

    h3 {
      font-size: 0.95em;
    }

    .contact-grid {
      grid-template-columns: 1fr;
      gap: 6px;
    }

    .contact-item {
      padding: 8px;
      min-height: 64px;
    }
  }
</style>
