import { Mail, Notifications, Pets } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";

import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Arun
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search...." />
        </Search>
        <Icons>
          <Badge badgeContent={2} color="error">
            <Mail />
          </Badge>

          <Badge badgeContent={1} color="error">
            <Notifications />
          </Badge>

          <Avatar
            sx={{ width: 30, height: 25 }}
            src="https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg"
            onClick={(e) => setOpen(true)}
          />
        </Icons>

        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 25 }}
            src="https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg"
          />
          <Typography variant="Span">John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile </MenuItem>
        <MenuItem>My account </MenuItem>
        <MenuItem>Logout </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default NavBar;
