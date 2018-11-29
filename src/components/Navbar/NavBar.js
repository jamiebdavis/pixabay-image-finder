import React from "react";
import AppBar from "material-ui/AppBar";
import { deepPurple50 } from "material-ui/styles/colors";

const accent = deepPurple50;

const NavBar = () => (
  <AppBar
    style={{ background: "#2E3B55", textAlign: "center" }}
    title="Pixabay Image Finder"
  />
);

export default NavBar;
