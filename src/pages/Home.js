import React, {Component} from 'react'

import {Row, Content} from '../common/components/Grid'
import {Heading} from '../common/components/Typography'

class Home extends Component {
  render() {
    return (
      <Row>
        <Content>
          <Heading>
            Know exactly what to order.<br />
            Featuring only the best dishes in Helsinki.
          </Heading>
        </Content>
      </Row>
    )
  }
}

export default Home
