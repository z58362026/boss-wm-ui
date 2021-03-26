import { createNamespace } from '../../utils'
import { PropType } from 'vue'
// import './index.css'

const [createComponent, bem] = createNamespace('button')

export type ButtonSize = 'large' | 'normal' | 'small'

export default createComponent({
    name: 'Button',
    props: {
        label: {
            type: String,
            required: true,
        },
        primary: {
            type: Boolean,
            default: true,
        },
        size: {
            type: String as PropType<ButtonSize>,
            default: 'normal',
        },
        backgroundColor: {
            type: String,
        },
    },
    setup(props) {
        return () => (
            <button
                className={bem('', {
                    primary: props.primary,
                    secondary: !props.primary,
                    [`${props.size}`]: true,
                })}
                style={{ backgroundColor: props.backgroundColor }}
            >
                {props.label}
            </button>
        )
    },
})
