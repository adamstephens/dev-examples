import * as React from "react"
import { Link } from "gatsby"

type Props = {
  children: React.ReactNode,
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/css">CSS</Link></li>
        </ul>
      </nav>
      {children}
    </div>
  )
}

export default Layout