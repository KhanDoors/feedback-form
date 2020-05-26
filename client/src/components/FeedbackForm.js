import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

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
  card: {
    margin: "auto",
    backgroundColor: "lightGrey",
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

  const {
    REACT_APP_API,
    REACT_APP_CLOUDNAME,
    REACT_APP_UPLOADSECRET,
  } = process.env;

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, buttonText: "...sending" });
    console.table({ name, email, phone, message, uploadedFiles });
    setValues({
      name: "",
      email: "",
      message: "",
      phone: "",
      uploadedFiles: [],
      buttonText: "Submit",
    });
  };

  const uploadWidget = () => {
    window.cloudinary.openUploadWidget(
      {
        cloud_name: REACT_APP_CLOUDNAME,
        upload_preset: REACT_APP_UPLOADSECRET,
        tags: ["blog"],
      },
      function (error, result) {
        console.log(result);
      }
    );
  };

  return (
    <>
      <Typography variant="h1" style={{ textAlign: "center" }} gutterBottom>
        Feedback Form
      </Typography>

      <Card
        className={classes.card}
        style={{ height: "20em", width: "90%", textAlign: "center" }}
      >
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "150px" }}
          onClick={() => uploadWidget()}
        >
          {uploadPhotoButtonText}
        </Button>
      </Card>

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
              label="Description"
              multiline
              rows={8}
              name="message"
              value={message}
              fullWidth
              variant="outlined"
              margin="normal"
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.field}
              type="text"
              label="Name"
              name="name"
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
              name="email"
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
              name="phone"
              margin="normal"
              onChange={handleChange}
              required
            />
          </Grid>

          <Button type="submit" variant="contained" color="primary" fullWidth>
            {buttonText}
          </Button>
        </form>
      </Grid>
    </>
  );
};

export default FeedbackForm;
