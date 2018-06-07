import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Button from '../../../common/components/Button'
import Checkbox from '../../../common/components/Checkbox'
import {getLocalStorageValue, setLocalStorageValue} from '../../../common/localStorage'
import {MOBILE_MAX_WIDTH} from '../../../common/styles/responsive'
import {getDefaultPolicyValues, runWithCookiePolicies} from '../helpers'

const CookieType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  purpose: PropTypes.string.isRequired,
  expiry: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
})

const PolicyType = PropTypes.shape({
  label: PropTypes.string.isRequired,
  description: PropTypes.string,
  value: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  cookies: PropTypes.arrayOf(CookieType),
})

class CookiePolicy extends Component {
  // TODO: Ability to edit choices.

  static propTypes = {
    policies: PropTypes.arrayOf(PolicyType).isRequired,
    style: PropTypes.any,
  }

  state = {
    showDetails: false,
    activePolicy: this.props.policies[0].value,
    saved: {
      ...getDefaultPolicyValues(this.props.policies),
      ...getSavedCookiePolicies(),
    },
  }

  componentDidMount() {
    runWithCookiePolicies()
  }

  hasUnreviewedPolicies = () => {
    const savedCookiePolicies = getSavedCookiePolicies() || {}

    return Object.values(savedCookiePolicies).length !== this.props.policies.length
  }

  render() {
    const {policies, style} = this.props
    const {saved, showDetails} = this.state

    const activePolicy = policies.find(_ => _.value === this.state.activePolicy)

    if (!this.hasUnreviewedPolicies()) {
      return null
    }

    return (
      <Outer>
        <Container style={style}>
          <Top>
            <Menu>
              {
                policies.map(policy =>
                  <MenuItem
                    key={policy.value}
                    isActive={activePolicy.value === policy.value}
                    onClick={() => this.setState({activePolicy: policy.value})}
                  >
                    {policy.label}
                  </MenuItem>
                )
              }
            </Menu>
            <Body>
              <Heading>{activePolicy.label} cookies</Heading>
              <Description>{activePolicy.description}</Description>
              {
                showDetails &&
                <Table>
                  <Thead>
                    <tr>
                      <Th>Cookie(s)</Th>
                      <Th>Purpose</Th>
                      <Th>Expiry</Th>
                      <Th>Type</Th>
                    </tr>
                  </Thead>
                  <tbody>
                    {
                      activePolicy.cookies.map((cookie, index) => (
                        <Tr key={index}>
                          <td>{cookie.name}</td>
                          <td>{cookie.purpose}</td>
                          <td style={{whiteSpace: 'nowrap'}}>{cookie.expiry}</td>
                          <td>{cookie.type}</td>
                        </Tr>
                      ))
                    }
                  </tbody>
                </Table>
              }
              <SmallButton onClick={() => this.setState({showDetails: !showDetails})}>
                {showDetails ? 'Hide details...' : 'Show details...'}
              </SmallButton>
              <Checkbox
                label={`Accept these cookies ${activePolicy.isRequired ? '(required)' : ''}`}
                value={activePolicy.isRequired ? true : Boolean(saved[activePolicy.value])}
                onClick={value => {
                  this.setState({
                    saved: {
                      ...this.state.saved,
                      [activePolicy.value]: value,
                    },
                  })
                }}
                disabled={activePolicy.isRequired}
                style={{
                  marginTop: '15px',
                }}
              />
            </Body>
          </Top>
          <Bottom>
            <Button
              type="button"
              onClick={() => {
                saveCookiePolicies(this.state.saved)
                runWithCookiePolicies()
                this.forceUpdate()
              }}
              style={{flex: 1}}
            >
              OK
            </Button>
          </Bottom>
        </Container>
      </Outer>
    )
  }
}

const getSavedCookiePolicies = () =>
  getLocalStorageValue('cookiePolicies')

const saveCookiePolicies = (policies) =>
  setLocalStorageValue('cookiePolicies', policies)

const Outer = styled.div`
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;
  z-index: 10;
`

const Container = styled.div`
  background-color: #fff;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  width: 600px;
`

const Top = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    flex-direction: column;
  }
`

const Menu = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    flex-direction: row;
  }
`

const MenuItem = styled.div`
  align-items: center; justify-content: center;
  cursor: pointer;
  display: flex;
  font-size: 11px;
  font-weight: 600;
  padding-left: 40px; padding-right: 40px;
  height: 40px;
  text-transform: uppercase;
  transition: opacity 0.2s ease-in;

  &:active {
    opacity: 0.7;
  }

  ${props => props.isActive && 'background-color: #f2f2f2;'};
`

const Body = styled.div`
  padding: 20px 30px;
`

const Heading = styled.h2`
  font-size: 22px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 10px;
`

const Description = styled.div`
  font-size: 12px;
  margin-bottom: 10px;
`

const Table = styled.table`
  border-spacing: 5px;
  font-size: 12px;

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    display: flex;
    flex-direction: column;
  }
`

const Thead = styled.thead`
  font-weight: 600;

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    display: none;
  }
`

const Tr = styled.tr`
  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
  }
`

const Th = styled.th`
  text-align: initial;
`

const Bottom = styled.div`
  display: flex;
  margin-top: 5px;
`

const SmallButton = styled.div`
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  padding-top: 5px; padding-bottom: 5px;
`

export default CookiePolicy
