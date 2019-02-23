import React from 'react'
import {Link} from 'react-router-dom'
import compact from 'lodash/compact'

import {Row, Content} from '../common/components/Grid'
import Hero from '../common/components/Hero'
import {Heading} from '../common/components/Typography'
import Paper from '../common/components/Paper'
import Spinner from '../common/components/Spinner'
import {FadeIn} from '../common/styles/animations'
import {loadPrivacyPolicyPage} from '../common/api'
import {useContentLoader} from '../common/hooks'

const PrivacyPolicy = () => {
  const content = useContentLoader(loadPrivacyPolicyPage)

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
            <Link to="/">Back to food guide</Link>
          </Paper>
        </FadeIn>
      </Content>
    </Row>
  )
}

export default PrivacyPolicy
