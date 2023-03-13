import { Box } from "@mui/material";
import { motion } from "framer-motion";


// ██████╗  ██████╗ ██████╗ ██╗███████╗███████╗
// ██╔══██╗██╔═══██╗██╔══██╗██║██╔════╝██╔════╝
// ██████╔╝██║   ██║██║  ██║██║█████╗  ███████╗
// ██╔══██╗██║   ██║██║  ██║██║██╔══╝  ╚════██║
// ██████╔╝╚██████╔╝██████╔╝██║███████╗███████║
// ╚═════╝  ╚═════╝ ╚═════╝ ╚═╝╚══════╝╚══════╝
                                            
const Bodies = () => {

    const startOne = 360 * Math.random();
    const startTwo = 360 * Math.random();
    const startThree = 360 * Math.random();
    const startFour = 360 * Math.random();
  
    const Planet = ({size,parentSize}) => {
  
  
      return(
        <Box sx={{width:size,height:size, borderRadius:size/2,border:'1px solid white',position:'absolute',left:-1*(size/2),top:(parentSize)/2-(size-2),backgroundColor:'primary.main'}}>
  
        </Box>
      )
    }
  
  
  
    return(
      <Box sx={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',position:'relative'}}>
        
        <Box sx={{position:'absolute',width:500,height:500}} >
  
          <Box sx={{width:'100%',height:'100%',borderRadius:'250px',border:'1px solid white', position:'absolute'}}></Box>
  
          <motion.div style={{width:'100%',height:'100%',borderRadius:'250px', position:'absolute'}}
            initial={{rotate:startOne}}
            animate={{rotate:startOne+360,transition:{duration:20,repeat:'Infinity',ease:'linear'}}}
          >
            <Planet size={80} parentSize={500}/>
          </motion.div>
  
          <motion.div style={{width:'100%',height:'100%',borderRadius:'250px', position:'relative',transform:`rotate(${360*Math.random()}deg)`}}
            initial={{rotate:startTwo}}
            animate={{rotate:startTwo + 360 ,transition:{duration:50,repeat:'Infinity',ease:'linear'}}}
          >
            <Planet size={50} parentSize={500}/>
          </motion.div>
  
        </Box>
  
  
        <Box sx={{position:'absolute',width:300,height:300}} >
  
          <Box sx={{width:'100%',height:'100%',borderRadius:'250px',border:'1px solid white', position:'absolute'}}></Box>
  
          <motion.div style={{width:'100%',height:'100%', position:'absolute'}}
            initial={{rotate:startThree}}
            animate={{rotate:startThree+360,transition:{duration:10,repeat:'Infinity',ease:'linear'}}}
          >
            <Planet size={40} parentSize={300}/> 
          </motion.div>
  
          <motion.div style={{width:'100%',height:'100%', position:'relative',transform:`rotate(${360*Math.random()}deg)`}} 
            initial={{rotate:startFour}}
            animate={{rotate:startFour+360 ,transition:{duration:20,repeat:'Infinity',ease:'linear'}}}
          >
            <Planet size={50} parentSize={300}/>
          </motion.div>
  
        </Box>
        
  
      </Box>
    )
  }


  export default Bodies;