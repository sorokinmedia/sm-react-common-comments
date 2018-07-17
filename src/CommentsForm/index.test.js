import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import PropTypes from 'prop-types'
import React from 'react'
import Alert from './index'

configure({ adapter: new Adapter() })
let spy


function setup(customProps, lifeCycle = false) {
	const props = {
		form: {
			parent: 1,
			userName: 'john'
		},
		modify: false,
		cancelModifyFunc: jest.fn(() => 'cancelModifyFunc'),
		cancelReplyFunc: jest.fn(() => 'cancelReplyFunc'),
		onChange: jest.fn(() => 'onChange'),
		onSubmit: jest.fn(() => 'onSubmit'),
		...customProps
	}

	const container = shallow(<Alert {...props} />, { disableLifecycleMethods: lifeCycle })
	return { container, props }
}

describe('CommentsForm component', () => {

	it('should render the component', () => {
		const { container } = setup()
		expect(container.exists()).toBe(true)
	})

	it('should change h4 if modify', () => {
		const { container } = setup({
			form: { parent: 1, userName: 'john' },
			modify: true
		})
		expect(container.find('[name="comments-form"] h4').text()).toEqual('Изменить')
		expect(container.find('[name="comments-form"] p a').text()).toEqual('Отменить')
		expect(container.find('[name="comments-form"] p a').prop('onClick')()).toEqual('cancelModifyFunc')
	})

	it('should have help block div with cancel button', () => {
		const { container } = setup()
		expect(container.exists('.comments-form')).toBe(true)
		expect(container.find('.help-block').text()).toEqual('Комментарий для john (Отменить)')
		expect(container.find('.help-block a').prop('onClick')()).toEqual('cancelReplyFunc')
	})

	it('should have MessagesForm with required props', () => {
		const { container } = setup()
		expect(container.exists('MessagesForm')).toBe(true)
		expect(container.find('MessagesForm').prop('onChangeForm')()).toEqual('onChange')
		expect(container.find('MessagesForm').prop('onSubmitForm')()).toEqual('onSubmit')
	})
})
