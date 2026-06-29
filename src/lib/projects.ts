import type { Project } from './types/project';
import acquireData from './projects/acquire.json';
import agentRecallData from './projects/agent-recall.json';
import baEventosData from './projects/ba-eventos.json';
import casamoData from './projects/casamo.json';
import clientFeedbackData from './projects/client-feedback.json';
import codexTelegramBridgeData from './projects/codex-telegram-bridge.json';
import genruptData from './projects/genrupt.json';
import jobApplicationAssistantData from './projects/job-application-assistant.json';
import linkedinToolsData from './projects/linkedin-tools.json';
import palabrunoData from './projects/palabruno.json';
import languageExchangeData from './projects/language-exchange.json';
import muchoHangoutsData from './projects/mucho-hangouts.json';
import voxPrismaticData from './projects/vox-prismatic.json';
import casaElariaData from './projects/casa-elaria.json';
import desarmaderoLatorreData from './projects/desarmadero-latorre.json';
import maximoInteriorismoData from './projects/maximo-interiorismo.json';
import redwriterComicsData from './projects/redwriter-comics.json';
import apartmentFinderData from './projects/apartment-finder.json';
import desarmaderoOperationsPrototypeData from './projects/desarmadero-operations-prototype.json';

export const projects: Record<string, Project> = {
	acquire: acquireData as Project,
	'job-application-assistant': jobApplicationAssistantData as Project,
	'linkedin-tools': linkedinToolsData as Project,
	'codex-telegram-bridge': codexTelegramBridgeData as Project,
	'agent-recall': agentRecallData as Project,
	'client-feedback': clientFeedbackData as Project,
	palabruno: palabrunoData as Project,
	casamo: casamoData as Project,
	'ba-eventos': baEventosData as Project,
	'apartment-finder': apartmentFinderData as Project,
	genrupt: genruptData as Project,
	'mucho-hangouts': muchoHangoutsData as Project,
	'language-exchange': languageExchangeData as Project,
	'vox-prismatic': voxPrismaticData as Project,
	'casa-elaria': casaElariaData as Project,
	'desarmadero-operations-prototype': desarmaderoOperationsPrototypeData as Project,
	'desarmadero-latorre': desarmaderoLatorreData as Project,
	'maximo-interiorismo': maximoInteriorismoData as Project,
	'redwriter-comics': redwriterComicsData as Project
};

export function getProject(slug: string): Project | undefined {
	return projects[slug];
}

export function getAllProjects(): Project[] {
	return Object.values(projects);
}
