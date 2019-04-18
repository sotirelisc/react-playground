import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderInput({ input, label, meta }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
        <div>{meta.error}</div>
      </div>
    );
  }

  onSubmit(formValues) {
    
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
        <Field
          name="title"
          label="Enter Title"
          component={this.renderInput}
        />
        <Field
          name="description"
          label="Enter Description"
          component={this.renderInput}
        />
        <button className="ui button primary">
          Submit
        </button>
      </form>
    );
  }
}

const validate = ({ title, description }) => {
  const errors = {};

  if (!title) {
    errors.title = 'Please enter a title.'
  }

  if (!description) {
    errors.description = 'Please enter a description.'
  }

  return errors;
};

export default reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate);