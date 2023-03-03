import {
  Box,
  Typography,
  AvatarGroup,
  Avatar,
  ImageList,
  ImageListItem,
  List,
  ListItemAvatar,
  ListItemText,
  ListItem,
  Divider
} from "@mui/material";
import React from "react";

const RightBar = () => {
  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: {
          xs: "none",
          sm: "none",
          md: "block",
        },
      }}
    >
      <Box position={"fixed"} width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={8}>
          <Avatar
            alt="Remy Sharp"
            src="https://add-groups.com/uploads/posts/2020-12/1607601445_dnevniki_znamenitostey_20201204_3.png"
          />
          <Avatar
            alt="Travis Howard"
            src="https://ic.pics.livejournal.com/humus/758313/34756235/34756235_original.jpg"
          />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar
            alt="Agnes Walker"
            src="https://mobimg.b-cdn.net/v3/fetch/80/8006af0c6487a590b5a41c1958ac0388.jpeg"
          />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar
            alt="Travis Howard"
            src="https://1.bp.blogspot.com/-vXq9lBsyi_M/WdblV-N0rBI/AAAAAAAAoYc/diHu66KggRMfEkICzJRYrZ7Ofgktr_dUgCLcBGAs/s1600/Natalia%2BDyer12.jpg"
          />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar
            alt="Agnes Walker"
            src="https://1.bp.blogspot.com/-vXq9lBsyi_M/WdblV-N0rBI/AAAAAAAAoYc/diHu66KggRMfEkICzJRYrZ7Ofgktr_dUgCLcBGAs/s1600/Natalia%2BDyer12.jpg"
          />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>

        <Typography
          variant="h6"
          fontWeight={100}
          sx={{
            mt: "10px",
          }}
        >
          Latest Photos
        </Typography>

        <ImageList cols={3} gap={5}>
          <ImageListItem>
            <img src="https://1.bp.blogspot.com/-vXq9lBsyi_M/WdblV-N0rBI/AAAAAAAAoYc/diHu66KggRMfEkICzJRYrZ7Ofgktr_dUgCLcBGAs/s1600/Natalia%2BDyer12.jpg" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://add-groups.com/uploads/posts/2020-12/1607601445_dnevniki_znamenitostey_20201204_3.png" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://ic.pics.livejournal.com/humus/758313/34756235/34756235_original.jpg" />
          </ImageListItem>
        </ImageList>

        <Typography
          variant="h6"
          fontWeight={100}
          sx={{
            mt: "10px",
          }}
        >
          Latest Corvestations
        </Typography>

        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://material-ui.com/static/images/avatar/1.jpg"
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
              <Avatar
                alt="Travis Howard"
                src="https://material-ui.com/static/images/avatar/2.jpg"
              />
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
              <Avatar
                alt="Cindy Baker"
                src="https://material-ui.com/static/images/avatar/3.jpg"
              />
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
