import React, { useState } from 'react'
import * as styles from './cssBorderGenerator.module.scss'

const CssBorderGenerator = (): JSX.Element => {
  const [borderWidth, setBorderWidth] = useState('1')
  const [borderColor, setBorderColor] = useState('#000')
  const [borderStyle, setBorderStyle] = useState('solid')

  return (
    <div>
      <div className={styles.dynamicElement} style={{ border: `${borderStyle} ${borderWidth}px ${borderColor}` }}></div>

      <label htmlFor="cssBorderGeneratorWidth">Set border width</label>
      <select value={borderWidth} onChange={e => setBorderWidth(e.target.value)} id="cssBorderGeneratorWidth">
        <option value="1" selected>1px</option>
        <option value="2">2px</option>
        <option value="3">3px</option>
        <option value="4">4px</option>
      </select>

      <label htmlFor="cssBorderGeneratorStyle">Set border style</label>
      <select value={borderStyle} onChange={e => setBorderStyle(e.target.value)} id="cssBorderGeneratorStyle">
        <option value="none" selected>none</option>
        <option value="hidden">hidden</option>
        <option value="dotted">dotted</option>
        <option value="dashed">dashed</option>
        <option value="solid">solid</option>
        <option value="double">double</option>
        <option value="groove">groove</option>
        <option value="ridge">ridge</option>
        <option value="inset">inset</option>
        <option value="outset">outset</option>
        <option value="initial">initial</option>
        <option value="inherit">inherit</option>
      </select>

      <label htmlFor="cssBorderGeneratorColor">Set border color</label>
      <select value={borderColor} onChange={e => setBorderColor(e.target.value)} id="cssBorderGeneratorColor">
        <option value="#000" selected>Black</option>
        <option value="#F00">Red</option>
        <option value="#0F0">Green</option>
        <option value="#00F">Blue</option>
      </select>
    </div>

  )
}

export default CssBorderGenerator
