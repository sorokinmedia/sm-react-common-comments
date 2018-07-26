import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import CommentsList from './index'
import { timestampToReadableDigitDate } from '../services/DateHelper'

configure({ adapter: new Adapter() })

let spy

function setup(customProps, lifeCycle = false) {
	const props = {
		comments: [{
			parent_id: 1,
			id: 2,
			author: { id: 11, avatar: 'avatar src', username: 'John' },
			created_at: 123124124,
			comment: 'comment',
			user: { id: 2 },
			isModify: false
		}],
		handleModifyLink: jest.fn(() => 'handleModifyLink'),
		handleReplyLink: jest.fn(),
		parent: 1,
		user: {
			id: 11
		},
		...customProps
	}
	const container = mount(<CommentsList {...props} />, { disableLifecycleMethods: lifeCycle })
	return { container, props }

}

describe('CommentsList component', () => {

	it('should render the component', () => {
		const { container } = setup()
		expect(container.exists()).toBe(true)
	})

	it('should have comment-tree child-wrap class', () => {
		const { container } = setup()
		expect(container.find('.comment-tree .child-wrap').length).toEqual(1)
	})

	it('should have specified structure inside comment head', () => {
		const { container } = setup()
		expect(container.find('.lesson-comment-head a').prop('href')).toEqual('/user/profile/view?id=11')
		expect(container.find('.lesson-comment-head a img').prop('src')).toEqual('avatar src')
		expect(container.find('.lesson-comment-head a span.comment-user').text()).toEqual('John')
		expect(container.find('.lesson-comment-head .comment-date').text()).toEqual(timestampToReadableDigitDate(123124124 * 1000))
	})
	describe('comment body', () => {
		it('should have specified structure inside comment body', () => {
			const { container } = setup()
			expect(container.find('.lesson-comment-body').exists()).toBe(true)
			expect(container.find('.lesson-comment-body span').prop('dangerouslySetInnerHTML')).toEqual({ __html: 'comment' })
		})
		it('should have Modify button', () => {
			const { container } = setup({ isModify: true })
			expect(container.find('.lesson-comment-body .comment-reply-link a').length).toEqual(1)
			expect(container.find('.lesson-comment-body .comment-reply-link a').prop('onClick')()).toEqual('handleModifyLink')
			expect(container.find('.lesson-comment-body .comment-reply-link a').text()).toEqual('Изменить')
		})

		it('should have reply button', () => {
			const { container } = setup({ isModify: false, readOnly: false, user: { id: 4 } })
			expect(container.find('.lesson-comment-body .comment-reply-link a').length).toEqual(1)
			expect(container.find('.lesson-comment-body .comment-reply-link a').text()).toEqual('Ответить')
		})


		it('should have comment footer', () => {
			const { container } = setup()
			expect(container.find('.lesson-comment-footer').exists()).toBe(true)
		})
	})

})
