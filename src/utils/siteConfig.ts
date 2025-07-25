export const SITE_TITLE_SUFFIX = "Hanif Carroll Product Engineer";

export function createPageTitle(pageTitle: string): string {
    return `${pageTitle} | ${SITE_TITLE_SUFFIX}`;
}

export const SITE_CONFIG = {
    titleSuffix: SITE_TITLE_SUFFIX,
    defaultTitle: SITE_TITLE_SUFFIX,
};