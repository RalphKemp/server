import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
      return (
        <div key={name}>
          <label>{label}</label>
          <div>
            {formValues[name]}
          </div>
        </div>
      );
    });


  return(
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button
        className="yellow white-text darken-3 btn-flat"
        onClick={onCancel}>
        Back
      </button>
      <button
        onClick={() => submitSurvey(formValues, history)}
        className="green btn-flat white-text right">
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));

// passing conCancel props in at the top (destructed) then using it on onCLick
// mapStateToProps - taking our redux state and transofmring them into some props
// to send down to the component. What we return in the mapStateToProps will be props to SurveyFormReview

// the action creator is being passed the history object which we can now use to navigate round the application
//
