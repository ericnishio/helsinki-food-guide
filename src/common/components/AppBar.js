import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import {White} from '../../common/styles/colors'
import {MOBILE_MAX_WIDTH} from '../../common/styles/responsive'
import {Row, Content} from '../../common/components/Grid'
import Logo from './Logo'
import FacebookShare from './FacebookShare'

const AppBar = () =>
  <Container>
    <Row>
      <Content>
        <Inner>
          <Link to="/">
            <H1>
              <Logo />
            </H1>
          </Link>
          <Items>
            <FacebookShare />
          </Items>
        </Inner>
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

const Inner = styled.div`
  align-items: center; justify-content: space-between;
  display: flex;
  flex-direction: row;

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    flex-grow: 1;
  }
`

const H1 = styled.h1`
  margin: 0;
`

const Items = styled.div`
  display: flex;
`

export default AppBar
