// https://mui.com/material-ui/react-app-bar/
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";


export default function Navigation({ setPage }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome
          </Typography>
          <Button color="inherit">
            <a href="#about" onClick={() => setPage("about")}>
              About Me
            </a>
          </Button>
          <Button color="inherit">
            <a href="#portfolio" onClick={() => setPage("Portfolio")}>
              Portfolio
            </a>
          </Button>
          <Button color="inherit">
            <a href="#contact" onClick={() => setPage("Contact")}>
              Contact
            </a>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
