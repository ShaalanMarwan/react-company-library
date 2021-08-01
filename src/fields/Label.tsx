import React, { useContext } from 'react';
import { FieldContext } from './FieldContext';
import { StyledLabel } from './styles';
export const Label = React.forwardRef<
  HTMLLabelElement,
  React.ComponentPropsWithRef<'label'>
>((props, ref) => {
  const id = useContext(FieldContext);
  return <StyledLabel {...props} htmlFor={id} ref={ref} />;
});

Label.displayName = 'Field.Label';
