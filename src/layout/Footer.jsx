import { Divider } from '@heroui/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LinkedInLogoIcon } from '@radix-ui/react-icons';
import { Icons } from '@/assets/icons/Icons';

const Footer = () => {
  return (
    <footer className="  max-w-7xl w-[93%] mx-auto">
      <div className="  py-10 gap-10 lg:gap-0   flex justify-between">
        <div className="md:flex-row flex-col flex gap-10 items-center">
          <Link
            to={'/'}
            className="flex items-center  justify-center text-base font-semibold"
          >
            Healthify
          </Link>
        </div>
        <div className="flex gap-8 justify-center">
          <Icons.facebookIcon className=" h-6 w-6" />
          <Icons.youtubeIcon className=" h-6 w-6" />

          <LinkedInLogoIcon className=" h-6 w-6" />
        </div>
      </div>

      <Divider className="mb-8 bg-divider" />

      <div className="pb-8 flex flex-col md:flex-row  gap-4 justify-between items-center ">
        <p className="text-tiny  text-light-50  text-center">
          2023 <span className=" hover:text-danger"> Pewds. </span> All right
          reserved.
        </p>
        <ul className=" list-none flex justify-center flex-wrap items-center   gap-4">
          {[
            { name: 'Privacy Policy', path: 'privacy-policy' },

            { name: 'Terms of Service', path: 'tos' },
            { name: 'Cookies Settings', path: 'cookies-settings' },
          ].map((el, index) => {
            return (
              <Link key={index} to={`/${el?.path}`}>
                <motion.li
                  variants={hoverVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className=" cursor-pointer text-light-50  text-tiny  underline underline-offset-1"
                >
                  {el.name}
                </motion.li>
              </Link>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
const hoverVariants = {
  hidden: {
    opacity: 0,
    x: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      type: 'spring',
      stiffness: 300,
    },
  },
  hover: {
    scale: [1, 1.06, 1, 1.06, 1],
    originX: 0,
    color: '#428ee6',
  },
};
