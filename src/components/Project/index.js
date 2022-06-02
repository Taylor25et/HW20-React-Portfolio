import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

import MuiImageSlider from "mui-image-slider";
const images = [
  "https://github.com/Taylor25et/HW14-Tech-Blog/blob/main/public/assets/images/home.png",
  "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
  "https://homepages.cae.wisc.edu/~ece533/images/baboon.png",
  "https://homepages.cae.wisc.edu/~ece533/images/barbara.png",
];

<MuiImageSlider images={images} />;

export default function Portfolio(prop) {
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Code Quiz',
      author: '@bkristastucchio',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: 'https://github.com/Taylor25et/Project-2-Travel-App/raw/main/assets/home-page.png',
      title: 'Travel Application',
      author: 'https://travalotpj2.herokuapp.com/',
      //https://github.com/Taylor25et/Project-2-Travel-App
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Day Planner',
      author: 'https://taylor25et.github.io/HW5-Day-Planner/',
      //https://github.com/Taylor25et/HW5-Day-Planner
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Travel App',
      author: '@nolanissac',
      cols: 2,
    }
  //   {
  //     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
  //     title: 'Hats',
  //     author: '@hjrc33',
  //     cols: 2,
  //   },
  //   {
  //     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
  //     title: 'Honey',
  //     author: '@arwinneil',
  //     rows: 2,
  //     cols: 2,
  //     featured: true,
  //   },
  //  
  ]; 
  itemData();
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Portfolio</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
