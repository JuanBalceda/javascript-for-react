import styled from '../styled-components/index.js'
import { component as Component } from '../react/index.js'

const TitleStyled = styled.h1`
font-family: system-ui;
color: orange;
text-shadow: 1px 1px rgba(0, 0, 0, .5);
line-height: 100vh;
`

const data = {
  name: 'Juan',
  message: 'don\'t give up'
}

const titleContent = Component`Hey ${'name'}, ${'message'}`(data)

export default TitleStyled(titleContent)