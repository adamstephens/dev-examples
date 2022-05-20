import * as React from 'react'
import { Link } from 'gatsby'
import * as styles from './Layout.module.scss'
import GlobalHeader from '../common/GlobalHeader'

type Props = {
  children: React.ReactNode,
  navCol?: React.ReactNode
};

const Layout = ({ navCol, children }: Props): JSX.Element => {
  return (
    <div className={styles.layoutWrapper}>
      <div className={styles.layoutHeader}>
        <GlobalHeader />
      </div>
      <aside className={styles.layoutNavColumn}>
        {navCol}
      </aside>
      <main className={styles.layoutMain}>
        <article>
          {children}
        </article>
      </main>
      <aside className={styles.layoutAds}>
        Ads?
      </aside>
      <div className={styles.layoutFooter}>
        Footer
      </div>
    </div>
  )
}

export default Layout
