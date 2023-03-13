
import { useEffect, useState, useRef } from "react"
import chroma from "chroma-js"
import { ChromePicker } from "react-color";
import ClickAwayListener from "react-click-away-listener";
import {isMobile} from 'react-device-detect';
import { Box, Slider, Typography } from "@mui/material";
import { display } from "@mui/system";




//  ██████╗     ██████╗ ██╗███████╗██████╗ ██╗      █████╗ ██╗   ██╗
// ██╔═══██╗    ██╔══██╗██║██╔════╝██╔══██╗██║     ██╔══██╗╚██╗ ██╔╝
// ██║   ██║    ██║  ██║██║███████╗██████╔╝██║     ███████║ ╚████╔╝ 
// ██║   ██║    ██║  ██║██║╚════██║██╔═══╝ ██║     ██╔══██║  ╚██╔╝  
// ╚██████╔╝    ██████╔╝██║███████║██║     ███████╗██║  ██║   ██║   
//  ╚═════╝     ╚═════╝ ╚═╝╚══════╝╚═╝     ╚══════╝╚═╝  ╚═╝   ╚═╝   
                                      
const ObjectLight = ({direction,active,setDirection,mode}) => {

    var lightDirection =direction ? direction:'b-left';
    
    return(
        <Box sx={{
            width:'50px',
            height:'50px',
            border:`1px solid ${mode=='light'? 'white':'black'}`,
            borderBottomLeftRadius:lightDirection=='t-right' && '50px',
            borderBottomRightRadius:lightDirection=='t-left' && '50px',
            borderTopLeftRadius:lightDirection=='b-right' && '50px',
            borderTopRightRadius:lightDirection=='b-left' && '50px',
            position:'absolute',
            top: (lightDirection=='t-left' || lightDirection=='t-right') && 0,
            bottom: (lightDirection=='b-left' || lightDirection=='b-right') && 0,
            left: (lightDirection=='t-left' || lightDirection=='b-left') && 0,
            right: (lightDirection=='b-right' || lightDirection=='t-right') && 0,
            backgroundColor:active? '#ebeb34':'',
            cursor:'pointer'
        }}
            onClick={() => {
                setDirection(direction);
            }}
        >

        </Box>
    )
}


const ObjectDisplay = ({background,shadow,size,radius,lightDirection,setDirection,mode,windowSize}) => {

    

    return(
        <Box sx={{
            width:'100%',
            height:'100%',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
        }}>

            <Box sx={{
                width:windowSize + 'px',
                height:windowSize + 'px',
                position:'relative',
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
            }}>


                <ObjectLight direction='t-left' setDirection={setDirection} active={lightDirection=='t-left'? true:false} mode={mode} />
                <ObjectLight direction='t-right' setDirection={setDirection} active={lightDirection=='t-right'? true:false} mode={mode} />
                <ObjectLight direction='b-left' setDirection={setDirection} active={lightDirection=='b-left'? true:false} mode={mode} />
                <ObjectLight direction='b-right' setDirection={setDirection} active={lightDirection=='b-right'? true:false} mode={mode} />


                <Box sx={{
                    width:size,
                    height:size,
                    boxShadow:shadow,
                    background:background,
                    borderRadius:radius,
                }}>

                </Box>


            </Box>
        </Box>
    )
}


// ███████╗██╗     ██╗██████╗ ███████╗██████╗ 
// ██╔════╝██║     ██║██╔══██╗██╔════╝██╔══██╗
// ███████╗██║     ██║██║  ██║█████╗  ██████╔╝
// ╚════██║██║     ██║██║  ██║██╔══╝  ██╔══██╗
// ███████║███████╗██║██████╔╝███████╗██║  ██║
// ╚══════╝╚══════╝╚═╝╚═════╝ ╚══════╝╚═╝  ╚═╝
                                           
const PanelSlider = ({label,value,setValue,min,max,step,mode,unit}) => {

    return(
        <Box sx={{
            display:'flex',
            color:mode=='light'? 'white':'black',
            marginTop:'1.5%',
            marginBottom:'1.5%'
        }}>
            <Typography sx={{
                marginRight:'2%',
                fontFamily:'montserrat',
                fontSize:'calc(16px + .4vw)'
            }}>
                {label}
            </Typography>
            <Slider 
                color={mode=='light'? 'themeWhite':'themeBlack'} 
                value={value}
                valueLabelDisplay='auto'
                min={min}
                max={max}
                step={step? step:1}
                valueLabelFormat={value+(unit? unit:'')}
                onChange={(event,newValue) => {
                    setValue(newValue);
                }}
            />
        </Box>
    )
}



// ████████╗    ██████╗ ██╗   ██╗████████╗████████╗ ██████╗ ███╗   ██╗
// ╚══██╔══╝    ██╔══██╗██║   ██║╚══██╔══╝╚══██╔══╝██╔═══██╗████╗  ██║
//    ██║       ██████╔╝██║   ██║   ██║      ██║   ██║   ██║██╔██╗ ██║
//    ██║       ██╔══██╗██║   ██║   ██║      ██║   ██║   ██║██║╚██╗██║
//    ██║       ██████╔╝╚██████╔╝   ██║      ██║   ╚██████╔╝██║ ╚████║
//    ╚═╝       ╚═════╝  ╚═════╝    ╚═╝      ╚═╝    ╚═════╝ ╚═╝  ╚═══╝
                                                                   
const TypeButton = ({label,btype,setBtype,mode}) => {

    return(
        <Box sx={{
            width:'20%',
            height:'50px',
            border:`1px solid ${mode=='light'? 'white':'black'}`,
            borderRadius:'10px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            fontSize:'calc(16px + .5vw)',
            fontFamily:'montserrat',
            cursor:'pointer',
            margin:'auto',
            backgroundColor:btype == label? (mode=='light'? 'primary.lighter':'#9732a8'):''
        }}
            onClick={() => {
                setBtype(label);
            }}
        >
            {label}
        </Box>
    )
}




// ███╗   ███╗ █████╗ ██╗███╗   ██╗     █████╗ ██████╗ ██████╗ 
// ████╗ ████║██╔══██╗██║████╗  ██║    ██╔══██╗██╔══██╗██╔══██╗
// ██╔████╔██║███████║██║██╔██╗ ██║    ███████║██████╔╝██████╔╝
// ██║╚██╔╝██║██╔══██║██║██║╚██╗██║    ██╔══██║██╔═══╝ ██╔═══╝ 
// ██║ ╚═╝ ██║██║  ██║██║██║ ╚████║    ██║  ██║██║     ██║     
// ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝    ╚═╝  ╚═╝╚═╝     ╚═╝     
                                                            
const Morph = () => {

    const [color,setColor] = useState('#06003d');
    const [btype,setBtype] = useState('flat');
    const [size,setSize] = useState(300);
    const [radius,setRadius] = useState(100);
    const [distance,setDistance] = useState(20);
    const [blur,setBlur] = useState(20);
    const [intensity,setIntesity] = useState(.5);
    const [lightDirection, setLightDirection] = useState('t-left');

    const [choosingColor, setChoosingColor] = useState(false);
    const [pickerColor, setPickerColor] = useState(false);
    const [mode, setMode] = useState('light');
    const [smallscreen,setSmallscreen] = useState(false);
    const [displaysize,setDisplaysize] = useState(600);
    const [sizeLimit, setSizeLimit] = useState(400); //object max size in display

    const [shadow, setShadow] = useState('');
    const [background, setBackground] = useState('');


    const calcShadow = () => {
        
        var lightColor;
        var darkColor;
        var angle=-45;
        var insetpos=[1,1,-1,-1];
        
        // handles accent colors
        const currenColor = chroma(color).hsl();

        if (currenColor[2]>.5) {
            setMode('dark');
        }else {
            setMode('light');
        }

        // handles light direction
        switch (lightDirection) {
            case 't-left':
                angle=-45;
                insetpos=[1,1,-1,-1];
                break;
            
            case 't-right':
                angle=45;
                insetpos=[-1,1,1,-1];
                break;

            case 'b-left':
                angle=-135;
                insetpos=[1,-1,-1,1];
                break;
            
            case 'b-right':
                angle=135;
                insetpos=[-1,-1,1,1];
                break;
        }
        
        // light box shadow
        const shadowLight = chroma(color).hsv();
        shadowLight[2] = shadowLight[2] + (shadowLight[2] * intensity);
        const newLight = chroma.hsv(shadowLight).hex();
        lightColor = newLight;

        // dark box shadow
        const shadowDark = chroma(color).hsv();
        shadowDark[2] = shadowDark[2] - (shadowDark[2] * intensity);
        const newDark = chroma.hsv(shadowDark).hex();
        darkColor = newDark;


        // background light color
        var backLight = chroma(color).hsv();
        backLight[2] = backLight[2] + (backLight[2] * .2);
        backLight = chroma.hsv(backLight).hex();


        // backgorund dark color
        var backDark = chroma(color).hsv();
        backDark[2] = backDark[2] - (backDark[2] * .2);
        backDark = chroma.hsv(backDark).hex();

        // handles inset shadow
        if (btype == 'inset') {
            const newShadow = `inset ${insetpos[0] * distance}px ${insetpos[1] *distance}px ${blur}px ${darkColor},inset ${insetpos[2] *distance}px ${insetpos[3] *distance}px ${blur}px ${lightColor}`;
            setShadow(newShadow);
        } else {
            
            const newShadow = `${insetpos[0] *distance}px ${insetpos[1] *distance}px ${blur}px ${darkColor}, ${insetpos[2] * distance}px ${insetpos[3] * distance}px ${blur}px ${lightColor}`;
            setShadow(newShadow);
        }
        

        // handles background type
        if (btype == 'flat') {
            setBackground(color);
        } else if (btype == 'concave') {
            const newbackground = `linear-gradient(${angle}deg,${backLight}, ${backDark})`;
            setBackground(newbackground);

        } else if (btype == 'convex') {
            const newbackground = `linear-gradient(${angle}deg,${backDark}, ${backLight})`;
            setBackground(newbackground);
        } 
    }


    const handleResize = (event) => {

        const windowSize = window.innerWidth;
        console.log(windowSize);
        if (windowSize <=1000) {
            setSmallscreen(true);
            
            if (windowSize < 600) {
                setDisplaysize(windowSize);

                
                if ((windowSize * .8) <= size) {
                    setSize(windowSize * .8);
                    setSizeLimit(windowSize);
                }
            }

        } else {
            setSmallscreen(false);
            setSizeLimit(400);
            setDisplaysize(600);
        }


    }


    useEffect(() => {
        handleResize();
        window.addEventListener('resize',handleResize);
        

        return () => {
            window.removeEventListener('resize',handleResize);
        }
    } ,[])


    useEffect(() => {
        calcShadow();
    },[
        color,
        btype,
        size,
        radius,
        distance,
        blur,
        intensity,
        lightDirection
    ])
    

    return(
        <Box id='main-body'
            style={{
                width:'100%',
                height:'100vh',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:color
                
                
            }}
        >
        
        <Box sx={{
            width:'90%',
            height:'90%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:smallscreen? 'column':'row'
        }}>

            <Box sx={{
                width:'50%',
                height:'100%',
                display:'flex',
                alignItems:'center',
                justifyContent:'center'
            }}>

                <ObjectDisplay
                    size={size}
                    radius={radius}
                    background={background}
                    shadow={shadow}
                    lightDirection={lightDirection}
                    setDirection={setLightDirection}
                    mode={mode}
                    windowSize={displaysize}
                />

            </Box>

            <Box sx={{
                width:smallscreen? '90%':'50%',
                height:'100%',
                display:'flex',
                alignItems:'center',
                marginTop:smallscreen && '5%',
                justifyContent:'center'
            }}>


                <Box sx={{
                    width:'90%',
                    height:'70%',
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center'
                    
                }}>
                    
                    <Box sx={{
                        width:'100%',
                        height:'auto',
                        color:mode=='light'? 'white':'black',
                        fontSize:'calc(14px + .7vw)',
                        fontFamily:'montserrat',
                        marginBottom:'2%',
                        display:'flex',
                        alignItems:'center'
                    }}>

                        Pick a Color:
                        <Box sx={{
                            width:'25px',
                            height:'25px',
                            border:`2px solid ${mode=='light'? 'white':'black'}`,
                            marginLeft:'2%',
                            cursor:'pointer',
                            backgroundColor:color,
                            position:'relative'
                        }}
                            onClick={() => {
                                setChoosingColor(!choosingColor);
                            }}
                        >
                            {
                                choosingColor&&
                                <ClickAwayListener onClickAway={() => {
                                    setChoosingColor(false);
                                }}>
                                    <Box sx={{
                                        position:'absolute',
                                        top:'115%',zIndex:1
                                    }}>
                                        <ChromePicker 
                                            color={pickerColor}
                                            onChange={(newColor) => {
                                                setPickerColor(newColor);
                                                setColor(newColor.hex);
                                            }}
                                        />
                                    </Box>
                                </ClickAwayListener>
                            }
                        </Box>

                        <Box sx={{
                            marginLeft:'2%'
                        }}>
                            {color}
                        </Box>

                    </Box>

                    <Box id='slider-section' 
                        sx={{
                            width:'100%',
                            height:'auto',
                            display:'flex',
                            flexDirection:'column'
                        }}
                    >
                        <PanelSlider mode={mode} label='Size' value={size} setValue={setSize} min={100} max={sizeLimit} unit='px' />
                        <PanelSlider mode={mode} label='Radius' value={radius} setValue={setRadius} min={50} max={200} unit='px' />
                        <PanelSlider mode={mode} label='Distance' value={distance} setValue={setDistance} min={5} max={50} unit='px' />
                        <PanelSlider mode={mode} label='Blur' value={blur} setValue={setBlur} min={0} max={100} unit='px' />
                        <PanelSlider mode={mode} label='Intensity' value={intensity} setValue={setIntesity} min={0} max={1} step={.01} />
                    </Box>
                    <Box id='btype-section' sx={{
                        width:'100%',
                        height:'auto',
                        color:mode=='light'? 'white':'black',
                        display:'flex',
                        marginTop:'2%'
                    }}>

                        <TypeButton mode={mode} label='flat' btype={btype} setBtype={setBtype} />
                        <TypeButton mode={mode} label='concave' btype={btype} setBtype={setBtype} />
                        <TypeButton mode={mode} label='convex' btype={btype} setBtype={setBtype} />
                        <TypeButton mode={mode} label='inset' btype={btype} setBtype={setBtype} />

                    </Box>


                </Box>


            </Box>

        
        </Box>
        
    </Box>
    )
}



export default Morph;