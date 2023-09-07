import React from 'react';
import FormNewFood from './components/FormNewFood';

type FormTypes = 'newFood';

interface FormProps {
  type: FormTypes;
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
