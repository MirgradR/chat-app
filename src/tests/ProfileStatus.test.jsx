import { create } from "react-test-renderer"
import ProfileStatusHooks from "../components/Content/Profile/ProfileInfo/ProfileStatus/ProfileStatusHOOKS"

describe('ProfileStatus component', () => {
    test('h3 should be display', () => {
        const component = create(<ProfileStatusHooks status = 'div' />)
        const root = component.root
        let title = root.findByType('h3')
        expect(title).not.toBeNull()
    })
    test('input should not be display', () => {
        const component = create(<ProfileStatusHooks status = 'div' />)
        const root = component.root
        expect(() => {
            root.findByType('input')
        }).toThrow()
    })
    test('input should be display instead of h3 after click', () => {
        const component = create(<ProfileStatusHooks status = 'div' />)
        const root = component.root
        let title = root.findByType('h3')
        title.props.onClick()
        let input = root.findByType('input')
        expect(input.props.value).toBe('div')
    })
})

