import React from 'react';

const SurveyField = ({ input }) => {
  return(
    <div>
      <input {...input} />
    </div>
  );
}

export default SurveyField;

// the ... says, we've got a big old object with a lot of props,
// we want the input to have all the keys and values in it. equivilint of writing
// out onBlur={input.onBlur}, onchange={input.onChange} etc...

// the es6 input argument at the top looks on to the props object, and pulls of the input property
// and assigns it to a variable called input.
