import React from "react";
import Feed from "./components/Feed";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import RightBar from "./components/RightBar";
import Add from "./components/Add";
import { Box, Stack } from "@mui/material";

const App = () => {
  return (
    <Box>
      <NavBar />
      <Stack direction="row" spacing={2} justifyContent="space-evenly">
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
      <Add />
    </Box>
  );
};

export default App;
