import React, { useContext } from 'react';
import { FieldContext } from './FieldContext';
import { StyledTextArea } from './styles';
import PropTypes from 'prop-types';
export interface TextareaProps extends React.ComponentPropsWithRef<'textarea'> {
  isResizable?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ isResizable, ...props }, ref) => {
    const id = useContext(FieldContext);
    return (
      <StyledTextArea isResizable={isResizable} ref={ref} id={id} {...props} />
    );
  }
);
Textarea.displayName = 'Field.TextArea';
Textarea.defaultProps = {
  isResizable: true,
};

Textarea.propTypes = {
  isResizable: PropTypes.bool,
};
