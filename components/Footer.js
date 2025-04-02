import Image from "next/image";
import Logo from "../public/Assets/logo2.jpeg";
import Link from "next/link";
//
const Footer = () => {
  return (
    <footer className=' bottom-0 left-0 w-full mb-10 '>
      <hr className='my-6 border-[#707070] sm:mx-auto dark:border-gray-700 lg:my-8 max-w-7xl w-full' />
      <div className='w-full mx-auto max-w-7xl my-5 flex flex-row justify-between items-center'>
        <div>
          <Image src={Logo} alt='Logo' className='w-32 cursor-pointer' />
        </div>
        <div>
          <ul>
            <li>
              <Link
                className='hover:text-softRed transition-all ease-in-out hover:underline me-4 md:me-6  '
                href='/'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className='hover:text-softRed transition-all ease-in-out hover:underline me-4 md:me-6  '
                href='/about'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className='hover:text-softRed transition-all ease-in-out hover:underline me-4 md:me-6  '
                href='/terms'
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                className='hover:text-softRed transition-all ease-in-out hover:underline me-4 md:me-6  '
                href='/shipping'
              >
                Shipping & Return Policy
              </Link>
            </li>
            <li>
              <Link
                className='hover:text-softRed transition-all ease-in-out hover:underline me-4 md:me-6  '
                href='/privacy'
              >
                Privacy policy
              </Link>
            </li>
            <li>
              <Link
                className='hover:text-softRed transition-all ease-in-out hover:underline me-4 md:me-6  '
                href='/faq'
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className='my-6 border-[#707070] sm:mx-auto dark:border-gray-700 lg:my-8' />
      <div className='flex flex-row items-center justify-between text-sm text-gray-500 dark:text-gray-400 max-w-7xl w-full mx-auto'>
        <span>
          © {new Date().getFullYear()}. All Rights Reserved. |{" "}
          <Link href='https://github.com/satya-hash' className='font-bold'>
            View the source
          </Link>
        </span>
        <span>
          Created by <span className='font-bold'>Satya</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
