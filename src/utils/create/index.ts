import { createBEM, BEM } from './bem'
import { createComponent } from './component'
// import { createI18N } from './i18n';
type CreateNamespaceReturn = [ReturnType<typeof createComponent>, BEM]

export function createNamespace(name: string): CreateNamespaceReturn {
    name = `boss-${name}`
    return [createComponent(name), createBEM(name)]
}

export default {
    createNamespace,
}
