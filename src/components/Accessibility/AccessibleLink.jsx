import { useLink } from "@react-aria/link";
import { useRef } from "react"
import { Link } from "react-router-dom";

const AccessibleLink = ({ to, children, ...props}) => {
    const ref = useRef();
    const { linkProps } = useLink({ href: to }, ref);

  return (
    <Link to={to} {...linkProps} {...props} ref={ref}>
        {children}
    </Link>
  )
}

export default AccessibleLink