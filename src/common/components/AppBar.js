import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import {White} from '../../common/styles/colors'
import {Row, Content} from '../../common/components/Grid'
import Logo from './Logo'

const AppBar = () =>
  <Container>
    <Row>
      <Content>
        <Link to="/">
          <H1>
            <Logo />
          </H1>
        </Link>
      </Content>
    </Row>
  </Container>

export const APP_BAR_HEIGHT = 67

const Container = styled.div`
  background-color: ${White.LIGHT};
  display: flex;
  flex-direction: column;
  height: ${APP_BAR_HEIGHT}px;
  justify-content: center;
`

const H1 = styled.h1`
  margin: 0;
`

export default AppBar
