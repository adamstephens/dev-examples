import * as React from 'react'
import { Link } from 'gatsby'

type Props = {
  children: React.ReactNode,
};

function Layout ({ children }: Props): JSX.Element {
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
