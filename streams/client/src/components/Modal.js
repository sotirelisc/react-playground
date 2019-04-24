import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

// Any click on children divs will throw the event its parent
// until it reaches 'history.push('/')' (this is propagation).
// We use e.stopPropagation() in just the children div to stop
// that kind of behavior.
// We don't want the modal hiding just by clicking anywhere on it.

const Modal = props => {
  return ReactDOM.createPortal(
    <div onClick={() => history.push('/')} className="ui dimmer modals visible active">
      <div onClick={e => e.stopPropagation()} className="ui standard modal visible active">
        <div className="header">Delete Stream</div>
        <div className="content">
          Are you sure you want to delete this stream?
        </div>
        <div className="actions">
          <button className="ui primary button">Delete</button>
          <button className="ui button">Cancel</button>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;