import { FunctionComponent } from 'react';
import { BiSend } from 'react-icons/bi';

interface HeroProps {}

const Hero: FunctionComponent<HeroProps> = () => {
  return (
    <section>
      <div className="text-center py-10">
        <div className="inline-block mx-auto mr-5">
          <div className="w-64 h-64 bg-red-400"></div>
        </div>
        <div className="inline-block mx-auto text-left w-96">
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
    </section>
  );
};

export default Hero;
