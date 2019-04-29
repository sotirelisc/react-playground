import React from 'react';
import { connect } from 'react-redux';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SpecialCharsDialog extends React.Component {
	handleClose = e => {
		this.props.dispatch({
			type: 'DIALOG_SPECIAL_CHARS_HIDE'
		});
	}

	render() {
		const { dialogDisplay } = this.props;
		return (
			<Modal size="lg" show={dialogDisplay}>
				<Modal.Header>
					<Modal.Title>Special Characters</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<div>
						Nothing here yet.
					</div>
				</Modal.Body>

				<Modal.Footer>
					<Button onClick={this.handleClose} className="btn btn-secondary lnkDialogClose">Close</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}

export default connect(state => ({
	dialogDisplay: state.helpDialog.dialogDisplay
}))(SpecialCharsDialog);