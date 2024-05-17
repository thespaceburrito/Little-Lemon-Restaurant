import { extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/markazi-text'
import '@fontsource-variable/karla'

const theme = extendTheme({
  fonts: {
    heading: `'Markazi Text', serif`,
    body: `'Karla', sans-serif`,
    button: `'Karla', sans-serif`,
  },
})

export default theme