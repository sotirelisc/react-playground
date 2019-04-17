import React from 'react';
import { connect } from 'react-redux'
import ContentEditable from 'react-contenteditable';
import { updateText } from '../actions';

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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    text: state.textData.text
  };
};

export default connect(mapStateToProps, { updateText })(Editor);