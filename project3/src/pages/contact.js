import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = name ? "" : "This field is required.";
    tempErrors.email = email ? "" : "This field is required.";
    tempErrors.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) ? "" : "Email is not valid.";
    tempErrors.message = message ? "" : "This field is required.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // form submission
      console.log({ name, email, message });

      // clear form
      setName('');
      setEmail('');
      setMessage('');

      //notification
      setSubmitted(true);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
  };

  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={12} md={6}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            label="Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            {...(errors.name && { error: true, helperText: errors.name })}
            margin="normal"
          />
          <TextField
            variant="outlined"
            label="Email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            {...(errors.email && { error: true, helperText: errors.email })}
            margin="normal"
          />
          <TextField
            variant="outlined"
            label="Message"
            fullWidth
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            {...(errors.message && { error: true, helperText: errors.message })}
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" style={{ marginTop: '16px' }}>
            Submit
          </Button>
        </form>
        <Snackbar open={submitted} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Your message has been sent!
          </Alert>
        </Snackbar>
      </Grid>
    </Grid>
  );
};

export default Contact;
