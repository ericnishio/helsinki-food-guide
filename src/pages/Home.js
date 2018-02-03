import React, {Component} from 'react'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'

class Home extends Component {
  render() {
    return (
      <Grid container spacing={40}>
        <Grid item xs>
          <Typography noWrap>
            Foo bar baz.
          </Typography>
          <Button raised color="primary">
            OK
          </Button>
        </Grid>
      </Grid>
    )
  }
}

export default Home
