import { createNamespace } from '../../utils'

const [createComponent, bem] = createNamespace('test')

export default createComponent({
    props: {
        title1: { type: String, required: true },
        test2: { type: Number, default: 1 },
    },
    name: 'Test',
    setup(props) {
        return () => (
            <div className={bem()}>
                测试组件
                {props.title1}
                <br />
                {props.test2}
            </div>
        )
    },
})
