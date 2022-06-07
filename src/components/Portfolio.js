import React, { Component } from "react";
import Project from "./Project";
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
// import { Grid, List } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

class Portfolio extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const theme = createTheme();
    return (
      <ThemeProvider theme={theme}>
        <List>
          <Grid container justify="center">
            <Project
              iconSrc="https://avatars.githubusercontent.com/u/95151361?v=4"
              title="Dating Simulator"
              subtitle="UW Final Group Project"
              cardText="Data-A-Base is a dating simulator experience that will pull your heartstrings and build new connections as users start their journey to becoming a full-stack web developer."
              cardImage="https://github.com/Taylor25et/Final-Project-Dating-Sim/raw/main/client/public/assets/images/SignUpScreenshot.png"
              githubLink="https://github.com/Taylor25et/Final-Project-Dating-Sim"
              hostedLink="https://calm-hamlet-19238.herokuapp.com/"
              isHosted={true}
            />

            <Project
              iconSrc="https://avatars.githubusercontent.com/u/95151361?v=4"
              title="Tech Blog"
              subtitle="Coding Blog Project"
              cardText="This application is a CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts. This app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication."
              cardImage="https://github.com/Taylor25et/HW14-Tech-Blog/raw/main/public/assets/images/home.png"
              githubLink="https://github.com/Taylor25et/HW14-Tech-Blog"
              hostedLink="https://radiant-basin-40892.herokuapp.com/"
              isHosted={true}
            />

            <Project
              iconSrc="https://avatars.githubusercontent.com/u/95151361?v=4"
              title="Taveling Site"
              subtitle="Browse destinations by their attaractions"
              cardText="This travel application is designed to present users with four different options for travel destinations like theme parks, water parks, resorts, and specialty rollercoasters. Each subsequent page displays the top five destinations/parks for each category that showcases information like the website, address, yearly visitors, and a brief description of the location. "
              cardImage="https://github.com/Taylor25et/Project-2-Travel-App/raw/main/assets/home-page.png"
              githubLink="https://github.com/Taylor25et/Project-2-Travel-App"
              hostedLink="https://travalotpj2.herokuapp.com/"
              isHosted={true}
            />
          </Grid>
        </List>
      </ThemeProvider>
    );
  }
}
export default Portfolio;
