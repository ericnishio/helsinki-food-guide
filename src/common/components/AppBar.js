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
          <Logo />
        </Link>
      </Content>
    </Row>
  </Container>

const Container = styled.div`
  background-color: ${White.LIGHT};
  padding-top: 15px; padding-bottom: 15px;
`

export default AppBar
