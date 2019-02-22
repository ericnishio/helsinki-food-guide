import React from 'react'
import compact from 'lodash/compact'

import {Row, Content} from '../common/components/Grid'
import Hero from '../common/components/Hero'
import {Heading} from '../common/components/Typography'
import Paper from '../common/components/Paper'
import Spinner from '../common/components/Spinner'
import {FadeIn} from '../common/styles/animations'
import {useContentLoader, loadAboutPage} from '../common/api'

const About = () => {
  const content = useContentLoader(loadAboutPage)

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

export default About
