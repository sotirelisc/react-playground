import React from 'react';
import { connect } from 'react-redux'
import ContentEditable from 'react-contenteditable';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { Button, Icon, Segment, Form } from 'semantic-ui-react';
import { updateText } from '../actions';
import Header from './Header';

const UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
  <p>
    <Button onClick={onUndo} disabled={!canUndo} icon>
      <Icon name='undo' />
    </Button>
    <Button onClick={onRedo} disabled={!canRedo} icon>
      <Icon name='redo' />
    </Button>
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
        <Header title="Editor" />
        <Segment>
          <Form>
            <ContentEditable
              innerRef={this.contentEditable}
              html={this.props.text}
              onChange={this.handleChange}
              className="ui textarea"
            />
          </Form>
        </Segment>
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