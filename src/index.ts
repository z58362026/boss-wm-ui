import { App } from 'vue'
import Button from './components/Button'
import Button2 from './components/Button2'
import Test from './components/Test'

const components = {
    Button,
    Button2,
    Test
}

const install = (app: App) => {
    Object.values(components).forEach((component) => {
        app.component(component.name, component)
    })
}

export const exportObject = { install, ...components }

export default { install, ...components }
