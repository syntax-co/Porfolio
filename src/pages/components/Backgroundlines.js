import { useState,useEffect } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";


// ██╗     ██╗███╗   ██╗███████╗███████╗
// ██║     ██║████╗  ██║██╔════╝██╔════╝
// ██║     ██║██╔██╗ ██║█████╗  ███████╗
// ██║     ██║██║╚██╗██║██╔══╝  ╚════██║
// ███████╗██║██║ ╚████║███████╗███████║
// ╚══════╝╚═╝╚═╝  ╚═══╝╚══════╝╚══════╝
                                     
const Lines = ({radius,move}) => {

    const density = 10;
    const angle = 45;
    const sizeLimit = 900
    const [finalLines, setFinalLines]= useState([]);
  
    
  
    const addLine = () => {
  
      const unit = sizeLimit/((sizeLimit/100)*density)
      const count = sizeLimit/unit
      
      const lineList = []; 
  
      for (var i=-1*count; i<count+1; i++) {   
        lineList.push(
          <Line key={i} height={i*50} /> 
        );
      }
  
      setFinalLines(lineList);
  
    }
  
    useEffect( () => {
      
      addLine();
  
  
    },[])
  
  
  
    const Line = ({height}) => {
      const [moves, setMoves] = useState([]);
  
  
  
      useEffect(() => {
        const curve = move? [.31,.91,.53,.31]: [0,0,0,0];
        const premoves = [];
  
        curve.forEach((item) => {
          premoves.push(
            height+(50*item)
          )
        })
  
        setMoves(premoves);
  
  
      },[])
      
      
  
      return( 
        <motion.div style={{
          position:'absolute',
          rotate:'45deg',
          }}
          initial={{translateY:0}}
          animate={{translateY:moves,
          transition:{
            repeat:'Infinity',
            duration:10
          }
          }}
        >
          <Box sx={{
            height:'5px',
            width:'3000px',
            backgroundColor:'highlight.main',
            
          }}></Box>
        </motion.div>
      )
    }
  
    return(
      
      <Box sx={{
        overflow:'hidden',
        position:'absolute',
        zIndex:-1,
        height:'100%',
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:radius && radius
      }}>
        
        <Box sx={{position:'relative',width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',}} >
          {
            finalLines
          }
        </Box>
  
  
      </Box>
    )
  }

  export default Lines;