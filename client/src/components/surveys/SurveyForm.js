import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
// redux form function here similiar to connect function, connecting form to application state
import SurveyField from './SurveyField';

const FIELDS = [
  { label: 'Survey Title', name: 'title'},
  { label: 'Subject Line', name: 'subject'},
  { label: 'Email body', name: 'body'},
  { label: 'Recipient List', name: 'emails'}
]

class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
      return <Field key={name} component={SurveyField} type="text" label={label} name={name} />
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <button type="submit" className="teal btn-flat right white-text">
            next
            <i className="material-icons right">done</i>
          </button>
          <Link to="/surveys" className="red btn-flat left white-text">
          Back
          </Link>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(FIELDS, ({ name }) => {
    if(!values[name]) {
      errors[name] = `you must provide a ${name}`;
    }
  })

  return errors;
  // if errors is empty, reduxform knows there are no errors.
}

export default reduxForm({
  validate,
  form: 'surveyForm'
})(SurveyForm);


// 'name' on the field is the name of the javascript object (who's value is the text inputed)
// that will be stored in the redux store.
// our arrow function will inside the handleSubmit will be called whenever a user submits the form.

// adding on label as a prop to the field, it is automatically passed on to our survey field component.

// note: keys for an iteration have to be consistent across renders.

// the instance the form renders, the form runs validate. so we need until the user touches an input,
// dont run validate yet.






