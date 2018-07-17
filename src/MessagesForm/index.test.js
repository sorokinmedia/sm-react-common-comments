import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { InlineSmallLoader } from 'sm-react-common-loader'
import MessageForm from './index'

configure({ adapter: new Adapter() })

let spy

function setup(customProps, lifeCycle = false) {
	const props = {
		onChangeForm: jest.fn(() => 'onChangeForm'),
		onSubmitForm: jest.fn(() => 'onSubmitForm'),
		...customProps
	}
	const container = shallow(<MessageForm {...props} />, { disableLifecycleMethods: lifeCycle })
	return { container, props }

}

describe('MessageForm component', () => {

	it('should render the component', () => {
		const { container } = setup()
		expect(container.exists()).toBe(true)
	})

	it('should be inside form tag', () => {
		const { container } = setup()
		expect(container.exists('form')).toBe(true)
	})

	describe('should have specified form group block', () => {
		const { container } = setup({ error: 'error', labelText: 'label text' })
		it('should have required form group class', () => {
			expect(container.exists('form .form-group')).toBe(true)
			expect(container.exists('form .form-group .form-group')).toBe(true)
		})
		it('should have has-error class', () => {
			expect(container.find('form > .form-group').hasClass('has-error')).toBe(true)
			expect(container.exists('form > .form-group  > .help-block')).toBe(true)
			container.setState({ errorMsg: 'errorMsg' })
			expect(container.find('form > .form-group > .form-group').hasClass('has-error')).toBe(true)
			expect(container.find('form .form-group .form-group span').hasClass('help-block')).toBe(true)
		})
		it('should have label text', () => {
			expect(container.find('form > .form-group label').text()).toEqual('label text')
		})
		it('should help block show error message', () => {
			expect(container.find('form > .form-group  > .help-block').text()).toEqual('error')
		})
	})

	describe('should have specified button block', () => {
		const { container } = setup({
			error: 'error',
			labelText: 'label text',
			isLoading: false,
			status: true
		})
		it('should have button', () => {
			expect(container.exists('form .form-group button')).toBe(true)
			expect(container.find('form button').first().prop('disabled')).toEqual(false)

			expect(container.find('form button').first().prop('disabled')).toEqual(false)
			expect(container.find('form button.btn-danger').prop('disabled')).toEqual(false)

		})
	})


	describe('click handlers', () => {
		const { container } = setup({
			error: 'error',
			labelText: 'label text',
			isLoading: false,
			status: true
		})
		it('should call sendComments', () => {
			const instance = container.instance()
			spy = jest
				.spyOn(instance, 'sendComment')
				.mockImplementation(() => true)
			container.instance().forceUpdate()
			container.update()
			container.find('form button.btn-primary').simulate('click')
			expect(spy).toHaveBeenCalled()

		})

		it('should call sendComments', () => {
			const instance = container.instance()
			spy = jest
				.spyOn(instance, 'handleRevision')
				.mockImplementation(() => true)
			container.instance().forceUpdate()
			container.update()
			container.find('form button.btn-danger').simulate('click')
			expect(spy).toHaveBeenCalled()
		})
	})

	describe('loading section', () => {
		it('should have InlineSmallLoader', () => {
			const { container } = setup({ isLoading: true })
			expect(container.find('.btn-fight-loading').contains(<InlineSmallLoader />)).toBe(true)
		})
	})

	describe('ckeditor', () => {
		const { container } = setup({ isLoading: true })
		it('should call handleChange', () => {
			const instance = container.instance()
			spy = jest
				.spyOn(instance, 'handleChange')
				.mockImplementation(() => true)
			container.instance().forceUpdate()
			container.update()
			container.find('r').simulate('change')
			expect(spy).toHaveBeenCalled()
		})
	})
})
