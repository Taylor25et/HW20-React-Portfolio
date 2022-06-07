import React, { Component } from "react";
import CloseIcon from "@mui/icons-material/Close";

//old working with style package
// import { withStyles } from "@material-ui/core/styles";


import { withStyles } from "@mui/material/styles";
import {
  Avatar,
  Grow,
  Button,
  CardHeader,
  Card,
  Dialog,
  Divider,
  CardMedia,
  CardActions,
  CardContent,
  IconButton,
  DialogTitle,
  DialogContent,
  Grid,
  Typography,
  ListItemAvatar,
  ListItemText,
  ListItem,
} from "@mui/material";

const styles = (theme) => ({
  listItem: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      width: "100vw",
    },
  },
  cardImage: {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  dialogTitle: {
    display: "flex",
    alignItems: "center",
  },
  dialogContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  closeIcon: {
    width: 32,
    height: 32,
  },
  avatar: {
    width: 72,
    height: 72,
  },
  card: {
    maxWidth: 450,
    padding: 10,
    margin: 16,
    height: "100%",
  },
  gridItem: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
});

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDialogOpen: false,
    };
  }

  toggleDialog() {
    const { isDialogOpen } = this.state;
    this.setState({ isDialogOpen: !isDialogOpen });
  }

  render() {
    const {
      title,
      iconSrc,
      cardText,
      cardImage,
      subtitle,
      classes,
      isHosted,
      githubLink,
      hostedLink,
    } = this.props;
    const { isDialogOpen } = this.state;
    return (
      <div>
        <ListItem
          className={classes.listItem}
          button
          divider
          onClick={() => this.toggleDialog()}
        >
          <ListItemAvatar>
            <Avatar className={classes.avatar} src={iconSrc}>
              {title.charAt(0)}
            </Avatar>
          </ListItemAvatar>

          <ListItemText
            primaryTypographyProps={{ component: "h5", variant: "h5" }}
            secondary={subtitle}
          >
            {title}
          </ListItemText>

          <Dialog open={isDialogOpen} TransitionComponent={Grow} fullScreen>
            <DialogTitle
              className={classes.dialogTitle}
              disableTypography={true}
            >
              <IconButton>
                <CloseIcon className={classes.closeIcon} />
              </IconButton>
              <Typography component="h5" variant="h5">
                Project Details
              </Typography>
            </DialogTitle>

            <Divider />

            <DialogContent className={classes.dialogContent}>
              <div>
                <img className={classes.cardImage} src={cardImage} />
                <Typography component="h4" variant="h4">
                  {title}
                </Typography>
                <Typography variant="subtitle2">{cardText}</Typography>
              </div>
              <div>
                <Button
                  fullWidth
                  variant="outlined"
                  component="a"
                  href={githubLink}
                  target="blank"
                >
                  View GitHub Repository
                </Button>
                <Button
                  fullWidth
                  variant="outlined"
                  component="a"
                  href={hostedLink}
                  target="blank"
                  disabled={!isHosted}
                >
                  View Deployed Website
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </ListItem>

        <Grid
          className={classes.gridItem}
          item
          xs={12}
          style={{ height: "95%" }}
        >
          <Card className={classes.card}>
            <CardHeader
              avatar={<Avatar src={iconSrc}></Avatar>}
              title={title}
              subheader={subtitle}
              titleTypographyProps={{
                component: "h4",
                variant: "h4",
                align: "left",
              }}
            />

            <CardMedia
              className={classes.cardImage}
              image={cardImage}
              component="img"
            />

            <CardContent>{cardText}</CardContent>

            <CardActions>
              <Button
                fullWidth
                variant="outlined"
                component="a"
                href={hostedLink}
                target="blank"
                disabled={!isHosted}
              >
                View Deployed Website
              </Button>
              <Button
                fullWidth
                variant="outlined"
                component="a"
                href={githubLink}
                target="blank"
              >
                View GitHub Repository
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Project);
