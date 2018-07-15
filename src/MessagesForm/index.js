import $ from 'jquery'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import CKEditor from 'sm-react-common-ckeditor'
import { InlineSmallLoader } from 'sm-react-common-loader'

const empty = '<p>&nbsp;</p>';

export default class MessagesForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			reset: false,
			errorMsg: ''
		}
	}

	componentDidMount() {
		const self = this
		$('#msgsarea')
			.keydown((e) => {
				if (e.ctrlKey && e.keyCode === 13) {
					self.handleSubmit()
				}
			});
	}

	handleChange = (ev) => {
		this.props.onChangeForm(ev)
		this.setState({ errorMsg: '', reset: false })

	}

	sendComment = (ev) => {
		ev.preventDefault()
		const { value } = this.props
		if (value && value !== empty) {
			this.props.onSubmitForm(value)
			this.setState({ reset: true })
		} else this.setState({ errorMsg: 'Вы пытаетесь отправить пустой комментарий' })
	}

	handleRevision = (ev) => {
		ev.preventDefault()
		const { taskId, value } = this.props;
		if (value && value !== empty) {
			this.props.rejectTask(taskId, value);
			this.setState({ reset: true })
		} else this.setState({ errorMsg: 'Необходимо указать причину доработки' })
	}

	render() {
		const {
			commentId,
			error,
			value,
			date,
			status,
			labelText,
			isLoading,
			buttonText,
			preFormHtml,
		} = this.props;
		const { errorMsg } = this.state
		return (
			<form>
				{preFormHtml}
				<div className={'form-group ' + (error ? 'has-error' : '')}>
					{labelText
						? (
							<label>
								{labelText}
							</label>) : ''}
					<div className={`form-group ${errorMsg && 'has-error'}`}>
						<CKEditor
							onChange={this.handleChange}
							initialValue=""
							value={value}
							date={date}
							empty={this.state.reset}
							commentId={commentId}
						/>
						{errorMsg && <span className="help-block">{errorMsg}</span>}
					</div>
					{error ? <div className="help-block">{error}</div> : ''}
				</div>
				<button
					className="btn btn-primary btn-flat"
					title="Ctrl + Enter"
					disabled={isLoading}
					onClick={this.sendComment}
				>
					{buttonText}
				</button>
				{status &&
				<button
					className="btn btn-danger btn-flat"
					style={{ marginLeft: '5px' }}
					title="Ctrl + Enter"
					disabled={isLoading}
					onClick={this.handleRevision}
				>
					На доработку
				</button>}
				<span className="btn-fight-loading">
					{isLoading ? <InlineSmallLoader /> : ''}
				</span>
			</form>)
	}

}

MessagesForm.propTypes = {
	buttonText: PropTypes.string,
	onChangeForm: PropTypes.func.isRequired,
	onSubmitForm: PropTypes.func.isRequired,
	inputRows: PropTypes.number,
	taskId: PropTypes.number,
	labelText: PropTypes.string,
	isLoading: PropTypes.bool,
	error: PropTypes.string,
	commentId: PropTypes.number,
	value: PropTypes.string,
	date: PropTypes.object,
	status: PropTypes.bool,
	preFormHtml: PropTypes.object,
	rejectTask: PropTypes.func,
}

MessagesForm.defaultProps = {
	buttonText: 'Отправить',
	inputRows: 5,
	labelText: ''
}

