import { useLink } from "@react-aria/link";
import { useRef } from "react"

const AccessibleLink = ({ href, children, ...props}) => {
    const ref = useRef();
    const { linkProps } = useLink({ href }, ref);

  return (
    <a {...linkProps} {...props} ref={ref}>
        {children}
    </a>
  )
}

export default AccessibleLink