import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Button from '../../../common/components/Button'
import Checkbox from '../../../common/components/Checkbox'
import {getLocalStorageValue, setLocalStorageValue} from '../../../common/localStorage'
import {getDefaultPolicyValues, runWithCookiePolicies} from '../helpers'

const CookieType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  provider: PropTypes.string.isRequired,
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
  // TODO: Show popup when there are new, unaccepted policies.

  static propTypes = {
    policies: PropTypes.arrayOf(PolicyType).isRequired,
    style: PropTypes.any,
  }

  state = {
    activePolicy: this.props.policies[0].value,
    saved: getLocalStorageValue('cookiePolicies') || getDefaultPolicyValues(this.props.policies),
  }

  componentDidMount() {
    runWithCookiePolicies()
  }

  render() {
    const {policies, style} = this.props
    const {saved} = this.state

    const activePolicy = policies.find(_ => _.value === this.state.activePolicy)

    return (
      <Container style={style}>
        <Top>
          <Menu>
            {policies.map(policy =>
              <MenuItem
                key={policy.value}
                isActive={activePolicy.value === policy.value}
                onClick={() => this.setState({activePolicy: policy.value})}
              >
                {policy.label}
              </MenuItem>
            )}
          </Menu>
          <Body>
            <Heading>{activePolicy.label}</Heading>
            <Description>{activePolicy.description}</Description>
            <Checkbox
              label={`Accept these cookies ${activePolicy.isRequired ? '(required)' : ''}`}
              value={activePolicy.isRequired ? true : Boolean(saved[activePolicy.value])}
              onClick={value => {
                const saved = {
                  ...this.state.saved,
                  [activePolicy.value]: value,
                }

                this.setState({saved})

                saveCookiePolicies(saved)
              }}
              disabled={activePolicy.isRequired}
              style={{
                marginBottom: '20px',
              }}
            />
            <Table>
              <Thead>
                <tr>
                  <td>Name</td>
                  <td>Provider</td>
                  <td>Purpose</td>
                  <td>Expiry</td>
                  <td>Type</td>
                </tr>
              </Thead>
              <tbody>
                {activePolicy.cookies.map((cookie, index) => (
                  <tr key={index}>
                    <td>{cookie.name}</td>
                    <td>{cookie.provider}</td>
                    <td>{cookie.purpose}</td>
                    <td>{cookie.expiry}</td>
                    <td>{cookie.type}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Body>
        </Top>
        <Bottom>
          <Button
            type="button"
            onClick={() => {
              saveCookiePolicies(this.state.saved)
              runWithCookiePolicies()
            }}
            style={{flex: 1}}
          >
            OK
          </Button>
        </Bottom>
      </Container>
    )
  }
}

const saveCookiePolicies = (policies) =>
  setLocalStorageValue('cookiePolicies', policies)

const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 600px;
  position: fixed;
  bottom: 0;
  left: 0; right: 0;
  z-index: 10;
`

const Top = styled.div`
  display: flex;
  flex-direction: row;
`

const Menu = styled.div`
`

const MenuItem = styled.div`
  cursor: pointer;
  padding: 10px 40px;

  ${props => props.isActive && 'background-color: #ddd;'};
`

const Body = styled.div`
  height: 185px;
  overflow-y: scroll;
  padding: 20px 30px;
`

const Heading = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 10px;
`

const Description = styled.div`
  font-size: 12px;
  margin-bottom: 15px;
`

const Table = styled.table`
  font-size: 12px;
`

const Thead = styled.thead`
  font-weight: 600;
`

const Bottom = styled.div`
  display: flex;
  margin-top: 20px;
`

export default CookiePolicy
