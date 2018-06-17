import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
// redux form function here similiar to connect function, connecting form to application state
import SurveyField from './SurveyField';

class SurveyForm extends Component {
  renderFields() {
    return(
      <div>
        <Field type="text" name="title" component={SurveyField}/>
      </div>
    );
  }

  render() {
    return(
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm);


// 'name' on the field is the name of the javascript object (who's value is the text inputed)
// that will be stored in the redux store.
// our arrow function will inside the handleSubmit will be called whenever a user submits the form.
