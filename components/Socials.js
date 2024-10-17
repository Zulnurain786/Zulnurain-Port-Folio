import Link from "next/link";
import {RiGithubLine,RiInstagramLine,RiBehanceLine,RiFacebookBoxLine,RiDribbbleLine,RiPinterestLine,RiLinkedinBoxLine} from 'react-icons/ri'


const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href='https://www.linkedin.com/in/zulnurain-arshad-a227b2302' className="hover:text-accent transition-all duration-300" >
        <RiLinkedinBoxLine />
      </Link>
      <Link href='https://github.com/Zulnurain786' className="hover:text-accent transition-all duration-300" >
        <RiGithubLine />
      </Link>
      <Link href='https://www.instagram.com/zunu_rathore/' className="hover:text-accent transition-all duration-300" >
        <RiInstagramLine />
      </Link>
      <Link href='https://www.facebook.com/zulnurain.arshad/' className="hover:text-accent transition-all duration-300" >
        <RiFacebookBoxLine />
      </Link>
      <Link href={'/'} className="hover:text-accent transition-all duration-300" >
        <RiBehanceLine />
      </Link>
      <Link href={'/'} className="hover:text-accent transition-all duration-300" >
        <RiPinterestLine />
      </Link>
    </div>

  );
};

export default Socials;
