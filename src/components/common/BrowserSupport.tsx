import * as React from 'react'

type Props = {
  browsers: {
    ie: string,
    edge: string,
    firefox: string,
    chrome: string,
    safari: string,
    opera: string,
  }
}

function BrowserSupport ({ browsers }: Props): JSX.Element {
  return (
    <table>
      <thead>
        <tr>
          <th>IE</th>
          <th>Edge</th>
          <th>Firefox</th>
          <th>Chrome</th>
          <th>Safari</th>
          <th>Opera</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{browsers.ie}</td>
          <td>{browsers.edge}</td>
          <td>{browsers.firefox}</td>
          <td>{browsers.chrome}</td>
          <td>{browsers.safari}</td>
          <td>{browsers.opera}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default BrowserSupport
