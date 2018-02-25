import React, {Component} from 'react'
import compact from 'lodash/compact'

import {Row, Content} from '../common/components/Grid'
import Hero from '../common/components/Hero'
import {Heading} from '../common/components/Typography'
import Paper from '../common/components/Paper'
import Spinner from '../common/components/Spinner'
import {FadeIn} from '../common/styles/animations'
import {loadAboutPage} from '../common/api'

class About extends Component {
  state = {
    content: undefined,
  }

  componentDidMount() {
    this.loadContent()
  }

  loadContent = async () => {
    try {
      const content = await loadAboutPage()

      this.setState({content})
    } catch (e) {
      window.alert('Server error')
    }
  }

  render() {
    const {content} = this.state

    if (!content) {
      return <Spinner centerOfViewport={true} />
    }

    return (
      <Row>
        <Content>
          <FadeIn>
            <Hero>
              <Heading>{content.title}</Heading>
            </Hero>
            <Paper>
              {
                compact(content.body.split('\n')).map((paragraph, index) =>
                  <p key={index}>{paragraph}</p>
                )
              }
            </Paper>
          </FadeIn>
        </Content>
      </Row>
    )
  }
}

export default About
