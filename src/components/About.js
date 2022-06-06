// export default function About(){
//     return (
//         <Section>
//         <h1>About Me</h1>
//             <img src="./assets/pictures/avatar.jpg" alt="A avatar photo of me">
//             <Section>
//                 <h2>TAYLOR THOMPSON  Back-end Developer</h2>
//                 <p>Welcome to my portfolio.</p>
//                 <br>
//                 <p>Languages: HTML, CSS, JavaScript</p>
//                 <p>Email: taylor25et@gmail.com</p>
//                 <p>Total Experience: 1 Year</p>
//                 <p>I am a junior software developer who attended the coding bootcamp program at the University of Washington</p>
//                 <br>
//                 <br>
//                 <a href="https://www.linkedin.com/in/taylor-thompson-545073197">Check Out My LinkedIn!</a>
//                 <a href="https://github.com/Taylor25et">Check Out My GitHub!</a>
//                 <a href="https://docs.google.com/document/d/1m2fAXdY5F4NJlIx-xmr_2Ya04ypjBr80/edit?usp=sharing&ouid=104548712702009630910&rtpof=true&sd=true">Check Out My Resume!</a>
//             </Section>
//         </Section>

//     )
// }

import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
// import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ChromeReaderModeIcon from "@mui/icons-material/ChromeReaderMode";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function About(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 1000 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="About Me"
        // subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          A junior Full Stack Developer developer who attended the coding bootcamp
          program at the University of Washington.

          Let's work together!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          component="a"
          href="https://github.com/Taylor25et"
          aria-label="My GitHub Page"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/taylor-thompson-545073197"
          aria-label="My LinkedIn Page"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://docs.google.com/document/d/1m2fAXdY5F4NJlIx-xmr_2Ya04ypjBr80/edit?usp=sharing&ouid=104548712702009630910&rtpof=true&sd=true"
          aria-label="My Resume"
        >
          <ChromeReaderModeIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph><strong>SUMMARY OF QUALIFICATIONS</strong></Typography>
        <ul className="list">
            <li>Fluid understanding of multiple programming languages, including
            React, JavaScript, HTML, and CSS.</li>
            <li>Excellent communications skills. Adept at building strong working
            relationships with coworkers and management.</li>
            <li>Talented problem solver able to think “outside the box.”</li>
            <li>Proven background leading teams in stressful, deadline-oriented
            environments.</li>
            <li>Dry Cough</li>
        </ul>
        <Typography paragraph><strong>Languages: </strong>HTML5, CSS3, JavaScript, jQuery, Express.js, React.js, Node.js, MongoDB, MySQL</Typography>
          <Typography paragraph>
            f
          </Typography>
          <Typography paragraph>
            g
          </Typography>
          <Typography>
            9
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
