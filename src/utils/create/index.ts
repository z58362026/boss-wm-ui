import { createBEM } from './bem'
import { createComponent } from './component'
// import { createI18N } from './i18n';

export function createNamespace(name: string) {
    name = `boss-${name}`
    return [createComponent(name), createBEM(name)] as const
}

export default {
    createNamespace,
}
