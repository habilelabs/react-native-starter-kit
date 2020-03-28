import * as Colors from './colors'
import * as Spacing from './spacing'

export const extraLargeFontSize = 32
export const largeFontSize = 24
export const buttonFontSize = 18
export const baseFontSize = 16
export const smallFontSize = 14
export const smallestFontSize = 10
export const largeHeaderFontSize = 20
export const headerFontSize = 18

const base = {
  justifyContent: 'center',
  alignItems: 'center',
}

export const centeredBox = {
  ...base,
    flex: 1
}

export const link = {
  fontWeight: 'bold',
}

export const bodyText = {
  color: Colors.baseText,
  fontSize: smallFontSize,
  lineHeight: 19,
}

export const headerText = {
  color: Colors.darkText,
  fontSize: headerFontSize,
  fontWeight: 'bold',
}

export const descriptionText = {
  color: Colors.baseText,
  fontSize: smallFontSize,
}

export const screenHeader = {
  ...base,
  color: Colors.baseText,
  fontSize: largeFontSize,
  fontWeight: 'bold',
}

export const screenFooter = {
  ...base,
    height: 40
}

export const sectionHeader = {
  ...base,
  ...headerText,
}

export const count = {
  ...base,
  ...descriptionText,
}
