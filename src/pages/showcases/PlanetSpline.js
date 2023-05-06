const { Box } = require("@mui/material")




const PlanetSpline = () => {


    return(
        <Box sx={{
            width:'100%',
            height:'100vh',
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
        }}>

            

            <script type="module" src="https://unpkg.com/@splinetool/viewer@0.9.324/build/spline-viewer.js"></script>
            <spline-viewer loading-anim url="https://prod.spline.design/sIVwRlZ1LkA0J-Dn/scene.splinecode"></spline-viewer>


        </Box>
    )
}



export default PlanetSpline;