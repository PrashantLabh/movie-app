import React, { useState } from "react";
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  FormControl,
  FormHelperText,
} from "@material-ui/core";

const RegisterForm = ({ handleClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, password);
    let data = JSON.stringify({
      email_address: email,
      first_name: firstName,
      last_name: lastName,
      mobile_number: contact,
      password: password,
    });

    fetch("http://localhost:3000/api/v1/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(">>>>>>>SUCCESSFULLY REGISTERED >>>>>>", data);
        setSubmitted(true);
      });
  };

  return (
    <Container className="form-conatiner" maxWidth="xs">
      <form className="form-root" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl required className="formControl">
                  <TextField
                    required
                    label="First Name"
                    name="firstName"
                    size="small"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <FormHelperText>
                    <span className="red">Required</span>
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl required className="formControl">
                  <TextField
                    required
                    label="Last Name"
                    name="lastName"
                    size="small"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <FormHelperText>
                    <span className="red">Required</span>
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl required className="formControl">
                  <TextField
                    required
                    label="Email"
                    name="email"
                    size="small"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <FormHelperText>
                    <span className="red">Required</span>
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl required className="formControl">
                  <TextField
                    required
                    label="Password"
                    name="password"
                    size="small"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <FormHelperText>
                    <span className="red">Required</span>
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl required className="formControl">
                  <TextField
                    required
                    label="Contact No."
                    name="contact"
                    size="small"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                  <FormHelperText>
                    <span className="red">Required</span>
                  </FormHelperText>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          {submitted ? (
            <Grid item xs={12}>
              <Typography variant="subtitle1" display="block" gutterBottom>
                Registration Successful. Please login!
              </Typography>
            </Grid>
          ) : null}
          <Grid item xs={12}>
            <Button color="secondary" type="submit" variant="contained">
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default RegisterForm;
