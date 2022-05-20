import * as React from 'react'
import { Link } from 'gatsby'
import * as styles from './BrowserSupport.module.scss'

const GlobalHeader = () => {
  return (
    <header>
      This is the header

      <nav>
        <ul>
          <li><Link to="/css">CSS</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default GlobalHeader
