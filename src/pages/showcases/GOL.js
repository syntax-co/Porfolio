// import p5 from "p5";
import React, { useEffect, useState,useRef} from "react";
import { IconContext } from "react-icons";
import { MdDraw,MdPlayCircleOutline,MdOutlineStopCircle,MdOutlineLayersClear } from 'react-icons/md';
import { ChromePicker } from "react-color";
import { isMobile } from "react-device-detect";
import { Squash as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

import { filterProps } from "framer-motion";
import { Box } from "@mui/material";

const Sketch = dynamic(
    () => import('react-p5').then((mod) => mod.default ),
    {ssr:false}
)


var primaryColor = '#00d4a9';
var secondaryColor = '#ff4d00';
var baseColor = '#3F00D3';
var activeColor = '#ffffff';
var gameArray = [];
var changetype = 'base';
var gameRunning = false;
var dragPainting = false;
var placing = false;


const resetBoard = () => {

    for (var i=0; i<gameArray.length; i++) {
        for (var k=0; k<gameArray[0].length; k++) {
            gameArray[i][k]=0;
        }
    }


}


const setNewColor = (newcolor) => {

    if (changetype == 'base') {
        baseColor=newcolor.hex;
    }

    if (changetype == 'active') {
        activeColor=newcolor.hex;
    }
    

}


  
    


    // ██████╗  ██████╗  █████╗ ██████╗ ██████╗ 
    // ██╔══██╗██╔═══██╗██╔══██╗██╔══██╗██╔══██╗
    // ██████╔╝██║   ██║███████║██████╔╝██║  ██║
    // ██╔══██╗██║   ██║██╔══██║██╔══██╗██║  ██║
    // ██████╔╝╚██████╔╝██║  ██║██║  ██║██████╔╝
    // ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ 
                                             
    const Board = ({isOpen, setOpen}) => {
        var canvasXSize;
        var canvasYSize;
        const gridSize = isMobile? 40:100;
        var boxSize;
        
        
        var xOffset;
        var yOffset;
        var boxXCount;
        var boxYCount;




        const handlePress = (event) => {
            try {
                var mouseX;
                var mouseY;

                if (event.mouseX) {
                    mouseX = event.mouseX;
                    mouseY = event.mouseY;
                } else if (event.target) {
                    mouseX = event.offsetX;
                    mouseY = event.offsetY;
                }
                
                const row = (mouseX - (mouseX % boxSize)) / boxSize;
                const col = (mouseY - (mouseY % boxSize)) / boxSize;

                

                gameArray[row][col] = 1;
            } catch(e) {

            }
        }


        const dragHandle = (event) => {
            if (dragPainting && placing) {
                handlePress(event);
            }

        }


        // ███████╗███████╗████████╗████████╗██╗███╗   ██╗ ██████╗ ███████╗
        // ██╔════╝██╔════╝╚══██╔══╝╚══██╔══╝██║████╗  ██║██╔════╝ ██╔════╝
        // ███████╗█████╗     ██║      ██║   ██║██╔██╗ ██║██║  ███╗███████╗
        // ╚════██║██╔══╝     ██║      ██║   ██║██║╚██╗██║██║   ██║╚════██║
        // ███████║███████╗   ██║      ██║   ██║██║ ╚████║╚██████╔╝███████║
        // ╚══════╝╚══════╝   ╚═╝      ╚═╝   ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝
                                                                        

        const Settings = () => {

            const [currentTab, setCurrentTab] = useState('base');

            const Picker = () => {
                const [pickerColor,setPickerColor] = useState(currentTab=='base'? baseColor:activeColor);
        
                return(
                    <ChromePicker 
                        color={pickerColor}
                        onChange={(newcolor) => {
                            setPickerColor(newcolor);
                            setNewColor(newcolor);
                        }}
                    />
                )
        
            }
            
            const Tab = (props) => {
                const tabColor = '#121212';
                
                return(
    
                    <Box style={{width:'50%',position:'relative',display:'flex',cursor:'pointer'}}
                        onClick={() => {
                            setCurrentTab(props.tabType);
                            changetype=props.tabType;
                        }}
                    >
                        
                        
                        <Box sx={{
                            backgroundColor:(currentTab==props.tabType)? 'primary.main':'primary.mainOpac',
                            color:(currentTab==props.tabType)? 'white':'#ffffff55',
                            fontSize:'20px',
                            fontFamily:'quicksand',
                            height:'30px',
                            width:'100%',
                            borderTopRightRadius:'10px',
                            borderTopLeftRadius:'10px',
                            marginLeft:props.left&& props.left ,
                            marginRight:props.right&& props.right,
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'center'
                        }}>
                            
                                {props.tabType.charAt(0).toUpperCase() + props.tabType.slice(1)}
                            
                        </Box>
                        
                    </Box>
                )
    
    
            }


            return(
                <motion.div style={{
                    width:'100%',
                    height:'100%',
                    display:'flex',
                    position:'relative',
                    alignItems:'center',
                    flexDirection:'column',
                    backgroundColor:'primary.lighter',
                    position:'absolute',
                    borderBottomLeftRadius:'10px',
                    borderTopRightRadius:'10px',
                    zIndex:isOpen? 1:-1
                }}
                >
                    
                    
                    

                    <Box sx={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'center',
                        width:'90%',
                        height:'80vh',
                        
                    }}>
                        <Box sx={{
                            width:'100%',
                            display:'flex',
                            justifyContent:'center'
                        }}>

                            <Tab tabType='base' />
                            <Tab tabType='active' />
                        </Box>

                        <Box sx={{
                            width:'100%',
                            height:'50%',
                            borderBottomLeftRadius:'10px',
                            borderBottomRightRadius:'10px',
                            display:'flex',
                            flexDirection:'column',
                            alignItems:'center',
                            justifyContent:'center',
                            backgroundColor:'primary.main'
                        }}>

                            <Picker  />
                            
                        </Box>
                    </Box>
    
                    
    
                    
                </motion.div>
            )
        }


        
        //  ██████╗██╗  ██╗███████╗ ██████╗██╗  ██╗
        // ██╔════╝██║  ██║██╔════╝██╔════╝██║ ██╔╝
        // ██║     ███████║█████╗  ██║     █████╔╝ 
        // ██║     ██╔══██║██╔══╝  ██║     ██╔═██╗ 
        // ╚██████╗██║  ██║███████╗╚██████╗██║  ██╗
        //  ╚═════╝╚═╝  ╚═╝╚══════╝ ╚═════╝╚═╝  ╚═╝
                                                
        const checkNeighbors = (row, col) => {
            // Return number of live neighbors
            let count = 0;
            var aboveRow;
            var belowRow;
            var leftCol;
            var rightCol;

            

            if (row > 0) {
                aboveRow = row -1;
            }
            if (row < boxYCount) {
                belowRow = row +1;
            }

            if (col>0) {
                leftCol = col-1;
            }

            if (col<boxXCount) {
                rightCol = col+1
            }


            for (let i = -1; i < 2; i++) { //This checks the row above and row below
                if (col + i >= 0 && col + i < boxXCount - 1) { // Check for valid column
                  if (row > 0 && gameArray[row - 1][col + i] == 1) {
                    count++;
                  }
                  if (row < boxXCount - 1 && gameArray[row + 1][col + i] == 1) { 
                    count++;
                  }
                }   
            }
              
            if (col - 1 >= 0 && gameArray[row][col - 1] == 1) { // Check left cell
                count++;
            }
            if (col + 1 < boxYCount - 1 && gameArray[row][col + 1] == 1) { // Check right cell
                count++;
            }


            return count;
            
        }


        


        // ███████╗███████╗████████╗██╗   ██╗██████╗ 
        // ██╔════╝██╔════╝╚══██╔══╝██║   ██║██╔══██╗
        // ███████╗█████╗     ██║   ██║   ██║██████╔╝
        // ╚════██║██╔══╝     ██║   ██║   ██║██╔═══╝ 
        // ███████║███████╗   ██║   ╚██████╔╝██║     
        // ╚══════╝╚══════╝   ╚═╝    ╚═════╝ ╚═╝     
                                                
        const initialsetup = () => {
            
            // finds the max boxes that will fit for each axis
            if (canvasXSize > canvasYSize) {
                
                boxSize = Math.floor(canvasXSize/gridSize);
                boxXCount=gridSize;
                
                if (boxSize*gridSize > canvasYSize) {
                    const item = (boxSize*gridSize)-canvasYSize;
                    const boxOver = Math.round(item/boxSize);
                    boxYCount = gridSize-boxOver;
                }

            } else {
                boxSize = Math.floor(canvasYSize/gridSize);
                boxYCount=gridSize;

                if (boxSize*gridSize > canvasXSize) {
                    const item = (boxSize*gridSize)-canvasXSize;
                    const boxOver = Math.round(item/boxSize);
                    boxXCount = gridSize-boxOver;
                }
            }

            


            // sets state for each box
            for (var i=0; i<boxXCount; i++) { //boxYCount
                var rowColor = []
                for (var k=0; k<boxYCount; k++) { //boxXCount
                    rowColor.push(0);
                }
                gameArray.push(rowColor);
            }
            
            
        }


        // ███████╗██╗  ██╗███████╗████████╗ ██████╗██╗  ██╗
        // ██╔════╝██║ ██╔╝██╔════╝╚══██╔══╝██╔════╝██║  ██║
        // ███████╗█████╔╝ █████╗     ██║   ██║     ███████║
        // ╚════██║██╔═██╗ ██╔══╝     ██║   ██║     ██╔══██║
        // ███████║██║  ██╗███████╗   ██║   ╚██████╗██║  ██║
        // ╚══════╝╚═╝  ╚═╝╚══════╝   ╚═╝    ╚═════╝╚═╝  ╚═╝

        
        const p5setup = (p5, canvasParentRef) => {
            initialsetup();
            p5.frameRate(5);
            const canvas = p5.createCanvas(canvasXSize, canvasYSize, p5.WEBGL).parent(canvasParentRef);
            p5.background(50);
        }

        const draw = (p5) => {

            if (placing) {
                p5.frameRate(60);
            } else {
                p5.frameRate(5);
            }


            

            gameArray.forEach((rowArr, row) => {
                rowArr.forEach((colVal, col) => {
                    p5.fill((colVal == 1) ? activeColor : baseColor); // Black if live, transparent if dead
                    p5.rect( xOffset+(row * boxSize), yOffset+(col * boxSize), boxSize, boxSize);
                });
            });

            
            
            if (gameRunning) {
                // Apply rules
                let newTable = []; // Upcoming grid

                gameArray.forEach((rowArr, row) => {
                    let newRow = [];
                    rowArr.forEach((colVal, col) => {
                        let cellVal = colVal;
                        let nCount = checkNeighbors(row, col);
                        
                        if (cellVal == 1 && nCount < 2) { // If live and <2 live neighbors
                            cellVal = 0;
                        } else if (cellVal == 1 && nCount > 3) { // If live and >3 live neighbors
                            cellVal = 0;
                        } else if (cellVal == 0 && nCount == 3) { // If dead and 3 live neighbors
                            cellVal = 1;
                        }
        
                        newRow.push(cellVal);
                    });
                    newTable.push(newRow);
                });

                gameArray=newTable;
            }


        }
        

        


        useEffect(() => {
            initialsetup();
            const canvasHolder = document.querySelector('#canvas-div');
            const holderDetails = canvasHolder.getBoundingClientRect();
            
            if (isMobile) {
                canvasHolder.addEventListener('touchmove',dragHandle);
            } else {
                canvasHolder.addEventListener('mousemove',dragHandle);
            }

            


            
            canvasXSize = holderDetails.width;
            canvasYSize = holderDetails.height;
            xOffset = -1*(canvasXSize/2);
            yOffset = -1*(canvasYSize/2);


            // return () => {
            //     if (isMobile) {
            //         document.querySelector('#canvas-div').removeEventListener('touchmove',dragHandle);
            //     } else {
            //         document.querySelector('#canvas-div').removeEventListener('mousemove',dragHandle);
            //     }
            // }
        },[]);


        return(
            <Box id='canvas-div' 
                sx={{
                    height:'80%',
                    width:'100%',
                    display:'flex',
                    position:'relative',
                    alignItems:!isMobile && 'center',
                    justifyContent:!isMobile &&'center',
                    backgroundColor:'primary.lighter',
                    borderBottomLeftRadius:'10px',
                    borderTopRightRadius:'10px',
                    // overflow:'hidden'
                }}
                onPointerDown={() => {placing=true}}
                onPointerUp={() => {placing=false}}
            >

                <Box sx={{
                    overflow:'hidden',
                    borderBottomLeftRadius:'10px',
                    borderTopRightRadius:'10px',
                }}>
                    <Sketch setup={p5setup} draw={draw} mousePressed={handlePress} />
                </Box>

                
                {/* <Settings /> */}

                <Box sx={{
                    height:'100%',
                    width:'100%',
                    backgroundColor:'primary.main',
                    border:'1px solid white',
                    position:'absolute',
                    borderBottomLeftRadius:'10px',
                    borderTopRightRadius:'10px',zIndex:'-1',
                    top:'1vw',left:'1vw'
                }}></Box>
            </Box>
        )
    }



    // ██████╗  █████╗ ███╗   ██╗███████╗██╗     
    // ██╔══██╗██╔══██╗████╗  ██║██╔════╝██║     
    // ██████╔╝███████║██╔██╗ ██║█████╗  ██║     
    // ██╔═══╝ ██╔══██║██║╚██╗██║██╔══╝  ██║     
    // ██║     ██║  ██║██║ ╚████║███████╗███████╗
    // ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚══════╝
                                              
    



    const MobileNav = ({isOpen, setOpen}) => {
        
        const [isPlaying,setPlaying] = useState(false);
        const [dragging, setDragging] = useState(false);


        return(
            <Box sx={{
                height:'10%',
                width:'100%',
                display:'flex',
                justifyContent:'center',
                position:'relative',
                backgroundColor:'primary.lighter',
                marginBottom:'1.5vw', position:'relative',
                borderBottomLeftRadius:'10px',
                borderTopRightRadius:'10px'
            }}>

                <Box style={{width:'80%',height:'100%',display:'flex', alignItems:'center',justifyContent:'center'}}>

                    <Box sx={{margin:'auto',color:'white'}}
                    onClick={() => {
                        setPlaying(!isPlaying);
                        gameRunning=!gameRunning;
                    }}
                    >
                        { isPlaying?
                        <IconContext.Provider value={{size:'50px'}}>
                            <MdOutlineStopCircle />
                        </IconContext.Provider>:
                        <IconContext.Provider value={{size:'50px'}}>
                            <MdPlayCircleOutline />
                        </IconContext.Provider>
                        }
                    </Box>

                    <Box style={{color:'white',display:'flex',alignItems:'center',margin:'auto'}}
                        onClick={() => {
                            resetBoard();
                        }}
                    >
                        <IconContext.Provider value={{size:'50px'}}>
                            <MdOutlineLayersClear />
                        </IconContext.Provider>
                    </Box>
                        
                    <Box sx={{display:'flex',alignItems:'center',margin:'auto'}}>
                        <div style={{
                            width:'50px',
                            height:'50px',
                            borderRadius:'10px',
                            color:dragging? secondaryColor:'white',
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'center',
                            fontFamily:'quicksand',
                            fontSize:'1.5vw',
                            margin:'2%',
                            cursor:'pointer'
                        }}
                        onClick={() => {
                            setDragging(!dragging);
                            dragPainting=!dragPainting;
                        }}
                        >
                            <IconContext.Provider value={{size:'40px'}}>
                                <MdDraw />
                            </IconContext.Provider>
                        </div>
                    </Box>

                            
                    
                </Box>
                
                

                {/* <Box sx={{width:'50%',height:'100%',
                             display:'flex',alignItems:'center',justifyContent:'flex-end',
                             color:'white', paddingRight:'10px'
                            }}>
                    
                    
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                    
                    
                </Box> */}
                
                

                <Box sx={{
                    width:'100%',
                    height:'100%',
                    backgroundColor:'primary.main',
                    border:'1px solid white',
                    borderBottomLeftRadius:'10px',
                    borderTopRightRadius:'10px',
                    position:'absolute',
                    zIndex:-1, top:'1vw', left:'1vw'
                }}></Box>
            </Box>
        )
    }


    const GameOfLife = () => {
        const [isOpen,setOpen] = useState(false);
        
        


    return(
       
        

        <Box sx={{
            width:'100%',
            height:'100vh',
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
        }}>

            <Box sx={{
                width:'500px',
                height:'100%',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center'
            }}>
                <MobileNav
                    isOpen={isOpen}
                    setOpen={setOpen}
                />
                <Board
                    isOpen={isOpen}
                    setOpen={setOpen}
                />
            </Box>
            
        </Box>


        
        


        
    )
}

export default GameOfLife;