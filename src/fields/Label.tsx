import React, { useContext } from 'react';
import { FieldContext } from './FieldContext';
export const Label = React.forwardRef<
  HTMLLabelElement,
  React.ComponentPropsWithRef<'label'>
>((props, ref) => {
  const id = useContext(FieldContext);
  return <label {...props} htmlFor={id} ref={ref} />;
});

Label.displayName = 'Field.Label';
