import { useEffect, useState } from 'react';

function useField(defaultValue, fieldName) {
  const [value, setValue] = useState(localStorage.getItem(fieldName) ?? defaultValue);

  useEffect(() => {
    localStorage.setItem(fieldName, value);
  }, [value]);

  return [value, setValue];
}

export default useField;
