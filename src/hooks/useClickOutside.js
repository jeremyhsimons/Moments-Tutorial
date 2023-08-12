import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'

const useClickOutside = () => {
    const [expanded, setExpanded] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
      const handleClickOutside = (event) => {
          if (ref.current && !ref.current.contains(event.target)) {
              setExpanded(false);
          }
      };
      document.addEventListener('mouseup', handleClickOutside)
      return () => {
          document.removeEventListener('mouseup', handleClickOutside)
      };
    }, [ref]);

  return { expanded, setExpanded, ref };
};

export default useClickOutside