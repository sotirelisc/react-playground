import React from 'react';
import ReactDOM from 'react-dom';

// Any click on children divs will throw the event its parent
// until it reaches 'history.push('/')' (this is propagation).
// We use e.stopPropagation() in just the children div to stop
// that kind of behavior.
// We don't want the modal hiding just by clicking anywhere on it.

const Modal = ({ title, content, actions, onDismiss }) => {
  return ReactDOM.createPortal(
    <div onClick={onDismiss} className="ui dimmer modals visible active">
      <div onClick={e => e.stopPropagation()} className="ui standard modal visible active">
        <div className="header">{title}</div>
        <div className="content">
          {content}
        </div>
        <div className="actions">
          {actions}
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;