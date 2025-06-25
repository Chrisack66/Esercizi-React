import { useEffect, useRef } from 'react';

function FocusableInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <input ref={inputRef} placeholder="This will be focused" />
    </div>
  );
}

export default FocusableInput;