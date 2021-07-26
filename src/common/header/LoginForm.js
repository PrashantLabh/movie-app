/**
 * THIS IS LOGIN FORM COMPONENT
 * HANDLES FORMS, VALIDATION AND CALL PARENT METHOD ON SUBMISSION, ALSO STORES SUCCESSFUL LOGIN IN SESSION STORAGE
 */
import React, { useState } from "react";
import {
  TextField,
  Grid,
  Container,
  Button,
  FormControl,
  FormHelperText,
} from "@material-ui/core";

const LoginForm = ({ handleClose }) => {
  //States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //On click Login Button
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    sessionStorage.setItem("access-token", window.btoa(`${email - password}`));
    handleClose();
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
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button color="secondary" type="submit" variant="contained">
              Log in
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default LoginForm;
