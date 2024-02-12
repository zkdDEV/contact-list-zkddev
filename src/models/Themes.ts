class ClassThemes {
  primary: string
  secondary: string
  textColor1: string
  textColor2: string
  textColor3: string
  buttonColor: string
  isDark: boolean

  constructor(
    primary: string,
    secondary: string,
    textColor1: string,
    textColor2: string,
    textColor3: string,
    buttonColor: string,
    isDark: boolean
  ) {
    this.primary = primary
    this.secondary = secondary
    this.textColor1 = textColor1
    this.textColor2 = textColor2
    this.textColor3 = textColor3
    this.buttonColor = buttonColor
    this.isDark = isDark
  }
}

export default ClassThemes
