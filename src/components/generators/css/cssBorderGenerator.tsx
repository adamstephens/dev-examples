import React, { useState } from 'react'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css'
import Slider from '@mui/material/Slider'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import { HexColorPicker, HexColorInput } from 'react-colorful'

import * as styles from './cssBorderGenerator.module.scss'
import '../../../styles/highlight.css'

SyntaxHighlighter.registerLanguage('css', css)

const CssBorderGenerator = (): JSX.Element => {
  const [borderWidth, setBorderWidth] = useState(1)
  const [borderColor, setBorderColor] = useState('#000000')
  const [borderStyle, setBorderStyle] = useState('solid')

  // Returns output value for border-width slider
  function valueLabelFormat (value: number) {
    return `${value}px`
  }

  // Update the state when border-width changes
  const handleWidthChange = (event: Event, newValue: number | number[]) => {
    setBorderWidth(newValue as number)
  }

  // Update the state when border-style changes
  const handleStyleChange = (event: SelectChangeEvent) => {
    setBorderStyle(event.target.value as string)
  }

  // Update the state when border-color changes
  const handleColorChange = (newColor: string) => {
    setBorderColor(newColor)
  }

  return (
    <div>
      <div className={styles.dynamicElement} style={{ border: `${borderStyle} ${borderWidth}px ${borderColor}` }}></div>
      <form className={styles.form}>
        <label htmlFor="cssBorderGeneratorWidth">Set border width</label>

        <Slider
          onChange={handleWidthChange}
          aria-label="Set border-width"
          defaultValue={1}
          getAriaValueText={valueLabelFormat}
          valueLabelFormat={valueLabelFormat}
          min={1}
          max={20}
          step={1}
          marks
          valueLabelDisplay="auto"
        />

        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="css-border-generator-style-label">Set border style</InputLabel>
          <Select
            labelId="css-border-generator-style-label"
            id="css-border-generator-style"
            value={borderStyle}
            label="Set border style"
            onChange={handleStyleChange}
          >
            <MenuItem value={'hidden'}>hidden</MenuItem>
            <MenuItem value={'dotted'}>dotted</MenuItem>
            <MenuItem value={'dashed'}>dashed</MenuItem>
            <MenuItem value={'solid'}>solid</MenuItem>
            <MenuItem value={'double'}>double</MenuItem>
            <MenuItem value={'groove'}>groove</MenuItem>
            <MenuItem value={'ridge'}>ridge</MenuItem>
            <MenuItem value={'inset'}>inset</MenuItem>
            <MenuItem value={'outset'}>outset</MenuItem>
            <MenuItem value={'initial'}>initial</MenuItem>
            <MenuItem value={'inherit'}>inherit</MenuItem>
          </Select>
        </FormControl>

        <HexColorPicker color={borderColor} onChange={handleColorChange} />
        <HexColorInput color={borderColor} onChange={handleColorChange} />
      </form>

      <SyntaxHighlighter language="css" useInlineStyles={false}>
        {`border: ${borderStyle} ${borderWidth}px ${borderColor}`}
      </SyntaxHighlighter>
    </div>
  )
}

export default CssBorderGenerator
