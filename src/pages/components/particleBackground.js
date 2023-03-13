import { Suspense, useCallback, useEffect, useState, useRef, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticlesConfig from "./config/particles-config";
import { motion } from "framer-motion";











const ParticleBackground = () => {

    const [particleOpacity, setParticleOpacity] = useState(1);






    // #############################################    
    const particlesInit = useCallback(async engine => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        
    }, []);
    // #############################################

    return (
        <div style={{position:'relative',opacity:particleOpacity,zIndex:-1,}}>
            
            
            
            

            <div style={{position:'absolute',height:'50px'}}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={ParticlesConfig}
                />
            </div>
        </div>
    );
};

export default ParticleBackground;