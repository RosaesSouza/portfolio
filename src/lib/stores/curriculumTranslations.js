import { derived } from 'svelte/store';
import { language } from './languageStore.js';

const translations = {
    pt: {
        title: 'Currículo',
        academicTitle: 'Formação Acadêmica',
        experienceTitle: 'Experiências Profissionais',
        education: {
            degree: 'Bacharelado em Sistemas de Informação',
            institution: 'IFES - Instituto Federal do Espírito Santo',
            period: 'Início: 2022 | Cursando: 8º Período',
            highSchool: 'Ensino Médio Integrado ao Curso Técnico em Informática',
            completion: 'Conclusão: 2021'
        },
        experience: {
            currentJob: {
                title: 'Auxiliar de TI',
                company: 'FDCI (Faculdade de Direito de Cachoeiro de Itapemirim)',
                period: 'Período: Fevereiro de 2025 – Atualmente',
                tasks: [
                    'Presto suporte técnico abrangente ao colegiado, garantindo o bom funcionamento dos recursos tecnológicos.',
                    'Contribuo com o apoio à infraestrutura de TI, assegurando a estabilidade e segurança dos sistemas.',
                    'Realizo manutenção preventiva e corretiva em servidores e no site institucional, otimizando a performance e disponibilidade.'
                ]
            },
            internship: {
                title: 'Estágio em Desenvolvimento Web e Suporte',
                company: 'Arco Informática',
                period: 'Período: Junho de 2024 – Fevereiro de 2025',
                tasks: [
                    'Atuava no desenvolvimento de soluções web utilizando PHP, JavaScript, CSS, WordPress e MySQL.',
                    'Oferecia suporte técnico a clientes, auxiliando na resolução de problemas e na utilização dos sistemas.',
                    'Realizava manutenção em sistemas web existentes, garantindo a correção de falhas e a implementação de melhorias.'
                ]
            }
        }
    },
    en: {
        title: 'Resume',
        academicTitle: 'Academic Background',
        experienceTitle: 'Professional Experience',
        education: {
            degree: 'Bachelor in Information Systems',
            institution: 'IFES - Federal Institute of Espírito Santo',
            period: 'Started: 2022 | Currently: 8th Semester',
            highSchool: 'High School Integrated with Technical Course in Computer Science',
            completion: 'Completion: 2021'
        },
        experience: {
            currentJob: {
                title: 'IT Assistant',
                company: 'FDCI (Law School of Cachoeiro de Itapemirim)',
                period: 'Period: February 2025 – Currently',
                tasks: [
                    'Provide comprehensive technical support to the collegiate, ensuring the proper functioning of technological resources.',
                    'Contribute to IT infrastructure support, ensuring system stability and security.',
                    'Perform preventive and corrective maintenance on servers and institutional website, optimizing performance and availability.'
                ]
            },
            internship: {
                title: 'Internship in Web Development and Support',
                company: 'Arco Informática',
                period: 'Period: June 2024 – February 2025',
                tasks: [
                    'Worked on developing web solutions using PHP, JavaScript, CSS, WordPress and MySQL.',
                    'Provided technical support to clients, helping with problem resolution and system usage.',
                    'Performed maintenance on existing web systems, ensuring bug fixes and implementation of improvements.'
                ]
            }
        }
    }
};

export const curriculumTranslations = derived(
    language,
    ($language) => translations[$language]
);
