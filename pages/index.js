import Image from "next/image";
import ParticlesContainer from '../components/ParticlesContainer'
import ProjectsBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gardient-to-r from-primary/70 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1 
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="h1 mb-0 xl:mb-8"
            >
            Transforming Ideas
             <br /> 
             Into {''} 
            <span className="text-accent">Digital Reality</span>
          </motion.h1>
          <motion.p 
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-0 xl:mb-10"
            >
            I&#39;m a Full-Stack Developer with a passion for transforming innovative ideas into seamless digital solutions. With a strong foundation in front-end and back-end development,
            I specialize in building responsive websites and dynamic web applications.
            <br/>
            Explore my portfolio to see how I can turn your 
            <span className='text-accent'> vision into reality.</span>
          </motion.p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="hidden xl:flex mb-3"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div 
         className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right
                        xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge
                        translate-z-0"
        >
        <ParticlesContainer />
        </div>
        <motion.div 
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden' 
          transition={{duration: 1,ease: 'easeInOut'}}
          className='w-full h-full max-w-[737px] max-h-[678px] absolute
                    -bottom-330 lg:bottom-0 lg:right-[8%]'
        >
          {/* <Avatar /> */}
        </motion.div>
      </div>

    </div>

  );
};

export default Home;
