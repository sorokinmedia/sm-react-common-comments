import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import MessageForm from './index';

configure({ adapter: new Adapter() });
//

let spy

function setup(customProps, lifeCycle = false) {
	const props = {
		...customProps
	}
	const container = shallow(<MessageForm {...props} />, { disableLifecycleMethods: lifeCycle })
	return { container, props }

}

describe('MessageForm component', () => {

	it('should render the component', () => {
		console.log('container.debug()');
		// expect(container.find('hello').length()).toEqual(1)
	//	expect(1).toEqual(2);
	});

	// const { container } = setup()

//	it('should have the specified element', () => {
//		const { container } = setup()
//		expect(container.find('form').length).toEqual(1);
//		expect(container.find('CKEditor').length).toEqual(1);
//	});
//
//	it('should have label text', () => {
//		const { container } = setup({ ldabelText: 'labelText' })
//		expect(container.find('label').text()).toEqual('labelText');
//	});
//
//	it('should error classes', () => {
//		const { container } = setup({ errorM2sg: 'error message' })
//		console.log(container.debug());
//		// expect(container.find('form-group').hasClass('has-error')).toBe(true);
//	});

	// it('should componentDidMount called', () => {
	// 	jest.spyOn(MessageForm.prototype, 'componentDidMount');
	// 	shallow(<MessageForm />)
	// 	expect(MessageForm.prototype.componentDidMount).toHaveBeenCalled();
	// 	MessageForm.prototype.componentDidMount.mockClear()
	// });
	//
	//
	// it('should show alert message', () => {
	// 	const { container } = setup({ showMessageForm: 'error message' }, true)
	// 	const instance = container.instance();
	// 	spy = jest.spyOn(instance, 'showErrorMessageForm')
	// 	instance.msg.show = jest.fn()
	// 	instance.componentDidMount();
	// 	expect(spy).toHaveBeenCalled();
	// });
	//
	// it('should componentDidUpdate called', () => {
	// 	const { container } = setup({})
	// 	const instance = container.instance();
	// 	instance.showErrorMessageForm = jest.fn(() => true)
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

});
