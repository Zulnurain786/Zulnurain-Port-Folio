// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.jpg',
          link: 'https://flasholr.com/',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
          link: 'https://ya-hub.com/',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
          link: 'https://gotarepair.com/',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
          link: 'https://www.tour-tips.com/protected/set_tournament_history.php',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
          link:'https://www.qr-l24.com/index.php'
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
          link:'https://getsomesales.com/',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
          link:'https://app.wohnungsmappe.de/login',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};



import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import Image from 'next/image';
import {Pagination} from 'swiper'
import {BsArrowRight} from 'react-icons/bs'
import Link from 'next/link';


const WorkSlider = () => {
  return (
    <Swiper 
    spaceBetween={10}
    pagination={{    
      clickable: true,
    }}
    modules={[Pagination]}
    className='h-[280px] sm:h-[480px]'
    >
      {workSlides.slides.map((slide,index)=>{
        return (
        <SwiperSlide key={index}>
          <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
            {slide.images.map((image,index)=>{
              return (
                <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' key={index}>
                    <Link href={image.link ? image.link : '/'} >
                      <div className='flex items-center justify-center relative overflow-hidden group'>
                        <Image src={image.path} width={400} height={300} alt='' />
                        <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                        <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 duration-300'>
                          <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          <div className='delay-100'>LIVE</div>
                          <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>PROJECT</div>
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight /></div>
                          </div>
                        </div>
                      </div>
                    </Link>
                </div>
              )
            })}
          </div>
        </SwiperSlide>
        )
        
      })}

    </Swiper>
  );
};

export default WorkSlider;
