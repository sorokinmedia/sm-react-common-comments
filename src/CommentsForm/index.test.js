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
			username: 'john'
		},
		modify: false,
		cancelModifyFunc: jest.fn(() => 'cancelModifyFunc'),
		cancelReplyFunc: jest.fn(),
		onChange: jest.fn(),
		onSubmit: jest.fn(),
		...customProps
	}

	const container = shallow(<Alert {...props} />, { disableLifecycleMethods: lifeCycle })
	return { container, props }
}

describe('Alert component', () => {

	it('should render the component', () => {
		const { container } = setup()
		expect(container.exists()).toBe(true)
	})


	it('should render the component', () => {
		const { container } = setup()
		expect(container.exists()).toBe(true)
	})

	it('should change h4 if modify', () => {
		const { container } = setup({
			form: { parent: 1, username: 'john' },
			modify: true
		})
		expect(container.find('[name="comments-form"] h4').text()).toEqual('Изменить')
		expect(container.find('[name="comments-form"] p a').text()).toEqual('Отменить')
		expect(container.find('[name="comments-form"] p a').prop('onClick')()).toEqual('cancelModifyFunc')
	})

	// it('should componentDidMount called', () => {
	// 	jest.spyOn(Alert.prototype, 'componentDidMount');
	// 	shallow(<Alert />)
	// 	expect(Alert.prototype.componentDidMount).toHaveBeenCalled();
	// 	Alert.prototype.componentDidMount.mockClear()
	// });
	//
	//
	// it('should show alert message', () => {
	// 	const { container } = setup({ showAlert: 'error message' }, true)
	// 	const instance = container.instance();
	// 	spy = jest.spyOn(instance, 'showErrorAlert')
	// 	instance.msg.show = jest.fn()
	// 	instance.componentDidMount();
	// 	expect(spy).toHaveBeenCalled();
	// });
	//
	// it('should componentDidUpdate called', () => {
	// 	const { container } = setup({})
	// 	const instance = container.instance();
	// 	instance.showErrorAlert = jest.fn(() => true)
	// 	container.setProps({
	// 		updateResponse: { error: 'Error message' },
	// 		clearResponse: jest.fn()
	// 	});
	// 	expect(instance.componentDidUpdate).toHaveBeenCalled()
	// });
	//
	// it('should the component has div with the required class', () => {
	// 	expect(container.find('.modal-backdrop')).toBeTruthy()
	// });
	//
	// it('should backdrop clicked once', () => {
	// 	const instance = container.instance();
	// 	const spy = jest
	// 		.spyOn(instance, 'handleAreaClick')
	// 		.mockImplementation(() => true)
	// 	container.instance().forceUpdate()
	// 	container.update()
	// 	container.find('.modal-backdrop').simulate('click');
	// 	expect(spy).toHaveBeenCalled()
	// });

})
