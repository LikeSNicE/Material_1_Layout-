import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import SiderBar from "./components/SiderBar";
import NavBar from "./components/NavBar";
import { Box, Stack,createTheme,ThemeProvider } from "@mui/material";
import Add from "./components/Add";
import { useState } from "react";


function App() {

  const [mode,setMode] = useState('light')

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });


  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <NavBar />
        <Stack direction={"row"} justifyContent={"space-between"} spacing={2}>
          <SiderBar mode={mode} setMode={setMode}/>
          <Feed />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
