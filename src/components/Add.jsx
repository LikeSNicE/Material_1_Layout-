import React, { useState } from 'react';
import { Tooltip,Fab,Modal,Box, styled,Typography, Avatar,TextField, Stack,
ButtonGroup,Button} from '@mui/material';
import {Add as AddIcon} from '@mui/icons-material';
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

 const StyledModal = styled(Modal)({
   display: "flex",
   alignItems: "center",
   justifyContent: "center"
 });


 const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  margin: '10px 0'
 })

const Add = () => {

  const [open,setOpen] = useState(false);

  return (
    <div>
      <Tooltip
        onClick={() => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: {xs:"calc(50% - 25px)",md: 30}
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          bgcolor={"background.default"}
          color={"text.primary"}
          sx={{
            width: 400,
            height: 280,
            borderRadius: 5,
            padding: 3,
          }}
        >
          <Typography variant="h6" textAlign={"center"}>
            Create a post
          </Typography>
          <UserBox>
            <Avatar
              src="ttps://i.pinimg.com/originals/aa/85/6d/aa856d84bd22f62ab80f21a2a307c9f3.jpg"
              sx={{
                width: 30,
                height: 30,
                objectFit: "cover",
              }}
            />
            <Typography variant="span">Taylor Swift</Typography>
          </UserBox>
          <TextField
            id="outlined-multiline-flexible"
            label="What's on your mind?"
            multiline
            maxRows={4}
            sx={{
              margin: "10px 0",
              width: "100%",
            }}
          />
          <Stack direction="row" gap={1} mt={"10px"}>
            <EmojiEmotionsIcon color="secondary" />
            <AddPhotoAlternateIcon color="success" />
            <VideoCallIcon color="warning" />
          </Stack>

          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
            sx={{
              mt: "10px",
            }}
          >
            <Button>Post</Button>
            <Button
              sx={{
                width: "100px",
              }}
            >
              <CalendarMonthIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </div>
  );
};

export default Add;