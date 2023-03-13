import { createTheme} from "@mui/material/styles";


const theme = createTheme({
    palette: {
      primary: {
        main: '#06003D',
        mainOpac:'#06003D55',
        lighter:'#3F00D3',
        font: '#ffffff',
        fontlighter: '#999999',
        
      },
      themeWhite: {
        main:'#ffffff'
      },
      themeBlack: {
        main:'#000000'
      },
      secondary: {
        main:'#FBCAEF',
      },
      highlight: {
        main:'#00b9a3',
        darker:'#00786a'
      }

    }
  });


export default theme;