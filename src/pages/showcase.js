import { Box } from "@mui/material";
import { NorthEast } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';

import caseData from '../json_files/showcase_data.json';



const MenuItem = ({caseItem, smallScreen}) => {

    const title= caseData[caseItem]['title'];
    const path = caseData[caseItem]['path'];

    return(
        <Box sx={{
            width: smallScreen? '100%':'90%',
            height:'100px',
            margin:'15px',
            position:'relative',
            margin:'2vw'
            }}>

            <motion.div style={{
                width:'100%',height:'100%',
                position:'relative',zIndex:1,
                cursor:'pointer'
            }}
            whileHover={{translate:'-10px -10px'}}
            onClick={() => {
                window.location.href = path;
            }}
            >
                <Box sx={{
                    width:'100%',
                    height:'100%',
                    backgroundColor:'primary.lighter',
                    borderBottomLeftRadius:'10px',
                    borderTopRightRadius:'10px',
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                    justifyContent:'center',
                    position:'relative'
                }}>
                    
                    <Box sx={{
                        width:'90%',
                        position:'relative',
                        display:'flex'
                    }}>
                        <Box sx={{
                            color:'white',
                            fontFamily:'montserrat',
                            fontSize:'calc(20px + 1vw)',
                            
                        }}>
                            {title}
                        </Box>

                        <Box sx={{
                            height:smallScreen ?  '7vw':'3vw',
                            width:smallScreen ?  '7vw':'3vw',
                            color:'white',
                            position:'absolute',
                            right:0
                        }}>
                            <NorthEast sx={{
                                width:'100%',
                                height:'100%'
                            }} />
                        </Box>
                    </Box>
                    <Box sx={{
                        width:'90%',
                        height:'5px',
                        backgroundColor:'white',
                        marginTop:'1%',
                        borderRadius:'5px'
                    }}></Box>

                </Box>
            </motion.div>
            
            <Box sx={{
                width:'100%',
                height:'100%',
                backgroundColor:'primary.main',
                border:'1px solid white',
                position:'absolute', top:'1vw',left:'1vw',
                borderBottomLeftRadius:'10px',
                borderTopRightRadius:'10px'
            }}>

            </Box>
            

        </Box>
    )
}

const ShowcaseMenu = ({smallScreen}) => {

    return(
        <Box sx={{
            width:'80%',height:'100%',
            display:'flex',alignItems:'center',
            justifyContent:'center',
            
        }}>
            <Box id='project-menu' sx={{
                width:'100%',height:'85%',
                position:'relative', gap:'10px',
                
            }}>

                <MenuItem caseItem='fractal' smallScreen={smallScreen} />
                <MenuItem caseItem='gol' smallScreen={smallScreen} />
                <MenuItem caseItem='neumorphism' smallScreen={smallScreen} />
                <MenuItem caseItem='splineRocket' smallScreen={smallScreen} />
                
            </Box>
        </Box>
    )
}





const Showcase = () => {

    const [smallScreen, setSmallScreen] = useState(false);
    const minWidth = 1000

    const handleResize = () => {
        if (window.innerWidth <= minWidth) {
        setSmallScreen(true);
        } else {
        setSmallScreen(false);
        }
    }


    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);


        return () => {
        window.removeEventListener('resize', handleResize);
        }
    },[])

    return(
        <Box sx={{
            width:'100%',height:'94vh',
            position:'relative',
        }}>

            <Box id='showcase-main-body' sx={{
                width:'100%',height:'100%',
                background:'url(./images/patterns-top.svg)',
                backgroundRepeat:'no-repeat', backgroundPosition:'center',
                backgroundSize:'cover', display:'flex',
                alignItems:'center',justifyContent:'center',position:'relative',
                overflow:'scroll'
            }}>
                
                    <ShowcaseMenu smallScreen={smallScreen} />   
                
            </Box>

        </Box>
    )
}

export default Showcase;
