import React, {Component} from 'react'

import {Row, Content} from '../common/components/Grid'
import Hero from '../common/components/Hero'
import {Heading} from '../common/components/Typography'

class Home extends Component {
  render() {
    return (
      <Row>
        <Content>
          <Hero>
            <Heading>
              Know exactly what to order.<br />
              Featuring only the best dishes in Helsinki.
            </Heading>
          </Hero>
        </Content>
      </Row>
    )
  }
}

export default Home
