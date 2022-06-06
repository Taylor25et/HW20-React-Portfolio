import React,{Component} from 'react';

import Footer from './Footer';
import Project from './Project';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';

import { createTheme, ThemeProvider } from "@mui/material/styles";

class Portfolio extends Component {
  constructor(props){
    super(props);
    
  }
  render(){
   const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <List>
            <Grid container justify='center'>
                <Project
                    iconSrc='https://avatars.githubusercontent.com/u/95151361?v=4'
                    title='Dating Simulator'
                    subtitle='UW Final Group Project'
                    cardText='Data-A-Base is a dating simulator experience that will pull your heartstrings and build new connections as users start their journey to becoming a full-stack web developer.'
                    cardImage='https://github.com/Taylor25et/Final-Project-Dating-Sim/raw/main/client/public/assets/images/SignUpScreenshot.png'
                    githubLink='https://github.com/Taylor25et/Final-Project-Dating-Sim'
                    hostedLink='https://calm-hamlet-19238.herokuapp.com/'
                    isHosted={false}
                />

                <Project
                    iconSrc='https://avatars.githubusercontent.com/u/95151361?v=4'
                    title='Tech Blog'
                    subtitle="Coding Blog Project"
                    cardText='This application is a CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts. This app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.'
                    cardImage='https://github.com/Taylor25et/HW14-Tech-Blog/raw/main/public/assets/images/home.png'
                    githubLink='https://github.com/Taylor25et/HW14-Tech-Blog'
                    hostedLink='https://radiant-basin-40892.herokuapp.com/'
                    isHosted={false}
                />

                <Project
                    iconSrc='https://avatars.githubusercontent.com/u/95151361?v=4'
                    title='Taveling Site'
                    subtitle='Browse destinations by their attaractions'
                    cardText='This travel application is designed to present users with four different options for travel destinations like theme parks, water parks, resorts, and specialty rollercoasters. Each subsequent page displays the top five destinations/parks for each category that showcases information like the website, address, yearly visitors, and a brief description of the location. '
                    cardImage='https://github.com/Taylor25et/Project-2-Travel-App/raw/main/assets/home-page.png'
                    githubLink='https://github.com/Taylor25et/Project-2-Travel-App'
                    hostedLink='https://travalotpj2.herokuapp.com/'
                    isHosted={true}
                />
            </Grid>
            </List>
      <Footer sx={{ mt: 5 }} />

    </ThemeProvider>
  );
 }
}
export default Portfolio;

// EVERYTHING ABOVE HERE IS NEW

// import * as React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
// import ListSubheader from '@mui/material/ListSubheader';
// import IconButton from '@mui/material/IconButton';
// import InfoIcon from '@mui/icons-material/Info';
// // import Project from './Project';
// // import Footer from "./Footer";




// export default function Portfolio(props) {
//   return (
//     // <Project />
//     <ImageList sx={{ width: 500, height: 450 }}>
//       <ImageListItem key="Subheader" cols={2}>
//         <ListSubheader component="div">Portfolio</ListSubheader>
//       </ImageListItem>
//       {itemData.map((item) => (
//         <ImageListItem key={item.img}>
//           <img
//             src={`${item.img}?w=248&fit=crop&auto=format`}
//             srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//             alt={item.title}
//             loading="lazy"
//           />
//           <ImageListItemBar
//             title={item.title}
//             subtitle={item.author}
//             actionIcon={
//               <IconButton
//                 sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
//                 aria-label={`info about ${item.title}`}
//               >
//                 <InfoIcon />
//               </IconButton>
//             }
//           />
//         </ImageListItem>
//       ))}
//     </ImageList>
//   );
// }

// const itemData = [
//   {
//     img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//     title: 'Code Quiz',
//     author: '@bkristastucchio',
//     rows: 2,
//     cols: 2,
//     featured: true,
//   },
//   {
//     img: 'https://github.com/Taylor25et/Project-2-Travel-App/raw/main/assets/home-page.png',
//     title: 'Travel Application',
//     author: 'https://travalotpj2.herokuapp.com/',
//     //https://github.com/Taylor25et/Project-2-Travel-App
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//     title: 'Day Planner',
//     author: 'https://taylor25et.github.io/HW5-Day-Planner/',
//     //https://github.com/Taylor25et/HW5-Day-Planner
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//     title: 'Travel App',
//     author: '@nolanissac',
//     cols: 2,
//   },
// //   {
// //     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
// //     title: 'Hats',
// //     author: '@hjrc33',
// //     cols: 2,
// //   },
// //   {
// //     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
// //     title: 'Honey',
// //     author: '@arwinneil',
// //     rows: 2,
// //     cols: 2,
// //     featured: true,
// //   },
// //   {
// //     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
// //     title: 'Basketball',
// //     author: '@tjdragotta',
// //   },
// //   {
// //     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
// //     title: 'Fern',
// //     author: '@katie_wasserman',
// //   },
// //   {
// //     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
// //     title: 'Mushrooms',
// //     author: '@silverdalex',
// //     rows: 2,
// //     cols: 2,
// //   },
// //   {
// //     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
// //     title: 'Tomato basil',
// //     author: '@shelleypauls',
// //   },
// //   {
// //     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
// //     title: 'Sea star',
// //     author: '@peterlaster',
// //   },
// //   {
// //     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
// //     title: 'Bike',
// //     author: '@southside_customs',
// //     cols: 2,
// //   },
// ]; 