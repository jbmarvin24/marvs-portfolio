import { FunctionComponent } from 'react';
import { BiSend } from 'react-icons/bi';
import { CgMouse } from 'react-icons/cg';
import { FiArrowDown } from 'react-icons/fi';

interface HeroProps {}

const Hero: FunctionComponent<HeroProps> = () => {
  return (
    <section className="py-10 px-10 max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-10">
        <div className="md:ml-auto">
          <div className="w-64 h-64 bg-red-400 rounded-md"></div>
        </div>
        <div className="text-left">
          <h1 className="text-5xl font-semibold my-3">Hi, I'm Marvin</h1>
          <h3 className="my-3 font-medium text-lg">Fullstack developer</h3>
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
            molestias.
          </p>
          <button className="btn btn-primary my-6">
            Contact Me
            <BiSend className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="mt-24 md:flex flex-row gap-2 items-center ml-28 hidden">
        <CgMouse className="w-6 h-6 text-primary" />
        <p className="text-sm">Scroll down</p>
        <FiArrowDown className="text-primary" />
      </div>
    </section>
  );
};

export default Hero;
