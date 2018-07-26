import React from 'react'
import PropTypes from 'prop-types'
import { timestampToReadableDigitDate } from '../services/DateHelper'
import { findAndReplaceLinks } from '../services/UrlReplacer'
import './style.css'

function CommentsList(props) {
	const {
		comments,
		isModify,
		readOnly,
		parent,
		user,
		handleModifyLink,
		handleReplyLink
	} = props
	return comments.map(elem => (elem.parent_id === parent
		? (
			<div
				className={(!parent ? '' : 'comment-tree child-wrap')}
				key={elem.id}
			>
				<div className="lesson-comment">
					<div className="lesson-comment-head">
						<a href={'/user/profile/view?id=' + elem.author.id}>
							<img src={elem.author.avatar} alt={elem.author.id} />
							<span className="comment-user">{elem.author.username}</span>
						</a>
						<span className="comment-date pull-right">
							{timestampToReadableDigitDate(elem.created_at * 1000)}
						</span>
					</div>
					<div className="lesson-comment-body">
						<span dangerouslySetInnerHTML={{ __html: elem.comment }} />
						{/* <span>{elem.text}</span> */}
						{
							(user.id === elem.author.id) && isModify
								? (
									<div className="comment-reply-link">
										<a
											className="btn btn-primary btn-xs btn-flat"
											onClick={() => props.handleModifyLink(elem)}
										>
											Изменить
										</a>
									</div>)
								: ((user.id === elem.author.id) && !isModify)
									? ''
									: !readOnly
										? (
											<div className="comment-reply-link">
												<a
													className="btn btn-primary btn-xs btn-flat"
													onClick={props.handleReplyLink(
														elem.author.username,
														elem.id
													)}
												>
												Ответить
												</a>
											</div>)
										: ''}
					</div>
					<div className="lesson-comment-footer">
						{/* <label>Урок:</label>&nbsp;
                    <a href={`/learner/course-lesson/view?id=${elem.lesson.id}`}>
                    {elem.lesson.name}</a> */}
					</div>
				</div>
				<CommentsList
					comments={comments}
					user={user}
					isModify={isModify}
					parent={elem.id}
					readOnly={readOnly}
					handleModifyLink={handleModifyLink}
					handleReplyLink={handleReplyLink}
				/>
			</div>) : ''))
}

CommentsList.propTypes = {
	comments: PropTypes.array.isRequired,
	user: PropTypes.shape({ id: PropTypes.number }),
	isModify: PropTypes.bool,
	parent: PropTypes.number,
	readOnly: PropTypes.bool,
	handleReplyLink: PropTypes.func,
	handleModifyLink: PropTypes.func
}

CommentsList.defaultProps = {
	readOnly: false,
	parent: 0,
	isModify: false
}

export default CommentsList
