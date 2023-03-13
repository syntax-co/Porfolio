import { Box, Button, Slider, Typography } from "@mui/material";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import React, { useEffect, useState, StrictMode} from "react";
import dynamic from "next/dynamic";
import theme from "@/themes/theme";

const Sketch = dynamic(
    () => import('react-p5').then((mod) => mod.default ),
    {ssr:false} 
)





const maxBranchSize = 100;
const angleLimits = [2,15];
const maxBranchScale = .7;
let cavasCleanup = false;
let attempts = 0;

var minSize = 3;
var canvasSize = [500,600];
var branchScale = .7;
var branchSize = 100; 
var branchAngle = (Math.PI/8.5);


const color = 'white';
const sketchBackground='#ffffff00';




const branch = (p5,size,inputAngle) => {
    
    p5.line(0, 0, 0,0-size);
    p5.translate(0,-size);
    
    const newAngle = inputAngle;
    if (size>minSize) {
        p5.push();
        p5.rotate(newAngle);
        branch(p5,size*branchScale,newAngle);
        p5.pop();
        
        p5.push();
        p5.rotate(-1*newAngle);
        branch(p5,size*branchScale,newAngle);
        p5.pop();
    }
    
}

const setup = (p5, canvasParentRef) => {
    
        p5.createCanvas(canvasSize[0],canvasSize[1], p5.WEBGL).parent(canvasParentRef);
        p5.background(sketchBackground);
        p5.frameRate(15);
    
}

const draw = (p5) => {
    p5.background(sketchBackground);
    p5.stroke(color);
    p5.translate(0,canvasSize[1]/2);
    branch(p5,branchSize,branchAngle);


    if (cavasCleanup) {
        p5.remove();
    }
}







const ValueSlider = ({minValue,maxValue,title,handle}) => {

    const [value,setValue] = useState(50);

    return(
        <Box sx={{width:'60%', margin:'5px',color:'white'}}>
            <Typography sx={{display:'flex',justifyContent:'center',}}>
                {title}
            </Typography>
            <Box sx={{display:'flex', alignItems:'center'}}>
                <Typography sx={{marginRight:'10px'}}>
                    {minValue}
                </Typography>
                <Slider color='themeWhite' value={value}  
                onChange={(event,newValue) => {
                    handle(newValue);
                    setValue(newValue);
                }} />
                <Typography sx={{marginLeft:'10px'}}>
                    {maxValue}
                </Typography>
            </Box>
        </Box>
    )

}



const Controller = ({smallScreen}) => {

    const handleOne = (newValue) => {
        branchSize = maxBranchSize * (newValue/100);
        
    }

    const handleTwo = (newValue) => {
        const newAngle = angleLimits[0] + ((angleLimits[1] - angleLimits[0]) * (newValue/100));
        branchAngle = (Math.PI/newAngle);
    }

    const handleThree = (newValue) => {
        branchScale = maxBranchScale * (newValue/100);
    }

    return(
        <Box sx={{width:smallScreen? '100%':'500px',height:'auto',display:'flex',
                  flexDirection:'column',alignItems:'center',
                  backgroundColor:"primary.lighter", borderTopRightRadius:'10px',
                  borderBottomLeftRadius:'10px',position:'relative'
                }}>
            
            <ValueSlider minValue={0} maxValue={maxBranchSize} title={'Branch Size'} handle={handleOne} />
            <ValueSlider minValue={angleLimits[0]} maxValue={angleLimits[1]} title={'Branch Angle'} handle={handleTwo} />
            <ValueSlider minValue={0} maxValue={maxBranchScale} title={'Branch Scale'} handle={handleThree} />

            <Box sx={{
                width:'100%',
                height:'100%',
                position:'absolute',
                top:'1vw',left:'1vw',backgroundColor:'primary.main',
                border:'1px solid white', borderTopRightRadius:'10px',
                borderBottomLeftRadius:'10px',
                zIndex:-1
            }} ></Box>
        </Box>
    )
}


const P5sketch = () => {

    return (
        <Box>
            <Sketch setup={setup} draw={draw} />
        </Box>
    )
}

const Fractal = () => {

    const [smallScreen, setSmallScreen] = useState(false);
    const [holderWidth, setHolderWidth] = useState(canvasSize[0])
    const minWidth = 1000

    const handleResize = () => {
        if (window.innerWidth <= minWidth) {
            setSmallScreen(true);
            
            if (window.innerWidth < canvasSize[0]) {
                canvasSize[0]=window.innerWidth*.9;
                setHolderWidth(window.innerWidth*.9);
                canvasSize[1]=350;
            }

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
        
        <ThemeProvider theme={theme}>
            <Box sx={{
                width:'100%',
                height:'100vh',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                overflow:'hidden'
            }}>
                
                <Box sx={{
                    width:smallScreen? '90%':'60%',
                    height:'100%',
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center',
                }}>
                    
                    <Box id='sketch-holder' 
                        sx={{
                            width:holderWidth,height:smallScreen? '60%':"70%", 
                            display:'flex',justifyContent:'center',
                            alignItems:'center',backgroundColor:'primary.lighter',
                            position:'relative', borderTopRightRadius:'10px',
                            borderBottomLeftRadius:'10px', marginBottom:'1.5vw'
                        }}
                    >
                        
                        <Sketch setup={setup} draw={draw} />
                        
                        
                        
                        <Box sx={{
                            width:'100%',
                            height:'100%',
                            position:'absolute',
                            top:'1vw',left:'1vw',backgroundColor:'primary.main',
                            border:'1px solid white', borderTopRightRadius:'10px',
                            borderBottomLeftRadius:'10px',
                            zIndex:-1
                        }} ></Box>
                    </Box>

                    <Controller smallScreen={smallScreen} />
                </Box>
            </Box>
        </ThemeProvider>
    )
}



export default Fractal;