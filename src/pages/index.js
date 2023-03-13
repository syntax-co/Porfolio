import { Box, Button, Typography } from "@mui/material";
import { textAlign } from "@mui/system";
import ParticleBackground from "./components/particleBackground";
import { motion, useScroll } from "framer-motion";
import { Pace, Pause, useWindup, WindupChildren } from "windups";
import { useEffect, useState } from "react";
import {SiFiverr} from 'react-icons/si';
import { IconContext } from "react-icons/lib";
import {Done, Email, LinkedIn, ArrowForwardIos} from '@mui/icons-material';

import Spacing from './components/Spacing';
import Bodies from "./components/Planetsystem";
import Triangle from './components/Triangles';
import Lines from './components/Backgroundlines';


// ██╗  ██╗ ██████╗ ███╗   ███╗███████╗
// ██║  ██║██╔═══██╗████╗ ████║██╔════╝
// ███████║██║   ██║██╔████╔██║█████╗  
// ██╔══██║██║   ██║██║╚██╔╝██║██╔══╝  
// ██║  ██║╚██████╔╝██║ ╚═╝ ██║███████╗
// ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝

export default function Home() {

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


// ██╗     ██╗███╗   ██╗██╗  ██╗
// ██║     ██║████╗  ██║██║ ██╔╝
// ██║     ██║██╔██╗ ██║█████╔╝ 
// ██║     ██║██║╚██╗██║██╔═██╗ 
// ███████╗██║██║ ╚████║██║  ██╗
// ╚══════╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝
                             
const ContactLink = ({logo,link}) => {
  const [copied, setCopied] = useState(false);


  return(
    <Box sx={{display:'flex',alignItems:'center',height:'5vw',marginTop:'20px'}}>

      <motion.div style={{marginRight:'1%',marginLeft:'1%'}}
        initial={{opacity:0}}
        animate={copied? {opacity:1}:{opacity:0,transition:{duration:2}}}
      >
        <Done sx={{color:'highlight.main',width:'3vw',height:'3vw'}} />
      </motion.div>

      

      <motion.div 
        style={{width:'100%',display:'flex',justifyContent:'center', cursor:'pointer',position:'relative'}}
        initial={{translateY:0}}
        whileHover={{translateX:'20px'}}
        onClick={() => {
          setCopied(true);
          setTimeout(() => {setCopied(false);},500);
          
        }}
        >
        <Box variant="contained" sx={{
          fontSize:'.9vw',width:'100%',height:'50px',marginY:'2%',
          color:'white',fontFamily:'montserrat',display:'flex',alignItems:'center'
        }}>
          
          
          

          <Box >
            {logo}
          </Box>
          <div style={{marginLeft:'10px',fontSize:'calc(10px + .3vw)'}}>
            {link}
          </div>
        </Box>
      </motion.div>
    </Box>
  )
}


// ███████╗████████╗███████╗██████╗ 
// ██╔════╝╚══██╔══╝██╔════╝██╔══██╗
// ███████╗   ██║   █████╗  ██████╔╝
// ╚════██║   ██║   ██╔══╝  ██╔═══╝ 
// ███████║   ██║   ███████╗██║     
// ╚══════╝   ╚═╝   ╚══════╝╚═╝     
                                 
const Step = ({number,title, text, direction}) => {

  const dire = direction? direction:'left';

  return(
    <Box sx={{
      width:smallScreen? '90%':'80%',height:smallScreen? '20vw':'20%',
      position:'relative',zIndex:2,
      marginY:'5%'
    }}>

      <motion.div style={{width:'100%',height:'100%',position:'absolute'}}
        initial={{top:0,left:0}}
        whileHover={{top:-15,left:-15}}
      >
        <Box sx={{
          width:'100%',height:'100%',backgroundColor:'primary.lighter',
          position:'relative',zIndex:1,
          borderBottomLeftRadius:(dire=='left') && '10px',
          borderTopRightRadius:(dire=='left') && '10px',
          borderBottomRightRadius:(dire=='right') && '10px',
          borderTopLeftRadius:(dire=='right') && '10px'
        }}>

          

          <Box sx={{
            color:'white',display:'flex', alignItems:'center',
            paddingLeft:'5%', fontFamily:'quicksand',paddingTop:'2%',
            fontFamily:'montserrat',
          }}>


            <Typography  sx={{ 
              fontSize:smallScreen? '2.5vw':'1.4vw'
            }}>
              
              {`Step ${number}: `}
              {title}
                

            </Typography>

          </Box>
          


          

          <Typography sx={{
            display:'flex', alignItems:'center',padding:'5%',
            color:'white',fontSize:smallScreen? '2vw':'.8vw',height:'60%',
            // backgroundColor:'teal'
          }}>
            {text}
          </Typography>

        </Box>
      </motion.div> 

      <Box sx={{
        width:'100%',height:'100%',position:'absolute',
        top:smallScreen? 8:15, left:smallScreen? 8:15,backgroundColor:'primary.main',
        border:'2px solid white',zIndex:0,
        borderBottomLeftRadius:(dire=='left') && '10px',
        borderTopRightRadius:(dire=='left') && '10px',
        borderBottomRightRadius:(dire=='right') && '10px',
        borderTopLeftRadius:(dire=='right') && '10px'
      }}>

      </Box>


    </Box>
  )


}



// ███████╗██╗  ██╗██╗██╗     ██╗     
// ██╔════╝██║ ██╔╝██║██║     ██║     
// ███████╗█████╔╝ ██║██║     ██║     
// ╚════██║██╔═██╗ ██║██║     ██║     
// ███████║██║  ██╗██║███████╗███████╗
// ╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝
                                   
const Skill = ({text,delay}) => {

  return(
    <Box sx={{
      height:'15%',
      color:'white',
      display:'flex',
      alignItems:'center',
      marginTop:'2%'
    }}>
      <ArrowForwardIos sx={{height:'4vw'}}/>
      <Typography sx={{
        marginLeft:'10px',
        fontFamily:'montserrat',
        fontSize:'calc(12px + .6vw)',
        }} >
        <WindupChildren>
          {' '}
          <Pause ms={delay} />
          {text}
        </WindupChildren>
      </Typography>
    </Box>
  )
} 

  

  


  
  return (
    <Box sx={{
      width:'100%',
      height:'94vh',
      position:'relative',
      zIndex:-1
    }}>



      <Box sx={{position:'absolute',top:0,width:'100%',height:'94vh'}} >
        
        {/* ████████╗ ██████╗ ██████╗ 
            ══██╔══╝██╔═══██╗██╔══██╗
              ██║   ██║   ██║██████╔╝
              ██║   ██║   ██║██╔═══╝ 
              ██║   ╚██████╔╝██║     
              ╚═╝    ╚═════╝ ╚═╝     
                                      */}
        <Box sx={{
          width:'100%',
          height:'100%',
          position:'relative',
          top:0, display:'flex',alignItems:'center',
          justifyContent:'center', flexDirection:smallScreen? 'column':'row'
        }}>

          <Box sx={{
            height:'80%',
            width:smallScreen? '90%':'40%',
            display:'flex',
            alignItems:'center'
          }}>

            <Box sx={{width:'100%',height:'50%',display:'flex',flexDirection:'column',justifyContent:'center'}}>
              <Box sx={{width:'80%',display:'flex'}}>
                  <Typography  sx={{fontSize:'calc(25px + 4vw)',fontFamily:'satisfy',color:'highlight.main',height:'110%',display:'flex',alignItems:'flex-end'}}>
                    <WindupChildren >
                    
                      <Pace ms={100}>{'Hello,'}</Pace>

                    </WindupChildren>
                  </Typography>
                  <Typography  sx={{paddingLeft:'2%',fontFamily:'montserrat',color:'white',fontSize:'calc(20px + 2vw)',height:'100%',display:'flex',alignItems:'flex-end'}} >
                    <WindupChildren >
                      {' '}
                      <Pause ms={1000} />
                      <Pace ms={100} >{" I'm Chris"}</Pace> 
                    </WindupChildren>
                  </Typography>
              </Box>

              <Box sx={{marginTop:'5%'}}>
                <Typography sx={{fontFamily:'montserrat',color:'white',fontSize:'calc(16px + .8vw)'}}>
                  <WindupChildren>
                    {' '}
                    <Pause ms={2500} />
                    {"I'm a self-taught Web Deloper who has never stopped learning and improving my skills. "}
                    <Pause ms={500}/>
                    {'I love creating sites that are functional and pleasing to the eyes.'}
                     
                  </WindupChildren>
                </Typography>
              </Box>

            </Box>
          </Box>
              
          
          <Box sx={{width:smallScreen? '100%':'50%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',position:'relative',backgroundColor:''}}>

            <Box style={{
              width:'80%',
              height:'90%',
              overflow:'hidden',
              display:'flex',
              alignItems:'center',
              justifyContent:'center',
              position:'relative'
            }}>
              
              <Lines />
              
              <motion.div style={{width:'80%',height:'90%'}}
                initial={{opacity:0}}
                animate={{opacity:1,transition:{delay:.5}}}
              >
                <Box sx={{
                  width:'100%',
                  height:'100%',
                  position:'relative', backgroundColor:'primary.main',
                  display:'flex',
                  flexDirection:'column',
                  justifyContent:'center',
                  alignItems:'center'
                }}>


                {/* headshot */}
                  <Box sx={{
                    width:'calc(30px + 7vw)',
                    height:'calc(30px + 7vw)',
                    position:'relative'
                  }}>
                    <Box
                      sx={{
                        width:'100%',
                        height:'100%',
                        background:'url(./images/headshot.jpg)',
                        backgroundSize:'cover',
                        backgroundPosition:'center',
                        backgroundRepeat:'no-repeat',
                        borderRadius:150,
                        position:'relative',
                        zIndex:1
                      }}
                    >
                    </Box>
                    <Box sx={{
                        width:'100%',
                        height:'100%',
                        backgroundColor:'primary.lighter',
                        borderRadius:150,
                        position:'absolute',
                        zIndex:0,top:'.8vw',left:'.8vw'

                      }}></Box>
                  </Box>

                  <Box style={{
                    height:'50%',
                    width:'60%',
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center'
                  }}>
                    
                    <Typography sx={{
                      color:'white',
                      fontFamily:'montserrat',
                      fontSize:'calc(15px + 1.5vw)',
                      display:'flex',
                      justifyContent:'center',
                      margin:'10%'
                    }}>
                      Tools
                    </Typography>

                    <Skill text="React.js" delay={500} />
                    <Skill text="Next.js" delay={1000} />
                    <Skill text="Material UI" delay={1500} />
                    <Skill text="Web3.js" delay={2000} />
                  </Box>



                  {/* shadow */}
                  <Box sx={{
                    width:'100%',
                    height:'100%',
                    backgroundColor:'primary.lighter',
                    position:'absolute',
                    top:'1.2vw',
                    left:'1.2vw',
                    zIndex:-1
                  }}></Box>
                </Box>
              </motion.div>
            </Box>


          </Box>
              
        </Box>

        <div style={{
          height:'100px',
          width:'60%', marginLeft:'auto',marginRight:'auto'        
        }}>
          <Spacing />
        </div>



        {/* ███████╗██╗  ██╗ ██████╗ ██╗    ██╗ ██████╗ █████╗ ███████╗███████╗
            ██╔════╝██║  ██║██╔═══██╗██║    ██║██╔════╝██╔══██╗██╔════╝██╔════╝
            ███████╗███████║██║   ██║██║ █╗ ██║██║     ███████║███████╗█████╗  
            ╚════██║██╔══██║██║   ██║██║███╗██║██║     ██╔══██║╚════██║██╔══╝  
            ███████║██║  ██║╚██████╔╝╚███╔███╔╝╚██████╗██║  ██║███████║███████╗
            ╚══════╝╚═╝  ╚═╝ ╚═════╝  ╚══╝╚══╝  ╚═════╝╚═╝  ╚═╝╚══════╝╚══════╝
                                                                                */}

                                                                          
          <motion.div style={{height:'100%',width:'100%',display:'flex',justifyContent:smallScreen? 'center':''}}
            initial={{opacity:0}}
            whileInView={{opacity:1,transition:{delay:.25}}}
          >

              <Box sx={{width:'50%',height:'100%',position:smallScreen? 'absolute':'relative'}} >
                  <Bodies />
              </Box>

              <Box sx={{width:smallScreen? '100%':'50%',height:'100%',display:'flex',alignItems:'center',justifyContent:smallScreen? 'center':''}}>
                
                <Box sx={{width:'90%',height:'90%',position:'relative',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  


                  <Box sx={{width:'90%', height:'85%',backgroundColor:'primary.lighter',position:'relative',zIndex:1,
                            borderBottomLeftRadius:'10px', borderTopRightRadius:'10px'
                          }}>

                      
                      <Box sx={{position:'absolute',top:-50,left:-20,zIndex:-2}}>
                        <Triangle size={60} width={2.5}/>
                      </Box>
                      <Box sx={{position:'absolute',bottom:-50,right:-20,rotate:'-180deg'}}>
                        <Triangle size={60} width={2.5}/>
                      </Box>


                      <Typography sx={{fontSize:'calc(16px + 4vw)' ,color:'white',textAlign:'center',fontFamily:'satisfy',padding:'5%'}}>
                        Showcase
                      </Typography>
  
                      <Typography sx={{display:'flex', fontFamily:'montserrat',color:'white',fontSize:'calc(15px + .5vw)',padding:'6%'}} >
                        This is where I like to show smaller things that I've worked on and just want to show. 
                        These projects can be anything from a fractal tree to a design style that I wanted to try out.
                      </Typography>

                      <Box sx={{width:'100%',height:'20%',display:'flex',alignItems:'flex-end',justifyContent:'center'}}>
                        
                        <Box sx={{position:'relative'}}>
                        
                        <motion.div 
                          whileHover={{translateX:-5, translateY:-5}}
                        >
                          <Button variant='contained' color='primary' 
                            sx={{
                              width:'auto',position:'relative',
                              borderBottomLeftRadius:'10px',
                              borderBottomRightRadius:'0px',
                              borderTopLeftRadius:'0px',
                              borderTopRightRadius:'10px'
                            }}
                          >
                            
                            
                            <Typography sx={{color:'white',fontSize:'calc(16px + .7vw)',textAlign:'center',fontFamily:'quicksand',padding:'5%'}}>
                              Showcase
                            </Typography>


                            
                            
                          </Button>
                        </motion.div>
                        <Box sx={{
                            width:'100%',
                            height:'100%',
                            position:'absolute',
                            borderTopRightRadius:'10px',
                            borderBottomLeftRadius:'10px',
                            top:'.6vw',
                            left:'.6vw',
                            zIndex:-1,
                            backgroundColor:'secondary.main',
                          }}></Box>
                          </Box>
                      </Box>


                  </Box>
          
                </Box>

              </Box>

        </motion.div>


        <div style={{
          height:'100px',
          width:'60%', marginLeft:'auto',marginRight:'auto'        
        }}>
          <Spacing />
        </div>
        


      {/* ██████╗ ██████╗ ███╗   ██╗████████╗ █████╗  ██████╗████████╗
        ██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██╔════╝╚══██╔══╝
        ██║     ██║   ██║██╔██╗ ██║   ██║   ███████║██║        ██║   
        ██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██║██║        ██║   
        ╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║╚██████╗   ██║   
        ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝   ╚═╝   
      */}

        <motion.div id='contact-section' style={{height:'100%',width:'100%',display:'flex', alignItems:'center',
         background:'url(./images/ripple_x.png)',backgroundRepeat:'no-repeat',marginTop:'2%',
         backgroundSize:'contain',backgroundPosition:'center',flexDirection:smallScreen? 'column-reverse':'flex'
        }}
        initial={{opacity:0}}
        whileInView={{opacity:1,transition:{delay:.25}}}
        >
          
          <Box sx={{width:smallScreen? '90%':'50%', height:'100%',display:'flex',alignItems:'center',justifyContent:'center',position:'relative'}}>
            
            <Box sx={{width:smallScreen? '80%':'60%',height:smallScreen? '90%':'80%',position:'relative'}}>
              <Box sx={{width:'100%',height:'100%', backgroundColor:'primary.lighter',position:'absolute',zIndex:1,
                        borderBottomLeftRadius:10, borderTopRightRadius:10
                      }}>

                <Typography sx={{color:'white',fontSize:'7vw',fontFamily:'satisfy',textAlign:'center',marginTop:'2%',
              }}>
                  Contact
                </Typography>
                <Typography sx={{color:'white',fontSize:'calc(12px + .8vw)',paddingX:'5%', 
                              marginTop:'1vw',marginBottom:'1vw',paddingY:'2%',
                              fontFamily:'montserrat', textAlign:'center'
                              }}>
                    I'm open to freelance work to make your vision come true.
                </Typography>


                <Box sx={{width:'100%',height:'40%',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
                  
                  <Box sx={{width:'100%'}}>
                    <ContactLink logo={
                      <IconContext.Provider value={{size:smallScreen? '5vw':'2vw'}}>
                        <SiFiverr />
                      </IconContext.Provider>
                    } link={'https://www.linkedin.com/in/chris-munoz'} />


                    <ContactLink logo={
                      <LinkedIn sx={{width:smallScreen? '5vw':'2vw',height:smallScreen? '5vw':'2vw',margin:'1%'}} />
                    } link={'https://www.linkedin.com/in/chris-munoz'} />

                    <ContactLink logo={
                      <Email sx={{width:smallScreen? '5vw':'2vw',height:smallScreen? '5vw':'2vw',margin:'1%'}} />
                    } 
                    link={'munozchris484@gmail.com'} 
                    />
                  
                  </Box>
                </Box>

              </Box>

              <Box sx={{width:'100%',height:'100%', left:15,top:15, border:'2px solid white', 
                      backgroundColor:'primary.main',position:'absolute',
                      borderBottomLeftRadius:10,borderTopRightRadius:10
                      }}>

              </Box>
              
            </Box>

          </Box>
          
          <Box sx={{width:smallScreen? '90%':'50%', height:'100vh',display:'flex',alignItems:'center',justifyContent:'center',position:'relative'}}>
            <Box sx={{width:smallScreen? '90%':'100%',height:'90%',display:'flex',flexDirection:'column',alignItems:'center'}}>
              
              <Step number={1} title={'Request'} text={'If you deem my services fit for your project you can make a request by contacting me through E-mail or through Fiverr'} />
              <Step number={2} title={'Consulation/Offer'} text={'We will have a meeting about the projects and talk about details and goals for the project. I will then create an offer based of your needs for the project'} />
              <Step number={3} title={'Production'} text={'Website development will start. Communication is key during this point and throughout the whole process I will be giving regular updates'} />
              <Step number={4} title={'Deployment'} text={'Hurray, the website is finished and at this point is presented to you to make sure that it meets your standards. Along with that comes final checks will be done to garauntee everything is peachy keen'} />

            </Box>
          </Box>

        </motion.div>





      </Box>

      

      
      
      

    </Box>
    
  )
}
