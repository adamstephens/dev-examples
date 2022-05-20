import * as React from 'react'
import * as styles from './BrowserSupport.module.scss'

type Props = {
  browsers: [
    {
      name: string,
      version: string
    }
  ]
}

function BrowserSupport ({ browsers }: Props): JSX.Element {
  const tableHeaders = browsers.map((browser) => <th key={browser.name}>{browser.name}</th>)
  const tableCells = browsers.map((browser) => <td key={browser.name} className={`${browser.version ? styles.supported : styles.notSupported}`}>{browser.version}</td>)

  return (
    <table>
      <thead>
        <tr>
          {tableHeaders}
        </tr>
      </thead>
      <tbody>
        <tr>
          {tableCells}
        </tr>
      </tbody>
    </table>
  )
}

export default BrowserSupport
