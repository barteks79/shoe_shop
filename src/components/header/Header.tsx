import Link from 'next/link';
import { IoChevronDownSharp } from 'react-icons/io5';

export default function Header() {
   return (
	  <header className="flex justify-center bg-gradient-primary bg-cover h-header font-instrument">
		 <ul className="flex justify-between items-center w-header-wrapper text-white 2xl:font-medium">
			<li className="hidden 2xl:inline text-header-small 2xl:text-header-big">
			   <p>December 24, 2024</p>
			</li>
			<li className="flex items-center gap-5 h-full text-header-small 2xl:text-header-big">
			   <p>Get 50% Off on your First pair of Shoes</p>
			   <div className="hidden 2xl:block h-1/2 bg-white w-[1px]" />
			   <p className="hidden 2xl:inline">Shop Now</p>
			</li>
			<li className="flex items-center gap-2 h-full text-header-small 2xl:text-header-big">
			   <button className="flex items-center gap-1 px-2 py-1">
				  <p>English</p>
				  <IoChevronDownSharp />
			   </button>
			   <div className="block 2xl:hidden h-1/2 bg-white w-[1px]" />
			   <Link className="px-1 py-1" href="/">Contact Us</Link>
			</li>
		 </ul>
	  </header>
   );
}