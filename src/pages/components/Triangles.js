import { Box } from "@mui/material";


// ████████╗██████╗ ██╗ █████╗ ███╗   ██╗ ██████╗ ██╗     ███████╗
// ╚══██╔══╝██╔══██╗██║██╔══██╗████╗  ██║██╔════╝ ██║     ██╔════╝
//    ██║   ██████╔╝██║███████║██╔██╗ ██║██║  ███╗██║     █████╗  
//    ██║   ██╔══██╗██║██╔══██║██║╚██╗██║██║   ██║██║     ██╔══╝  
//    ██║   ██║  ██║██║██║  ██║██║ ╚████║╚██████╔╝███████╗███████╗
//    ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝╚══════╝
                                                               
const Triangle = ({size,width}) => {

    var tSize =  size? size:75;
    var bWidth = width? width:2;
  
    return(
      <Box sx={{
        width:0,
        height:0, 
        borderRight:`${tSize}px solid white`,
        borderBottom:`${tSize}px solid transparent`, 
        borderTop:`${tSize}px solid transparent`,
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-start',
        position:'relative',
        rotate:'45deg'
        }}>
        
          <Box sx={{
            width:0,
            height:0, 
            borderRight:`${size-(bWidth*2)}px solid #06003d`,
            borderBottom:`${size-(bWidth*2)}px solid transparent`, 
            borderTop:`${size-(bWidth*2)}px solid transparent`,
            position:'absolute',
            left:3
            }}>
  
          </Box>
  
      </Box>
    )
  }

export default Triangle;