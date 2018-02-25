import React from 'react'
import styled from 'styled-components'

import {Row, Content} from '../../common/components/Grid'
import {TABLET_MAX_WIDTH} from '../styles/responsive'
import {SMALL_FONT_SIZE} from '../styles/fonts'

const Footer = () =>
  <Container>
    <Row>
      <Content>
        <Body>
          <Copyright>
            &copy; {new Date().getFullYear()} helsinkifoodguide.com
          </Copyright>
          <a href="https://www.contentful.com/" rel="nofollow noopener noreferrer" target="_blank">
            <img
              src="https://images.contentful.com/fo9twyrwpveg/7Htleo27dKYua8gio8UEUy/0797152a2d2f8e41db49ecbf1ccffdaa/PoweredByContentful_DarkBackground_MonochromeLogo.svg"
              style={{marginTop: '20px', maxWidth: '100px', width: '100%'}}
              alt="Powered by Contentful" />
          </a>
        </Body>
      </Content>
    </Row>
  </Container>

const PADDING = '100px'
const PADDING_MOBILE = '50px'

const Container = styled.div`
  background-color: #1f1f1f;
  color: #c5c5c5;
  font-weight: 300;
  margin-top: 140px;
  padding-top: ${PADDING}; padding-bottom: ${PADDING};

  @media (max-width: ${TABLET_MAX_WIDTH}) {
    margin-top: 80px;
    padding-top: ${PADDING_MOBILE}; padding-bottom: ${PADDING_MOBILE};
  }
`

const Body = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`

const Copyright = styled.div`
  font-size: ${SMALL_FONT_SIZE};
  text-transform: uppercase;
`

export default Footer
