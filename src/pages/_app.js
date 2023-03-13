
import Navbar from './components/Navbar'
import '@/styles/globals.css'
import { Box } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import theme from '../themes/theme.js';
import '../styles/navbar.css';


export default function App({ Component, pageProps }) {

  return (
    <ThemeProvider theme={theme}>
      <Box id='app-main-body' sx={{position:'relative',zIndex:0}}>
        <Navbar />
        <Component {...pageProps} />
      </Box>
    </ThemeProvider>
  ) 
}
