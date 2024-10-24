import { useButton } from '@react-aria/button';
import { useRef } from 'react';

const AccessibleButton = ({ children, onClick, ariaLabel, ...props }) => {
  const ref = useRef();
  const { buttonProps } = useButton({ onPress: onClick }, ref);

  return (
    <button {...buttonProps} ref={ref} aria-label={ariaLabel} {...props}>
      {children}
    </button>
  );
};

export default AccessibleButton;
