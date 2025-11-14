// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaLaravel,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiPython ,
  SiAdobexd,
  SiTailwindcss ,
  SiAdobephotoshop,
} from "react-icons/si";

import React,{useState} from "react";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import {motion} from 'framer-motion'
import { fadeIn } from "../../variants";
import CountUp from "react-countup";

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="html" />,
          <FaCss3 key="css" />,
          <FaJs key="js" />,
          <SiTailwindcss key="tailwind" />,
          <SiNextdotjs key="nextjs" />,
          <SiPython key="python" />,
          <FaLaravel key="laravel" />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma key="figma" />, <SiAdobephotoshop key="photoshop" />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'University Project Award',
        stage: '2023 - 2024',
      },
      {
        title: 'Front-End Development Competition Winner',
        stage: '2022 - 2022',
      },
      {
        title: 'Laravel Back-End Development Competition Winner',
        stage: '2021 - 2022',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Full-Stack Web Developer - Techno Fortress',
        stage: '2023 - Present',
        // description: 'Developing and maintaining dynamic web applications using modern frameworks such as Laravel and Next.js. Collaborating with cross-functional teams to deliver high-quality products and implementing responsive designs to enhance user experience.',
      },
      {
        title: 'Web Development Intern - Techno Fortress',
        stage: '2022-2023',
        // description: 'Assisted in building web applications and learned best practices in coding and development workflows. Gained hands-on experience with HTML, CSS, JavaScript, and PHP while working on various projects, contributing to front-end and back-end development tasks.',
      },
      {
        title: 'Project Team Member - GMIS',
        stage: '2023-2024',
        // description: 'Contributed to the design and development of a comprehensive Project Management System for the university. Collaborated with a team of students to gather requirements, develop features, and ensure smooth deployment, enhancing project tracking and management capabilities.',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Bachelor of Computer Science - GMIS',
        stage: '2024',
      },
      {
        title: 'ICS - GOVT Zamindar College',
        stage: '2020',
      },
      {
        title: 'Matriculation in Science - GOVT Zamindar School',
        stage: '2018',
      },
    ],
  },
];

const About = () => {
const [index,setIndex] = useState(0);
// console.log(index);
  
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div 
      variants={fadeIn('right',0.2)}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='hidden xl:flex absolute bottom-0 -left-[370px]'>
        {/* <Avatar /> */}
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        <div className='xl:max-h-[480px] flex-1 flex flex-col justify-center'>
          {/* <h2 className='text-4xl'> */}
          <motion.h2 
           variants={fadeIn('right',0.2)}
           initial='hidden'
           animate='show'
           exit='hidden'
           className='text-3xl xl:text-4xl 2xl:text-5xl mb-10'
          >
            Cpativiting <span className='text-accent'>stories</span> birth magnificient designs.
          </motion.h2>
          <motion.p 
            variants={fadeIn('right',0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
          {/* <p className='max-w-[500px] mx-auto xl:mx-0 xl:my-2 mb-6 px-2 xl:px-0'> */}
            With over 4 years of experience in the industry, I have dedicated my career to transforming ideas
            into exceptional digital experiences. My journey began 4-years ago, and since then, I have had the 
            privilege of collaborating with multiple satisfied clients and successfully completing projects.
          </motion.p>
          <div
           variants={fadeIn('right',0.6)}
           initial='hidden'
           animate='show'
           exit='hidden'
           className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
          >
            <div className='flex flex-1 xl:gap-x-6'>
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={4} duration={3} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Year of experience</div>
              </div>
               {/* Clients */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={25} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Satisfied clients</div>
              </div>
               {/* projects */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={50} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Finished projects</div>
              </div>
              {/* awards */}
              <div className='relative flex-1'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={8} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Winning awards</div>
              </div>
            </div>
          </div>
        </div>
        <motion.div 
         variants={fadeIn('left',0.4)}
         initial='hidden'
         animate='show'
         exit='hidden'
         className='mt-20 flex flex-col w-full xl:max-w-[48%] h-[480px]'
        >
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {
              aboutData.map((item,itemIndex)=>{
                return (
                  <div 
                  key={itemIndex}
                  className={` ${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={()=>setIndex(itemIndex)}
                  >
                    {item.title}
                  </div>
                )
              })
            }
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {
              aboutData[index].info.map((item,itemIndex)=>{
                return (
                  <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                    <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                    <div className='hidden md:flex'>-</div>
                    <div className=''>{item.stage}</div>
                    <div className='flex gap-x-4'>
                      {item.icons?.map((icon,itemIndex)=>{
                        return (
                          <div className='text-2xl text-white' key={itemIndex}>{icon}</div>
                        );
                      })}
                   </div>
                  </div>
                );
              })
            }
          </div>
        </motion.div>
      </div>

    </div>

  );
};

export default About;
