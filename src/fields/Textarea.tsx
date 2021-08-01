import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { StyledTextarea } from './styles';
import { FieldContext } from './FieldContext';

export interface TextareaProps {
  isResizable?: boolean;
}

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  TextareaProps & React.ComponentPropsWithoutRef<'textarea'>
>(({ isResizable, ...props }, ref) => {
  const id = useContext(FieldContext);

  return (
    <StyledTextarea ref={ref} id={id} isResizable={isResizable} {...props} />
  );
});

Textarea.displayName = 'Field.Textarea';

Textarea.defaultProps = {
  isResizable: true,
};

Textarea.propTypes = {
  isResizable: PropTypes.bool,
};
