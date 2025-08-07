export const SITE_TITLE_SUFFIX = "Hanif Carroll - Fractional CTO & Product Partner";

export function createPageTitle(pageTitle: string): string {
    return `${pageTitle} | ${SITE_TITLE_SUFFIX}`;
}

export const SITE_CONFIG = {
    titleSuffix: SITE_TITLE_SUFFIX,
    defaultTitle: SITE_TITLE_SUFFIX,
    siteUrl: "https://hanifcarroll.com",
    description: "Fractional CTO & Product Partner helping bootstrapped, nontechnical founders turn ambitious ideas into software that users love. Clarify. Launch. Grow.",
    keywords: "fractional cto, mvp development, bootstrapped mvp development, startup consultant, nontechnical founder help, prototype development services, lean mvp development",
    author: "Hanif Carroll",
};