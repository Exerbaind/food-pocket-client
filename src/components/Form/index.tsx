import React from 'react';
import FormNewFood from './components/FormNewFood';

type FormType = 'newFood';

interface FormProps {
  type: FormType;
}

const formsList = {
  newFood: FormNewFood,
};

function Form({ type }: FormProps) {
  const FormComponent = formsList[type];
  return (
    <div>
      <div>Form</div>
      <FormComponent />
    </div>
  );
}

export default Form;
