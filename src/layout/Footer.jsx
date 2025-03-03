import { Divider } from '@heroui/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LinkedInLogoIcon } from '@radix-ui/react-icons';
import { Icons } from '@/assets/icons/Icons';

const Footer = () => {
  return (
    <footer className="bg-black text-foreground py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Link
              to={'/'}
              className="text-xl font-bold text-primary hover:text-primary-dark transition-colors"
            >
              LMS
            </Link>
            <div className="flex gap-6">
              <Icons.facebookIcon className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              <Icons.youtubeIcon className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              <LinkedInLogoIcon className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </div>
          </div>
          <ul className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Privacy Policy', path: 'privacy-policy' },
              { name: 'Terms of Service', path: 'tos' },
              { name: 'Cookies Settings', path: 'cookies-settings' },
            ].map((el, index) => (
              <Link key={index} to={`/${el.path}`}>
                <motion.li
                  variants={hoverVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  {el.name}
                </motion.li>
              </Link>
            ))}
          </ul>
        </div>
        <Divider className="my-6 bg-divider" />
        <p className="text-center text-sm text-muted-foreground">
          © 2023 <span className="text-primary hover:text-primary-dark transition-colors">Pewds.</span> All rights reserved.
        </p>
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