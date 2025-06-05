
import { useState, useEffect, useRef } from 'react';

const useIntersectionObserver = (options = { threshold: 0.1 }, triggerOnce = true) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (triggerOnce && hasAnimated) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        if (triggerOnce) {
          setHasAnimated(true);
          observer.unobserve(element); 
        }
      } else {
        if (!triggerOnce) {
          setIsIntersecting(false);
        }
      }
    }, options);

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options, triggerOnce, hasAnimated]);

  const visible = triggerOnce ? hasAnimated || isIntersecting : isIntersecting;

  return [elementRef, visible];
};

export default useIntersectionObserver;
