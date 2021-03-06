import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import {Row, Content} from '../common/components/Grid'
import {APP_BAR_HEIGHT} from '../common/components/AppBar'
import {HEADING_FONT} from '../common/styles/fonts'
import BROKEN_EGG from '../assets/images/broken-egg.png'
import {MOBILE_MAX_WIDTH} from '../common/styles/responsive'

const NotFound = () =>
  <Row>
    <Content>
      <Body>
        <LinkWrapper to="/">
          <Image src={BROKEN_EGG} alt="Not found" />
          <Heading>Oops...</Heading>
        </LinkWrapper>
      </Body>
    </Content>
  </Row>

const Body = styled.div`
  align-items: center; justify-content: center;
  display: flex;
  flex-grow: 1;
  height: ${window.innerHeight - APP_BAR_HEIGHT}px;
`

const Heading = styled.h2`
  color: #4a405d;
  font-family: ${HEADING_FONT};
  font-style: normal;
  font-size: 50px;
  font-weight: 400;
  margin: 0;

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    display: none;
  }
`

const LinkWrapper = styled(Link)`
  align-items: center; justify-content: center;
  display: flex;
`

const Image = styled.img`
  height: auto; width: 270px;
`

export default NotFound
