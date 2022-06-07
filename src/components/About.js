import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
  const styles = {
    largeIcon: {
      width: 60,
      height: 60,
    },
    list: {
      textAlign: "left",
    },
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", textAlign: "center" }}
    >
      <Card sx={{ maxWidth: 1000 }}>
        <CardHeader title="About Me" subheader="Full Stack Developer" />
        <CardMedia
          component="img"
          height="500"
          image="https://github.com/Taylor25et/Updated_Portfolio_Page/blob/main/assets/pictures/avatar.jpg?raw=true"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body5" color="text.secondary">
            <strong>
              “Programmer: A machine that turns coffee into code.”
            </strong>
          </Typography>
          <Typography>...</Typography>
          <Typography variant="body4" color="text.secondary">
            A junior Full Stack Developer developer who attended the coding
            bootcamp program at the University of Washington. Let's work
            together!
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            component="a"
            href="https://github.com/Taylor25et"
            aria-label="My GitHub Page"
          >
            <GitHubIcon style={styles.largeIcon} />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/taylor-thompson-545073197"
            aria-label="My LinkedIn Page"
          >
            <LinkedInIcon style={styles.largeIcon} />
          </IconButton>
          <IconButton
            component="a"
            href="https://docs.google.com/document/d/1m2fAXdY5F4NJlIx-xmr_2Ya04ypjBr80/edit?usp=sharing&ouid=104548712702009630910&rtpof=true&sd=true"
            aria-label="My Resume"
          >
            <ChromeReaderModeIcon style={styles.largeIcon} />
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
            <Typography paragraph>
              <strong>SUMMARY OF QUALIFICATIONS</strong>
            </Typography>
            <ul style={styles.list} className="list">
              <li>
                Fluid understanding of multiple programming languages, including
                React, JavaScript, HTML, and CSS.
              </li>
              <li>
                Excellent communications skills. Adept at building strong
                working relationships with coworkers and management.
              </li>
              <li>Talented problem solver able to think “outside the box.”</li>
              <li>
                Proven background leading teams in stressful, deadline-oriented
                environments.
              </li>
            </ul>
            <Typography paragraph>
              <strong>Languages: </strong>HTML5, CSS3, JavaScript, jQuery,
              Express.js, React.js, Node.js, MongoDB, MySQL
            </Typography>
            <Typography paragraph></Typography>
            <Typography paragraph></Typography>
            <Typography></Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
