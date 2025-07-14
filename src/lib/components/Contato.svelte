<script>
	import { contactTranslations } from '../stores/contactTranslations.js';
</script>

<div class="contatos-container">
  <h2>{$contactTranslations.title}</h2>

  <div>
    <h3>
      <a
        href="https://github.com/RosaesSouza"
        target="_blank"
        rel="noopener noreferrer"
      >
        {$contactTranslations.github}</a
      >
    </h3>
  </div>

  <div>
    <h3>{$contactTranslations.email}</h3>
    <p>
      <strong
        ><a href="mailto:gabrielrosaessouza@gmail.com"
          >gabrielrosaessouza@gmail.com</a
        ></strong
      >
    </p>
  </div>

  <div>
    <h3>{$contactTranslations.phone}</h3>
    <p><strong>(28) 99904-2952</strong></p>
  </div>

  <div>
    <h3>
      <a
        href="https://www.linkedin.com/in/gabriel-rosaes-3a875122a/"
        target="_blank"
        rel="noopener noreferrer">{$contactTranslations.linkedin}</a
      >
    </h3>
  </div>
</div>

<style>
	.contatos-container::-webkit-scrollbar {
		display: none;
	}

  .contatos-container {
    width: 100%;
    min-width: 50vw;
    max-height: 50vh;
    display: flex;
    flex-direction: column;
    color: var(--primary-color);
    margin: 0 auto;
    padding: 20px;
    line-height: 1;
    text-align: center;
    box-sizing: border-box;
    overflow-y: scroll;
  }

  a {
    color: var(--primary-color);
    text-decoration: none;
  }
  h2 {
    background-color: var(--secondary-color);
    color: var(--primary-color);
    font-size: 1.8em;
    margin: 0px 0px 20px 0px;
    padding-bottom: 5px;
    text-align: center;
  }

  h3 {
    font-size: 1.6em;
    color: var(--primary-color);
    margin-top: 25px;
    margin-bottom: 5px;
  }

  p {
    font-size: 1.2em;
    margin-bottom: 5px;
  }

	@media (min-width: 1700px) {
		.contatos-container {
			max-height: 70vh;
			line-height: 1.5;
		}

		h2 {
			font-size: 2.3em;
		}

		h3 {
			font-size: 2.0em;
		}

		p {
			font-size: 1.8em;
		}
	}


  @media (max-width: 1000px) {
    h2 {
      font-size: 1.5em;
    }

    h3 {
      font-size: 1.2em;
    }
  }

  @media (max-width: 700px) {
		.contatos-container {
			max-height: 70vh;
		}

    h2 {
      font-size: 2em;
    }

    h3 {
      font-size: 1.5em;
    }
  }
</style>
