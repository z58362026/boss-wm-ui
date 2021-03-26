/**
 * Create a basic component with common options
 */
import { App, defineComponent, ComponentOptionsWithObjectProps } from 'vue'
// import { camelize } from '../format/string';

export function createComponent(name: string) {
    return function(component: ComponentOptionsWithObjectProps): unknown {
        component.name = name
        component.install = (app: App) => {
            app.component(name as string, component)
            // app.component(camelize(`-${name}`), sfc);
        }
        return defineComponent(component)
    } as typeof defineComponent
}
export default {
    createComponent,
}
