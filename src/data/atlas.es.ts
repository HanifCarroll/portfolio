import type { atlasProblems, atlasSections } from './atlas';

export const atlasSectionsEs: Record<(typeof atlasSections)[number]['id'], { title: string; description: string }> = {
	code: { title: 'En el código de tu aplicación', description: 'Bibliotecas y patrones dentro del software que publicás.' },
	ai: { title: 'En tus funciones de IA', description: 'Componentes para productos que hacen llamadas a modelos de lenguaje.' },
	tests: { title: 'Pruebas', description: 'Verificaciones para confirmar que el software hace lo que tiene que hacer.' },
	guardrails: { title: 'Controles', description: 'Verificaciones y herramientas en tu repositorio para impedir que se incorpore código con problemas.' },
	production: { title: 'En producción', description: 'Qué usás para ejecutar tu aplicación y medir cómo funciona una vez que la gente la usa.' },
	agent: { title: 'En el entorno del agente', description: 'El contexto, las herramientas y los límites que le das a un agente de programación.' },
};

export const atlasProblemsEs: Record<(typeof atlasProblems)[number]['id'], string> = {
	works: 'Comprobar que funciona',
	quality: 'Evitar que se incorpore código con problemas',
	data: 'Mantener los datos correctos',
	release: 'Publicar cambios de forma segura',
	observe: 'Ver qué está pasando',
	ai: 'Hacer confiables las funciones de IA',
	agents: 'Darles contexto y límites a los agentes',
	assistants: 'Permitir que los asistentes con IA usen tu producto',
	charge: 'Cobrar por tu producto',
};
