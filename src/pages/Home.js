import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Navigation from "../components/Navigation";

// export default function Main({ page }) {
//   const currentpage = () => {
//     if (page === "about") {
//       return <About />;
//     } else if (page === "contact") {
//     } else if (page === "services") { 
//     } else { }
//   };
//   return <>{currentpage()}</>;
// }

// Styling Imports
import {
  Paper,
  Typography,
  Button,
  Grid,
  CssBaseline,
  Box,
  Container,
} from "@mui/material";
// import { makeStyles } from "@material-ui/core/styles";
// import promptQuestions from "../components/Dialogue";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     minHeight: "100vh",
//     backgroundImage: `url(${
//       process.env.PUBLIC_URL + "./assets/images/.jpeg"
//     })`,
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
// }));

// const currentPrompt = promptQuestions.prompts[promptIndex];
// const currentImg = currentPrompt.image

export default function Home(props) {
  // const classes = useStyles();
 


  return (
    <React.Fragment>
      <Header
        style={{ backgroundColor: "hsla(0, 100%, 90%, 0.8" }}
        sx={{ mt: 0 }}
      />
      <div className={classes.root}>
        <Typography color="white">
          <CssBaseline />
          {/* User Info Section */}
          <Paper
            style={{
              padding: 60,
              border: "3px solid black",
              width: "50rem",
              backgroundColor: "hsla(0, 100%, 90%, 0.8",
            }}
          >
            <Container maxWidth="lg" className="container homepage">
              <Box>
                <Container maxWidth="md" className="userInfo">
                  {/* <img></img>  */}
                  <h3 align="center">Welcome to Date-A-Base!</h3>
                  <p>
                    for
                  </p>
                  <p>
                    notes
                  </p>
                  <h3>Your Dating Profile:</h3>
                  <ul>
                    <li>Name: Brian</li>
                    <li>Gender: Male</li>
                    <li>
                      Description: A go-getter student looking to take on the
                      challenge of full-stack web development and begin their
                      coding career journey.
                    </li>
                  </ul>
                </Container>
             
             
                <div>
                  <Grid container justify="center">
                    <Button
                      variant="contained"
                      align="right"
                      className="startGameButton"
                      size="large"
                    >
                      <Link className="startGame" to="/Game">
                        JOIN CLASS
                      </Link>
                    </Button>
                  </Grid>
                </div>
              </Box>
            </Container>
          </Paper>
        </Typography>
      </div>
      <Footer sx={{ mt: 5 }} />
    </React.Fragment>
  );
}

