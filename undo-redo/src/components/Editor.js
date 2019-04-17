import React from 'react';
import { connect } from 'react-redux'
import ContentEditable from 'react-contenteditable';
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { updateText } from '../actions';

const UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
  <p>
    <button onClick={onUndo} disabled={!canUndo}>
      Undo
    </button>
    <button onClick={onRedo} disabled={!canRedo}>
      Redo
    </button>
  </p>
);

class Editor extends React.Component {
  constructor() {
    super();
    this.contentEditable = React.createRef();
  };

  handleChange = e => {
    this.props.updateText(e.target.value);
  };

  render() {
    return (
      <div>
        <ContentEditable
          innerRef={this.contentEditable}
          html={this.props.text}
          onChange={this.handleChange}
        />
        <UndoRedo {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    text: state.textData.present.text,
    canUndo: state.textData.past.length > 0,
    canRedo: state.textData.future.length > 0
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateText: text => dispatch(updateText(text)),
    onUndo: () => dispatch(UndoActionCreators.undo()),
    onRedo: () => dispatch(UndoActionCreators.redo())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);