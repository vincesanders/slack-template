import {
  Container,
  Grid,
  TextField,
  Typography, Divider
} from '@material-ui/core';
import React, {useState} from 'react';

function Guided() {
  const [values, setValues] = useState( {
    title      : '',
    description: '',
    trainingKit: '',
    zoomLink   : '',
  } );

  const handleChange = ( {target: {name, value}} ) => setValues( {
    ...values,
    [name]: value,
  } );

  return (
      <Container>
        <Grid container alignItems='center' direction='column' spacing={2}>
          <Grid item>
            <Typography variant="h2" component="h1">Guided Project Slack
              Message</Typography>
          </Grid>
          <Grid item>
            <Grid item>
              <Grid container direction='column'>
                <TextField name="title"
                           onChange={handleChange}
                           value={values.title}
                           label="Title"
                           variant="filled" />
                <TextField name="description"
                           onChange={handleChange}
                           value={values.description}
                           label="Description"
                           variant="filled" />
                <TextField name="trainingKit"
                           onChange={handleChange}
                           value={values.trainingKit}
                           label="Training Kit Link"
                           variant="filled" />
                <TextField name="zoomLink"
                           onChange={handleChange}
                           value={values.zoomLink}
                           label="Zoom Link"
                           variant="filled" />
              </Grid>
            </Grid>
          </Grid>

          <code>
            <p>Good evening CSPT8, please take this time and study the training
              kit on:</p>
            <br />
            <p>Topic: <b>{`${values.title}`}</b></p>
            <p>Subject: <b>{`${values.description}`}</b></p>
            <p><b>Training Kit Link:</b>{` ${values.trainingKit}`}</p>
            <br />
            <p>{`Please join us at the bottom of the hour for the guided project: ${values.zoomLink}`}</p>
          </code>
          <Divider />
          <code>
            <p>{`Please take a moment to reflect upon your day and fill out your Stand Up report on ${values.title}: https://forms.lambdaschool.com/module-retrospective We read and appreciate all feedback - positive, criticisms, suggestions - we want to hear from you :smiley:`}</p>
            <p>{`${values.title} for CSPT8 w/Artem Litchmanov`}</p>
          </code>
        </Grid>
      </Container>
  );
}

export default Guided;