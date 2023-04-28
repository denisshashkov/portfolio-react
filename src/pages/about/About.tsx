import React from 'react';
import { MAvatar, MProgressBar, MSectionTitle } from '../../components';
import { MButton } from '../../ui';
import { motion } from 'framer-motion';
import {
  fromBottomAnimation,
  fromLeftAnimation,
  fromRightAnimation,
  titleAnimation,
} from '../../utils/helpers';

interface ITestData {
  title: string;
  bgcolor: string;
  completed: number;
  delay: number;
}

export const About = () => {
  const testData: ITestData[] = [
    { title: 'React', bgcolor: '#6a1b9a', completed: 60, delay: 2 },
    { title: 'React', bgcolor: '#00695c', completed: 30, delay: 3 },
    { title: 'React', bgcolor: '#ef6c00', completed: 84, delay: 4 },
    { title: 'React', bgcolor: 'red', completed: 93, delay: 5 },
    { title: 'React', bgcolor: 'green', completed: 45, delay: 6 },
  ];
  return (
    <motion.section className='about container section'>
      <div className='about__title'>
        <MSectionTitle
          custom={1}
          variants={titleAnimation}
          viewport={{ amount: 0.2, once: true }}
          initial='hidden'
          whileInView='visible'
          className='about__title-text'
        >
          Обо Мне
        </MSectionTitle>
      </div>
      <div className='about__content'>
        <MAvatar
          custom={1}
          variants={fromLeftAnimation}
          viewport={{ amount: 0.2, once: true }}
          initial='hidden'
          whileInView='visible'
          className='about__image'
        />
        <motion.div
          custom={1}
          variants={fromRightAnimation}
          viewport={{ amount: 0.2, once: true }}
          initial='hidden'
          whileInView='visible'
          className='about__card'
        >
          <div className='about__card-left'>
            <article className='about__card-text'>
              I Am Wahid Ahmed . I Am Proposal Web Designer And Video Editor. I
              have rich experience in web site design and building and
              customization, also I am good at WordPress. and also make proposal
              video editor for you band
            </article>
            <MButton
              custom={7}
              variants={fromBottomAnimation}
              viewport={{ amount: 0.2, once: true }}
              initial='hidden'
              whileInView='visible'
              className='about__btn'
            >
              Загрузить резюме
            </MButton>
          </div>
          <div className='about__card-right'>
            <div className='about__card-skills'>
              {testData.map((item: ITestData, idx: number) => (
                <MProgressBar
                  custom={item.delay}
                  variants={fromBottomAnimation}
                  viewport={{ amount: 0.2, once: true }}
                  initial='hidden'
                  whileInView='visible'
                  className='about__card-progressbar'
                  key={idx}
                  bgcolor={item.bgcolor}
                  completed={item.completed}
                  title={item.title}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
