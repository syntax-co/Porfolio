import { Box, Typography } from "@mui/material";
import { NorthEast } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import projectData from '../json_files/project_data.json';
import Lines from "./components/Backgroundlines";


const ProjectItem = ({smallScreen,projectName}) => {
    const [hovering,setHovering] = useState(false);
   

    return(
        <Box sx={{
            width:smallScreen? '90%':'45%',
            height:'40%',
            borderBottomLeftRadius:'10px',
            borderTopRightRadius:'10px',
            position:'relative',
            marginTop:'10%',
            marginLeft:'auto',
            marginRight:'auto',
            cursor:'pointer',
            alignItems:'center',
            justifyContent:'center',
            display:'flex',
            border:'3px solid #3F00D3',
			WebkitTapHighlightColor:'transparent'
        }}
        onMouseEnter={() => {
            setHovering(true);
        }}
        onMouseLeave={() => {
            setHovering(false);
        }}

        onTouchStart={() => {
            setHovering(true);
        }}

        onTouchEnd={() => {
            setHovering(false);
        }}

        >
            
            <Box sx={{
                width:'100%',
                height:'100%',
                border:'1px solid white',
                position:'absolute',
                borderBottomLeftRadius:'10px',
                borderTopRightRadius:'10px',
                zIndex:-1,
                top:smallScreen? '2vw':'1vw',
                left:smallScreen? '2vw':'1vw'
            }}>

            </Box>
            <Box sx={{
                width:'100%',
                height:'100%',
                position:'relative',
                background:`url(${projectData[projectName]['imagepath']})`,
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat',
                backgroundPosition:'center',
                borderBottomLeftRadius:'10px',
                borderTopRightRadius:'10px',
            }}>


                
            </Box>


            <motion.div 
                style={{
                    width:'100%',
                    height:'20%',
                    position:'absolute',
                    bottom:0
                }}
                initial={{opacity:0}}
                animate={{opacity:hovering? 1:0}}
            >
                <Box sx={{
                    width:'100%',
                    height:'100%',
                    backgroundColor:'#050505aa',
                    position:'relative',
                    color:'white',
                    display:'flex',
                    alignItems:'center'
                }}>

                    <Typography sx={{
                        fontFamily:'montserrat',
                        fontSize:'calc(16px + 1vw)',
                        marginLeft:'2%'
                    }}>
                        {projectData[projectName]['title']}
                    </Typography>

                    <Box sx={{
                        height:'80%',
                        width:'5%',
                        position:'absolute',
                        right:0,
                        marginRight:'2%'
                        }}>
                        <NorthEast sx={{
                            width:'100%',
                            height:'100%'
                        }} />
                    </Box>

                </Box>
            </motion.div>
            
            
        </Box>
    )
}


const Projects = () => {

    const [smallScreen, setSmallScreen] = useState(false);
    const minWidth = 1000;

    const handleResize = () => {
        if (window.innerWidth <= minWidth) {
            setSmallScreen(true);
        } else {
            setSmallScreen(false);
        }
    }


    useEffect(() => {
        handleResize();
        window.addEventListener('resize',handleResize);
        

        return () => {
            window.removeEventListener('resize',handleResize);
        }
    },[])


    return(
        <Box sx={{
            width:'100%',
            height:'100vh',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            marginBottom:smallScreen? '100%':'10%'
        }}>

            <Box sx={{
                width:smallScreen? '95%':'80%',
                height:smallScreen? '95%':"80%",
                justifyContent:'center',
                display:'flex',
                flexWrap:'wrap'
            }}>

                <ProjectItem smallScreen={smallScreen} projectName='ccc' />
                <ProjectItem smallScreen={smallScreen} projectName='wsb' />
                <ProjectItem smallScreen={smallScreen} projectName='portfolio' />

            </Box>


        </Box>
    )
}

export default Projects;