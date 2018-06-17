import React from 'react';

const SurveyField = ({ input, label, meta: { error, touched } }) => {
  return(
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '5px' }} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
}

export default SurveyField;

// the ... says, we've got a big old object with a lot of props,
// we want the input to have all the keys and values in it. equivilint of writing
// out onBlur={input.onBlur}, onchange={input.onChange} etc...

// the es6 input argument at the top looks on to the props object, and pulls of the input property
// and assigns it to a variable called input.

// {touched && error}   ===  if touched is true, and there's an error, show the error.
// if touched is false, javascript interpreter will stop reading the boolean statement.
