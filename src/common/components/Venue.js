import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {addressToGoogleMapsUrl} from '../helpers'
import Icon from './Icon'
import {TABLET_MAX_WIDTH} from '../styles/responsive'
import {SMALL_FONT_SIZE} from '../styles/fonts'

const Venue = ({name, address, website, style}) =>
  <Container style={style}>
    <Info>
      <Name>{name}</Name>
      <Address>{address}</Address>
    </Info>
    <Actions>
      <Action url={addressToGoogleMapsUrl(address)} text="View on map" icon="room" />
      {
        Boolean(website) &&
        <Action url={website} text="Visit website" icon="link" iconStyle={{marginRight: '4px'}} />
      }
    </Actions>
  </Container>

Venue.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  website: PropTypes.string,
  style: PropTypes.object,
}

const Action = ({url, text, icon, iconStyle}) =>
  <Link href={url} target="_blank">
    <Icon name={icon} style={iconStyle} />
    <LinkText>{text}</LinkText>
  </Link>

Action.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  iconStyle: PropTypes.object,
}

const Link = styled.a`
  align-items: center;
  display: flex;
  margin-right: 10px;
  padding: 10px;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: ${TABLET_MAX_WIDTH}) {
    padding-left: 0; padding-right: 0;
    margin-right: 20px;
  }
`

const Container = styled.div`
  display: flex;
  font-weight: 400;
  justify-content: space-between;

  @media (max-width: ${TABLET_MAX_WIDTH}) {
    flex-direction: column;
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${TABLET_MAX_WIDTH}) {
    margin-bottom: 10px;
  }
`

const Actions = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${TABLET_MAX_WIDTH}) {
    font-size: ${SMALL_FONT_SIZE};
  }
`

const LinkText = styled.span`
`

const Name = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
  letter-spacing: 1px;
  line-height: 22px;
  text-transform: uppercase;

  @media (max-width: ${TABLET_MAX_WIDTH}) {
    margin-bottom: 0;
  }
`

const Address = styled.div`
  font-size: 14px;
  line-height: 21px;
`

export default Venue
