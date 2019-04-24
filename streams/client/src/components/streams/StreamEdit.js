import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchStream, updateStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.updateStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Edit Stream</h3>
        <StreamForm
          initialValues={_.pick(this.stream, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    // Find stream based on id that comes from URL params in ownProps
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, {
  fetchStream,
  updateStream
})(StreamEdit);