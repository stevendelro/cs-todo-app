import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
  signup__ROOT: {
    width: theme.spacing(),
    height: theme.spacing(5),
  }
}))

function SignIn() {
  const classes = useStyles()
  return (
    <div>
      <Grid md={6}></Grid>
      <Grid md={6}>
        <Container maxWidth="sm">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center">
            <Paper className={classes.signup__ROOT} elevation={3}>paper</Paper>
          </Grid>
        </Container>
      </Grid>
    </div>
  );
}

export default SignIn;
