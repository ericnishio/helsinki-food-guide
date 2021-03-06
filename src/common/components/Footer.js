import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import {Row, Content} from '../../common/components/Grid'
import {MOBILE_MAX_WIDTH} from '../styles/responsive'
import {SMALL_FONT_SIZE} from '../styles/fonts'
import Avatar from './Avatar'

const Footer = () =>
  <Container>
    <Row>
      <Content>
        <Body>
          <Folder>
            <Avatar
              image="//www.gravatar.com/avatar/d280f78ddf1d397b7d69d0ff794f23d2"
              twitter="ericnishio"
            />
            <Right>
              <Copyright>
                &copy; {new Date().getFullYear()} Eric Nishio
              </Copyright>
              <Email>
                &#099;&#111;&#110;&#116;&#097;&#099;&#116;&#064;&#104;&#101;&#108;&#115;&#105;&#110;&#107;&#105;&#102;&#111;&#111;&#100;&#103;&#117;&#105;&#100;&#101;&#046;&#099;&#111;&#109;
              </Email>
              <LinkText to="privacy">
                Privacy Policy
              </LinkText>
              <Badge>
                <a href="https://www.contentful.com/" rel="nofollow noopener noreferrer" target="_blank">
                  <img
                    src="https://images.contentful.com/fo9twyrwpveg/7Htleo27dKYua8gio8UEUy/0797152a2d2f8e41db49ecbf1ccffdaa/PoweredByContentful_DarkBackground_MonochromeLogo.svg"
                    style={{maxWidth: '100px', width: '100%'}}
                    alt="Powered by Contentful" />
                </a>
              </Badge>
            </Right>
          </Folder>
        </Body>
      </Content>
    </Row>
  </Container>

const PADDING = '100px'
const PADDING_MOBILE = '50px'
const FOOTER_TEXT_COLOR = '#c5c5c5'

const Container = styled.div`
  background-color: #1f1f1f;
  color: ${FOOTER_TEXT_COLOR};
  font-weight: 300;
  margin-top: 140px;
  padding-top: ${PADDING}; padding-bottom: ${PADDING};

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
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

const Folder = styled.div`
  display: flex;
  flex-direction: row;
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 8px;
  margin-left: 18px;
`

const Copyright = styled.span`
  color: #e8e8e8;
  font-size: ${SMALL_FONT_SIZE};
  text-transform: uppercase;
`

const Email = styled.span`
  font-size: ${SMALL_FONT_SIZE};
  margin-top: 3px;
`

const Badge = styled.span`
  margin-top: 25px;
`

const LinkText = styled(Link)`
  color: ${FOOTER_TEXT_COLOR};
  font-size: ${SMALL_FONT_SIZE};
  margin-top: 10px;
`

export default Footer
