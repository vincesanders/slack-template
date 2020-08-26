import {
  Container,
  Divider,
  TextField,
  Typography,
} from '@material-ui/core';
import React, {useState} from 'react';

function Sprint() {
  const [values, setValues] = useState( {
    github: '',
    sprint: '',
  } );

  const handleChange = ( {target: {name, value}} ) => setValues( {
    ...values,
    [name]: value,
  } );
  return (
      <Container>
        <Typography variant='h2' component='h1'>Sprint Challenge Slack
          Message</Typography>
        <Divider />
        <TextField label="GitHub Link"
                   name="github"
                   value={values.github}
                   onChange={handleChange} />
        <TextField label="Sprint Name"
                   name="sprint"
                   value={values.sprint}
                   onChange={handleChange} />
        <Divider />
        <code>
          <p>Good Evening CSPT8</p>
          <br />
          <p>:wpt8: <b>Sprint Challenge Day</b> :webpt12:</p>
          <br />
          <p>Keep in mind that this is an opportunity to demonstrate what you’ve
            learned this Sprint. Push yourself to get as far as you can and
            you’ll be amazed at what you can accomplish in 3 hours! We’re
            excited to see what you can do :smiley:</p>
          <br />
          <p>{`Your ${values.sprint} Sprint Challenge is located here:`}</p>
          <p>{`${values.github}`}</p>
          <br />
          <p>Please do not chat with other students about the Sprint Challenge
            and please make sure to read the instructions in the README. If you
            need help, follow the <b>20 minute rule</b>, then send a message to
            your
            Team Lead. <b>No #cspt8_help channel on Sprint Days</b>. It's the 20
            minute
            rule and then Team Lead.</p>
        </code>
        <p>Slack Reminder for Sprints</p>
        <code>
          <p>Before you leave, please update your Sprint Challenge Pull Request.</p>
          <ol>
            <li>Save your work locally</li>
            <li>Commit all your changes in Git </li>
            <li>Push your commits up to GitHub. </li>
            <li>and fill out a Student Sprint Retrospective: https://forms.lambdaschool.com/sprint-retrospective ...which includes your Pull Request link!</li>
          </ol>
          <p>Thank you :slightly_smiling_face:</p>
        </code>
      </Container>
  );
}

export default Sprint;