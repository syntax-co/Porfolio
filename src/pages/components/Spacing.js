import { Box } from "@mui/material";
import {motion} from 'framer-motion';



// ███████╗███████╗██████╗ ███████╗██████╗ 
// ██╔════╝██╔════╝██╔══██╗██╔════╝██╔══██╗
// ███████╗█████╗  ██████╔╝█████╗  ██████╔╝
// ╚════██║██╔══╝  ██╔═══╝ ██╔══╝  ██╔══██╗
// ███████║███████╗██║     ███████╗██║  ██║
// ╚══════╝╚══════╝╚═╝     ╚══════╝╚═╝  ╚═╝
                                        

const Spacing = () => {

    const Seper = ({length}) => {
  
      return(
        <motion.div style={{width:length}}
          initial={{opacity:0}}
          whileInView={{opacity:1}}
        >
          <Box sx={{height:'5px',backgroundColor:'white',borderRadius:'10px',margin:'8px'}} >
  
          </Box>
        </motion.div>
      )
    }
  
    return(
        <Box sx={{width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',margin:'5px'}} >
  
          <Seper length={'20%'} />
          <Seper length={'40%'} />
          <Seper length={'90%'} />
          <Seper length={'40%'} />
          <Seper length={'20%'} />
  
        </Box>
    )
  
  }


  export default Spacing;