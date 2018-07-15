import PropTypes from 'prop-types'
import React from 'react'
import MessagesForm from '../MessagesForm';

function CommentsForm(props) {
	const { form, modify, status, taskId, rejectTask, commentId } = props;
	return (
		<div name="comments-form">
			{!modify ? <h4>Оставить комментарий</h4> : <h4>Изменить</h4>}
			{form.parent
				? (
					<div className="help-block">
						Комментарий для {form.userName} (
						<a onClick={props.cancelReplyFunc}>Отменить</a>)
					</div>
				)
				: ''}
			{modify ? <p><a onClick={props.cancelModifyFunc}>Отменить</a></p> : ''}
			<MessagesForm
				onChangeForm={props.onChange}
				onSubmitForm={props.onSubmit}
				value={form.value}
				date={form.date}
				isLoading={props.loading}
				error={props.formError}
				buttonText={!modify ? 'Добавить комментарий' : 'Сохранить'}
				taskId={taskId}
				status={status}
				rejectTask={rejectTask}
				commentId={commentId}
			/>
		</div>)
}

CommentsForm.propTypes = {
	form: PropTypes.shape({
		value: PropTypes.string,
		parent: PropTypes.number,
		userName: PropTypes.string
	}).isRequired,

	modify: PropTypes.bool.isRequired,
	cancelModifyFunc: PropTypes.func.isRequired,
	cancelReplyFunc: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
	loading: PropTypes.bool,
	formError: PropTypes.string,
	status: PropTypes.bool,
	taskId: PropTypes.number,
	rejectTask: PropTypes.func,
	commentId: PropTypes.number,
};

export default CommentsForm
