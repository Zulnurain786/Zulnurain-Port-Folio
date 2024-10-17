// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight
} from "react-icons/rx";

import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import {FreeMode,Pagination} from 'swiper'

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Creating impactful brand identities that resonate with your audience and elevate your business.'
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Designing user-friendly interfaces and graphics that enhance user experience and engagement.'
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Building responsive web applications using modern frameworks like Laravel,Python and Next.js for optimal performance.'
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Crafting compelling copy that communicates your brand message effectively and engages your target audience.'
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Implementing SEO strategies to improve visibility and drive organic traffic to your website.'
  }
  
];

const ServiceSlider = () => {
  return (
    <Swiper breakpoints={{
      320:{
        slidesPerView:1,
        spaceBetween:15,
      },
      640:{
        slidesPerView:3,
        spaceBetween:15,
      },
    }}
    freeMode={true}  
    pagination={{    
      clickable: true,
    }}
    modules={[FreeMode,Pagination]}
    className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item,index)=>{
        return (
        <SwiperSlide key={index}>
          <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
            <div className='text-4xl text-accent mb-4'>{item.icon}</div>
            <div className='mb-8'>
              <div className='mb-2 text-lg'>{item.title}</div>
              <p className='max-w-[350px] leading-normal'>{item.description}</p>
            </div>
            <div className='text-3xl'>
              <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
            </div>
          </div>
        </SwiperSlide>
        )
        
      })}

    </Swiper>
  );
};

export default ServiceSlider;
