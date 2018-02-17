import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {addressToGoogleMapsUrl} from '../helpers'
import Icon from './Icon'

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
`

const Container = styled.div`
  display: flex;
  font-weight: 400;
  justify-content: space-between;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
`

const Actions = styled.div`
  display: flex;
  align-items: center;
`

const LinkText = styled.span`
`

const Name = styled.div`
  margin-bottom: 5px;
  letter-spacing: 1px;
  text-transform: uppercase;
`

const Address = styled.div`
  font-size: 15px;
`

export default Venue