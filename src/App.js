import './App.css';
import { ChakraProvider, ColorModeScript  } from '@chakra-ui/react';
import MainPageLayout from './Components/MainPageLayout';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import { extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/urbanist';

const theme = extendTheme({
  config: {
    initialColorMode: "dark", 
  },
  fonts: {
    heading: `'Urbanist Variable', sans-serif`,
    body: `'Urbanist Variable', sans-serif`,
  },
  styles: {
    global: (props) => ({
      "html, body": {
        bg: props.colorMode === "dark" ? "gray.770" : "gray.300",
      },
    }),
  },
})


function App() {

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <div style={{ height: "100vh" }}>
        <Routes>
          
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/*" element={<MainPageLayout />} />
      </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;
