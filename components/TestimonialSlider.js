// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Working with Zulnurain has been a game changer for my business. His attention to detail and ability to translate my ideas into reality truly impressed me!'
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
      'Zulnurain’s creativity and technical skills brought my vision to life. The final product exceeded my expectations, and I’ve received so many compliments!'
  },
  {
    image: '/t-avt-3.png',
    name: 'John Doe',
    position: 'Customer',
    message:
      'I couldn’t be happier with the service I received! Zulnurain not only delivered on time but also provided valuable insights throughout the project. Highly recommended!'
  }
];




import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image';
import {Navigation,Pagination} from 'swiper'
import {FaQuoteLeft} from 'react-icons/fa'


const TestimonialSlider = () => {
  return (
    <Swiper 
    navigation={true}
    pagination={{    
      clickable: true,
    }}
    modules={[Navigation,Pagination]}
    className='h-[400px]'
    >
      {testimonialData.map((person,index)=>{
        return (
        <SwiperSlide key={index}>
          <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
            <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
              <div className='flex flex-col justify-center text-center'>
                <div className='mb-2 mx-auto'>
                  <Image src={person.image} width={100} height={100} alt='' />
                </div>
                <div className='text-lg'>{person.name}</div>
                <div className='text-[12px] uppercase font-extralight tracking-widest'>{person.position}</div>
              </div>
            </div>
            <div className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
              <div className='mb-4'> 
                <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
              </div>
              <div className='xl:text-lg text-center md:text-left'>{person.message}</div>
            </div>
          </div>
        </SwiperSlide>
        )
        
      })}

    </Swiper>
  );
};

export default TestimonialSlider;
