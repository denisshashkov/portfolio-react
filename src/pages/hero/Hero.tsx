import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGithubSquare,
  FaLinkedin,
  FaTelegramPlane,
  FaSkype,
} from 'react-icons/fa';
import { SiMaildotru } from 'react-icons/si';
import { Link } from 'react-scroll';
import { MAvatar } from '../../components';
import {
  fromLeftAnimation,
  fromTopAnimation,
  fromRightAnimation,
  fromBottomAnimation,
} from '../../utils/helpers';

interface ILink {
  href: string;
  icon: React.ReactNode;
  delay: number;
}

export const Hero = () => {
  const links: ILink[] = [
    {
      href: 'https://github.com/denisshashkov',
      icon: <FaGithubSquare />,
      delay: 4,
    },
    {
      href: 'https://www.linkedin.com/in/denis-shashkov/',
      icon: <FaLinkedin />,
      delay: 5,
    },
    { href: 'https://t.me/DenisShashkov', icon: <FaTelegramPlane />, delay: 6 },
    {
      href: 'skype:live:.cid.44d3b6cd65314c71?chat',
      icon: <FaSkype />,
      delay: 7,
    },
    { href: 'mailto:shashkov381@gmail.com', icon: <SiMaildotru />, delay: 8 },
  ];

  return (
    <>
      <motion.section className='hero container'>
        <div className='hero__content'>
          <MAvatar
            custom={1}
            variants={fromTopAnimation}
            viewport={{ once: true }}
            initial='hidden'
            whileInView='visible'
            className='hero__image'
          />
          <div className='hero__title-wrap'>
            <motion.h1
              custom={2}
              initial='hidden'
              whileInView='visible'
              variants={fromLeftAnimation}
              viewport={{ once: true }}
              className='hero__title-name'
            >
              Шашков Денис
            </motion.h1>
            <motion.span
              custom={3}
              initial='hidden'
              whileInView='visible'
              variants={fromRightAnimation}
              viewport={{ once: true }}
              className='hero__title-about'
            >
              Я Frontend разработчик
            </motion.span>
          </div>
          <div className='hero__links'>
            {links.map((link) => (
              <motion.a
                custom={link.delay}
                initial='hidden'
                whileInView='visible'
                variants={fromBottomAnimation}
                viewport={{ once: true }}
                className='hero__title-about'
                key={link.href}
                href={link.href}
                target='blank'
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
        <motion.div
          custom={9}
          initial='hidden'
          whileInView='visible'
          variants={fromTopAnimation}
          viewport={{ once: true }}
          className='hero__scroll'
        >
          <Link to='about' spy={true} smooth={true} offset={0} duration={500}>
            <div className=' hero__scroll-mouse'></div>
          </Link>
          <span className='hero__scroll-text'>Scroll Down</span>
        </motion.div>
      </motion.section>
    </>
  );
};
