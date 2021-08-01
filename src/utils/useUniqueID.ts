import { customAlphabet } from 'nanoid';
import { useState } from 'react';

const nanoid = customAlphabet('1234567890abcdef', 10);

export const useUniqueId = (): string => {
  const [id] = useState(nanoid());
  return id;
};
