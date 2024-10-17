import React,{useRef } from "react";
import Circles from "../../components/Circles";
import { BsArrowRight } from "react-icons/bs";
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'



const Contact = () => {
  
const formRef = useRef();

const sendEmail = async (e) => {
  e.preventDefault(); // Prevent the default form submission

  const formData = new FormData(formRef.current);
  const data = Object.fromEntries(formData.entries());
  // console.log(data);

  const res =  await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/mail`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  let response = await res.json()
  // console.log(response)
  if (response.status === 'success') {
    e.target.reset()
    alert("Email sent successfully!");


    
  }


  // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_USER_ID')
  //   .then((result) => {
  //     console.log(result.text);
  //     alert('Email sent successfully!');
  //   }, (error) => {
  //     console.log(error.text);
  //     alert('Error sending email. Please try again.');
  //   });
};



  return (
    <div className='container bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px]'>
          <motion.h2 
            variants={fadeIn('up',0.2)}hidden
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'
            >Let&#39;s <span className='text-accent'>connect.</span></motion.h2>
          <motion.form 
           ref={formRef}
           onSubmit={sendEmail}
           variants={fadeIn('up',0.4)}
           initial='hidden'
           animate='show'
           exit='hidden'
           className='flex-1 flex flex-col gap-6 w-full mx-auto'
          >
            <div className='flex gap-x-6 w-full'>
              <input type='text' name='username' placeholder='name' className='input' />
              <input type='email' name='useremail' placeholder='email' className='input' />
            </div>
            <input type='text' name='usersubject' placeholder='subject' className='input' />
            <textarea name='usermessage' placeholder='message' className='textarea'></textarea>
            <button type='submit' className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Let&#39;s talk</span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </button>
          </motion.form> 
        </div>
      </div>

    </div>
  );
};

export default Contact;
