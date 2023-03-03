import { AppBar, styled, Toolbar, Typography, Box, InputBase,Badge, Avatar,Menu,MenuItem} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from '@mui/icons-material/Notifications';
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
  alignItems: "center",
  gap: '20px',
  [theme.breakpoints.up("sm")] : { 
    display: "flex"
  }
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const NavBar = () => {

  const [isOpen,setIsOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          Likes NicE DEV
        </Typography>
        <PetsIcon
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
          }}
        />
        <Search>
          <InputBase placeholder="search ... " />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon color="white" />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            onClick={(e) => setIsOpen(true)}
            src="https://pbs.twimg.com/media/B37e5n8IQAA8xC0?format=png&name=900x900"
            sx={{
              width: "30px",
              height: "30px",
              objectFit: "cover",
            }}
          />
        </Icons>
        <UserBox>
          <Avatar
            onClick={(e) => setIsOpen(true)}
            src="https://i.pinimg.com/originals/aa/85/6d/aa856d84bd22f62ab80f21a2a307c9f3.jpg"
            sx={{
              width: "30px",
              height: "30px",
              objectFit: "cover",
            }}
          />
          <Typography variant="p">Taylor</Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
        id="basic-menu"
        aria-aria-labelledby="demo-positioned-button"
        open={isOpen}
        onClose={(e) => setIsOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          mt: '2em',
          
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default NavBar;
