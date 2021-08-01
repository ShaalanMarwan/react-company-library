import React from 'react';
import { useUniqueId } from '../utils/useUniqueID';
import { FieldContext } from './FieldContext';
import { Label } from './Label';
import { Input } from './Input';
import { Textarea } from './Textarea';

interface FieldComposition {
  Label: typeof Label;
  Input: typeof Input;
  Textarea: typeof Textarea;
}

export const Field: React.FC & FieldComposition = ({ children }) => {
  const id = useUniqueId();
  return <FieldContext.Provider value={id}>{children}</FieldContext.Provider>;
};
Field.Input = Input;
Field.Label = Label;
Field.Textarea = Textarea;
