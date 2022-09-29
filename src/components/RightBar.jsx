import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const RightBar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          online Friends
        </Typography>
        <AvatarGroup max={4}>
          jpg
          <Avatar
            alt="Remy Sharp"
            src="https://i.pinimg.com/originals/76/46/a9/7646a94792eeb2b072335e16dd7c9f11.png"
          />
          <Avatar
            alt="Travis Howard"
            src="https://upload.wikimedia.org/wikipedia/en/d/d6/Superman_Man_of_Steel.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://i.pinimg.com/236x/b5/a9/0a/b5a90a2973d2a713ccdb5ae3377c4064.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://editzstock.com/wp-content/uploads/2022/06/Little-Krishna-hd-3d-wallpaper-976x1024.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4YvYSh-Kbpjz7aoBI8xI_Eu0bljhI8lKwiw&usqp=CAU"
          />
        </AvatarGroup>
        <Typography
          variant="h6"
          fontWeight={100}
          marginTop={2}
          marginBottom={2}
        >
          Latest Photos
        </Typography>

        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://i.pinimg.com/originals/bd/61/7e/bd617eb193ba240156809c70add1bb7c.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://w0.peakpx.com/wallpaper/784/364/HD-wallpaper-little-krishna-kanaiya-kanha-thumbnail.jpg"
              alt=""
            />
          </ImageListItem>

          <ImageListItem>
            <img src="https://wallpaperaccess.com/full/1105026.jpg" alt="" />
          </ImageListItem>

          <ImageListItem>
            <img src="https://wallpaperaccess.com/full/2080104.jpg" alt="" />
          </ImageListItem>

          <ImageListItem>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPM1BKYsmr7Tcawc6DRREDzKfXRteG0DyOgGSuNtRY00vvCk6MbFec9LhJ4py0a2FXS70&usqp=CAU"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} marginTop={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhj3gIqZK6qPuFRWTYUjGQzkSt5RHahG8NAQ&usqp=CAU"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default RightBar;
