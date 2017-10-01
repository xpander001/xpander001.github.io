import { injectGlobal } from 'styled-components'
import reset from './reset.css'
import {textColor, linkTextColor} from './variables.css'

injectGlobal`
  ${reset}
  @import url('https://fonts.googleapis.com/css?family=Crimson+Text:400,600');
  html {
    font-size: 18px;
  }
  body {
    font-family: 'Crimson Text', serif;
    font-size: 100%;
    color: ${textColor}
  }
  body, html, #___gatsby {
    height: 100%;
  }
`
