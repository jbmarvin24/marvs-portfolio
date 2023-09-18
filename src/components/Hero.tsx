import { FunctionComponent } from 'react';
import { BiSend } from 'react-icons/bi';
import { CgMouse } from 'react-icons/cg';
import { FiArrowDown } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';
import { RiLinkedinLine } from 'react-icons/ri';
import useThemeStore from '../themeStore';
import Paragraph from './common/Paragraph';
import { contacts } from '../data/contacts';
import Container from './common/Container';

interface HeroProps {}

const Hero: FunctionComponent<HeroProps> = () => {
  const theme = useThemeStore((s) => s.theme);

  return (
    <section className="lg:mb-14 lg:mt-14">
      <Container className="lg:px-32 px-6">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
          <div className="">
            <div className="flex items-center lg:gap-12 gap-12">
              <div className="flex flex-col gap-6">
                <div className="tooltip tooltip-top" data-tip="LinkedIn">
                  <a href={contacts.linkedIn.link} target="_blank">
                    <RiLinkedinLine className="w-6 h-6 text-primary" />
                  </a>
                </div>
                <div className="tooltip tooltip-top" data-tip="GitHub">
                  <a href={contacts.gitHub.link} target="_blank">
                    <FiGithub className="w-6 h-6 text-primary" />
                  </a>
                </div>
              </div>
              <div className="avatar lg:ml-auto">
                <div className="lg:w-72 w-52 mask mask-hexagon-2">
                  <img src="https://placehold.co/300" />
                </div>
              </div>
            </div>
          </div>
          <div className="text-left my-auto">
            <h1 className="text-5xl font-semibold my-3">Hi, I'm Marvin</h1>
            <h3
              className={`my-3 font-medium text-lg  ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Fullstack developer
            </h3>
            <Paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
              molestias.
            </Paragraph>
            <a href="#contact" className="my-6 btn btn-primary capitalize">
              Contact Me
              <BiSend className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="mt-24 lg:flex flex-row gap-2 items-center ml-28 hidden">
          <CgMouse className="w-6 h-6 text-primary" />
          <p className="text-sm font-medium">Scroll down</p>
          <FiArrowDown className="text-primary" />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
