import Circles from '/components/Circles';
import {BsArrowRight} from 'react-icons/bs';
import {motion} from 'framer-motion';
const Contact = () => {
  return <div className='h-full bg-primary/30'>
    <div className='container mx-auto py-32 text-center xl:text-left flex-items-center justify-center'>
    <div className='flex flex-col w-full max-w-[700px]'>
    <h2 className='h2 text-center mb-12'>Let's <span className='text-accent'>connect.</span></h2>
    <form className='flex-1 flex flex-col gap-6 w-full mx-auto' action="">
      <div className='flex gap-x-6 w-full'>
        <input type="text" placeholder='name' className='input' />
        <input type="text" placeholder='email' className='input' />
      </div>
      <input type="text" placeholder='subject' className='input' />
      <textarea placeholder='message' className='textarea'></textarea>
      <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-cente overflow-hidden hover:border-accenet group'>
        <span className='group-hover:-translate-y-[120%] group-hover: opacity-1 transition-all duration-500'>
         Let's Talk!
        
        </span>
      </button>
    </form>
    </div>
    </div>
   </div>
};

export default Contact;
