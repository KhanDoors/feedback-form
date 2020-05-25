import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    flexGrow: 1,
    width: "90%",
  },
  field: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const FeedbackForm = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    uploadedFiles: [],
    buttonText: "Submit",
    uploadPhotoButtonText: "Upload Files",
  });

  const {
    name,
    email,
    message,
    phone,
    uploadedFiles,
    buttonText,
    uploadPhotoButtonText,
  } = values;

  const handleChange = (e) => {
    // setValues(...values, [])
    console.log(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setValues(...values, [])
    console.log(e);
  };

  return (
    <>
      <Typography variant="h1" style={{ textAlign: "center" }} gutterBottom>
        Feedback Form
      </Typography>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Grid item xs={12}>
            <TextField
              className={classes.field}
              type="text"
              label="Name"
              value={name}
              fullWidth
              margin="normal"
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.field}
              type="email"
              label="Email Address"
              value={email}
              fullWidth
              margin="normal"
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.field}
              type="text"
              label="Message"
              multiline
              value={message}
              fullWidth
              margin="normal"
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.field}
              type="text"
              label="Phone Number"
              value={phone}
              fullWidth
              margin="normal"
              onChange={handleChange}
              required
            />
          </Grid>

          <Button variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
      </Grid>
    </>
  );
};

export default FeedbackForm;
