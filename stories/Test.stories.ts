import Test from '../src/components/Test'

export default {
    title: '业务组件/Test',
    component: Test,
    argTypes: {
        title1: {
            description: 'description',
            type: {
                require: true,
            },
            table: {
                defaultValue: {
                    // detail: '111111',
                    summary: '222',
                },
            },

            control: {
                type: 'string',
            },
        },
    },
}

const Template = (args: object) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { Test },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
        return { args }
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<test v-bind="args" />',
})

export const test = Template.bind({})

test.args = {
    test2: 2,
}
