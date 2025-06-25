import { useEffect, useRef } from 'react';

function EffectOnMount() {
  const hasMountedRef = useRef(false);

  useEffect(() => {
    if (!hasMountedRef.current) {
      console.log("Component mounted for the first time");
      hasMountedRef.current = true;
    }
  }, []);

}

export default EffectOnMount;
