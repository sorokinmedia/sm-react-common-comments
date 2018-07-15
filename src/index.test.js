import CommentsForm from '../src/CommentsForm'
import CommentsList from '../src/CommentsList'

import MessagesForm from '../src/MessagesForm'
import * as exports from './index'

jest.mock('../src/MessagesForm', () => {})
jest.mock('../src/CommentsForm', () => {})
jest.mock('../src/CommentsList', () => {})

describe('expots', () => {
	it('should exports components', () => {
		expect(exports).toEqual(expect.objectContaining({
			MessagesForm, CommentsList, CommentsForm
		}))
	})
})
