import Image from "next/image";
import Link from "next/link";
import Socials from '../components/Socials'

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <Link href={'/'}>
            <h1 className='text-4xl font-semibold'>Zulnurain <span  className='font-extralight hidden lg:inline-block'>Arshad</span><span className='text-accent font-extralight hidden lg:inline-block'>.</span></h1>
            {/* <Image 
            src={'/logo.svg'}
            width={220}
            height={48}
            alt=''
            priority={true}
            /> */}
          </Link>
          <Socials />
        </div>
        
      </div>
    </header>

  );
};

export default Header;
