import React from 'react';
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';

export function FieldGroup({ id, valid, label, help, ...props }) {
  return (
    <FormGroup id={id}>
      <Label>{label}</Label>
      <Input {...props} valid={valid} invalid={valid === null ? false : !valid} />
      {help && <FormFeedback>{help}</FormFeedback>}
    </FormGroup>
  );
}