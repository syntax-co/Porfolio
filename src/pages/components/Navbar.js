import {useEffect,useState,useRef} from 'react';
import { Box } from '@mui/material';
import {motion} from 'framer-motion';
import { Fade as Hamburger } from 'hamburger-react';
import { useRouter } from 'next/router';





// ███╗   ██╗    ██╗████████╗███████╗███╗   ███╗
// ████╗  ██║    ██║╚══██╔══╝██╔════╝████╗ ████║
// ██╔██╗ ██║    ██║   ██║   █████╗  ██╔████╔██║
// ██║╚██╗██║    ██║   ██║   ██╔══╝  ██║╚██╔╝██║
// ██║ ╚████║    ██║   ██║   ███████╗██║ ╚═╝ ██║
// ╚═╝  ╚═══╝    ╚═╝   ╚═╝   ╚══════╝╚═╝     ╚═╝
                                             
const NavItem = (props,currentPage) => {
		
	const [hovering,setHovering] = useState(false);

	

	const styles = {
		hiddenLine:{
			width:'0%',
			transition:{
				ease:'linear'
			}
		},
		shownLine:{
			width:'90%'
		}
	}

	return(
		<a href={props.page} style={{height:'100%',width:'100%'}}>
			<motion.div style={{width:'80%',height:'100%',display:'flex',flexDirection:'column',alignItems:'center'}}
				onMouseEnter={() => {setHovering(true)}}
				onMouseLeave={() => {setHovering(false)}}
			>
				<motion.div style={{
					width:'100%',
					height:'100%',
					color:'white',
					fontFamily:'pt-sans',
					fontSize:'1vw',
					display:'flex',
					alignItems:'center',
					justifyContent:'center',
					marginLeft:'2%',
					marginRight:'2%'
				}}
				animate={(hovering || (currentPage == props.page)) ? {backgroundColor:'#00000099'}:{}}
				>
					{props.text}
				</motion.div>
				
				<motion.div style={{
					backgroundColor:'#00d4a9',
					height:'2px'
				}}
				initial={styles.hiddenLine}
				animate={(hovering || (currentPage == props.page)) ? styles.shownLine:styles.hiddenLine}
				></motion.div>
					
			</motion.div>
		</a>
	)
}
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


// ██████╗     ███╗   ██╗ █████╗ ██╗   ██╗
// ██╔══██╗    ████╗  ██║██╔══██╗██║   ██║
// ██████╔╝    ██╔██╗ ██║███████║██║   ██║
// ██╔══██╗    ██║╚██╗██║██╔══██║╚██╗ ██╔╝
// ██████╔╝    ██║ ╚████║██║  ██║ ╚████╔╝ 
// ╚═════╝     ╚═╝  ╚═══╝╚═╝  ╚═╝  ╚═══╝  
                                       

const BrowserNav = ({currentPage}) => {

	return(
		<div style={{display:'flex',width:'70%',height:'100%',marginRight:'5%'}}>
			<NavItem text='Home' page={process.env.NEXT_PUBLIC_BASE} currentPage={currentPage} />
			<NavItem text='Showcase' page={`${process.env.NEXT_PUBLIC_BASE}showcase`} currentPage={currentPage} />
			<NavItem text='Projects' page={`${process.env.NEXT_PUBLIC_BASE}projects`} currentPage={currentPage} />
			<NavItem text='Contact' page={`${process.env.NEXT_PUBLIC_BASE}#contact-section`} currentPage={currentPage} />
		</div>
	)
}

// ███╗   ███╗    ██╗████████╗███████╗███╗   ███╗
// ████╗ ████║    ██║╚══██╔══╝██╔════╝████╗ ████║
// ██╔████╔██║    ██║   ██║   █████╗  ██╔████╔██║
// ██║╚██╔╝██║    ██║   ██║   ██╔══╝  ██║╚██╔╝██║
// ██║ ╚═╝ ██║    ██║   ██║   ███████╗██║ ╚═╝ ██║
// ╚═╝     ╚═╝    ╚═╝   ╚═╝   ╚══════╝╚═╝     ╚═╝
                                              

const MobileItem = ({page,text,setOpen}) => {

	return(
		<a href={page}>
			<Box sx={{
				color:'white',
				fontFamily:'montserrat',
				fontSize:'7vw',
				width:'100%',
				display:'flex',
				justifyContent:'center',
				marginTop:'8%',
				marginBottom:'8%'
			}}
			onClick={(event) => {
				setOpen(false);
				
			}}
			>
				{text}
			</Box>
		</a>
	)
}


// ███╗   ███╗    ███╗   ██╗ █████╗ ██╗   ██╗███████╗
// ████╗ ████║    ████╗  ██║██╔══██╗██║   ██║██╔════╝
// ██╔████╔██║    ██╔██╗ ██║███████║██║   ██║█████╗  
// ██║╚██╔╝██║    ██║╚██╗██║██╔══██║╚██╗ ██╔╝██╔══╝  
// ██║ ╚═╝ ██║    ██║ ╚████║██║  ██║ ╚████╔╝ ███████╗
// ╚═╝     ╚═╝    ╚═╝  ╚═══╝╚═╝  ╚═╝  ╚═══╝  ╚══════╝
                                                  

const MobileNav = ({isOpen,setOpen}) => {
	
	return(
		<div style={{
			height:'100%',
			width:'30%',
			display:'flex',
			alignItems:'center',
			position:'relative',
			WebkitTapHighlightColor:'transparent'
		}}>
			<Hamburger toggled={isOpen} onToggle={() => {setOpen(!isOpen)}} direction='left' color='white' />
			
		</div>
	)
}


// ███╗   ███╗    ███╗   ███╗███████╗███╗   ██╗██╗   ██╗
// ████╗ ████║    ████╗ ████║██╔════╝████╗  ██║██║   ██║
// ██╔████╔██║    ██╔████╔██║█████╗  ██╔██╗ ██║██║   ██║
// ██║╚██╔╝██║    ██║╚██╔╝██║██╔══╝  ██║╚██╗██║██║   ██║
// ██║ ╚═╝ ██║    ██║ ╚═╝ ██║███████╗██║ ╚████║╚██████╔╝
// ╚═╝     ╚═╝    ╚═╝     ╚═╝╚══════╝╚═╝  ╚═══╝ ╚═════╝ 
                                                     

const MobileMenu = ({setOpen}) => {

	return(
		<Box sx={{
			width:'100%',
			height:'94vh',
			backgroundColor:'primary.main',
			position:'absolute',
			top:'6vh',left:0,zIndex:0,
			display:'flex',
			alignItems:'center',
			justifyContent:'center',
			zIndex:2
		}}>

			

			<Box sx={{
				width:'80%',
				height:'80%',
				backgroundColor:'primary.lighter',
				borderBottomLeftRadius:'10px',
				borderTopRightRadius:'10px',
				position:'relative',
				display:'flex',
				flexDirection:'column',
				alignItems:'center',
				justifyContent:'center'
			}}>


				<MobileItem text='Home' page={process.env.NEXT_PUBLIC_BASE}  setOpen={setOpen} />
				<MobileItem text='Showcase' page={`${process.env.NEXT_PUBLIC_BASE}showcase`}   setOpen={setOpen} />
				<MobileItem text='Projects' page={`${process.env.NEXT_PUBLIC_BASE}projects`}   setOpen={setOpen} />
				<MobileItem text='Contact' page={`${process.env.NEXT_PUBLIC_BASE}#contact-section`}  setOpen={setOpen} />


				<Box sx={{
					width:'100%',
					height:'100%',
					backgroundColor:'primary.main',
					border:'1px solid white',
					position:'absolute',
					left:'3vw',top:'3vw',
					borderBottomLeftRadius:'10px',
					borderTopRightRadius:'10px',
					zIndex:-1
				}}></Box>

			</Box>
			

		</Box>
	)
}




// ██████╗  █████╗ ██████╗ 
// ██╔══██╗██╔══██╗██╔══██╗
// ██████╔╝███████║██████╔╝
// ██╔══██╗██╔══██║██╔══██╗
// ██████╔╝██║  ██║██║  ██║
// ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝
                        

const Navbar = () => {

	const [showMobile, setShowMobile] = useState(false);
	const navMobile = useRef(false);
	const [currentPage, setCurrentPage] = useState('/');
	const router = useRouter();
	const [isOpen, setOpen] = useState(false);
	const minWidth = 1000;

	const checkMobile = () => {
	
		if (window.innerWidth <= minWidth) {
			setShowMobile(true);

		} else {
			setShowMobile(false);
		}
		
		
		if (window.innerWidth <= minWidth) {
			if (!navMobile.current) {
				setShowMobile(true);
				navMobile.current=true;
			}
		} else if (window.innerWidth >= 600) {
			
			if (navMobile.current) {
				setShowMobile(false);
				navMobile.current=false;
			}
			
		}
	}
	


	useEffect(() => {
		checkMobile();
		setCurrentPage(router.pathname);
		window.addEventListener('resize', checkMobile);
		
		
		return () => {

			window.removeEventListener('resize',checkMobile) 
		}

	},[router]);




	// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
	


  
	return(
		<div className='navbar-main'
		style={{
			// backgroundColor:'#10101099',
			height:'6vh',
			width:'100%',
			display:'flex',
			position:'relative'
		}}>
				
			<div style={{
				height:'100%',
				width:'50%',
				display:'flex',
				alignItems:'center'
			}}>
				
				<div style={{
						fontFamily:'satisfy',
						color:'white',
						fontSize:'1.5rem',
						marginLeft:'15%',
						cursor:'pointer'
						}}>
						<a href={process.env.NEXT_PUBLIC_BASE} >
						ChrisMunoz
					</a>
				</div>
			</div>
			
			<div style={{
				width:'50%',
				display:'flex',
				alignItems:'center',
				justifyContent:'flex-end',
				position:'relative'
				}}>
				
				{showMobile ? <MobileNav isOpen={isOpen} setOpen={setOpen} />: <BrowserNav currentPage={currentPage}/>}
				
				

			</div>
			
			{showMobile && (isOpen && <MobileMenu setOpen={setOpen} />)}
				
		</div>
	)
}


export default Navbar;
