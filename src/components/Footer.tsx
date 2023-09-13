import { FunctionComponent } from 'react';
import { BiUpArrowAlt } from 'react-icons/bi';

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <footer className="mx-auto p-10 bg-[#0E111B] text-white">
      <div className="grid md:grid-cols-2 grid-cols-1 md:px-40 max-w-5xl mx-auto md:justify-items-stretch gap-20">
        <div>
          <h3 className="text-4xl font-semibold">Marvin</h3>
          <p className="text-sm mt-4">Fullstack developer</p>
        </div>
        <div className="md:justify-self-end">
          <ul className="grid md:grid-cols-3 grid-cols-1 gap-10 text-md">
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact&nbsp;Me</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-right">
        <a
          href="#"
          className="btn btn-primary md:px-1 px-2 md:opacity-70 opacity-80 min-h-0 md:h-8 rounded-md"
        >
          <BiUpArrowAlt className="md:w-5 md:h-5 w-8 h-8" />
        </a>
      </div>
      <p className="text-center text-xs text-gray-400 md:mt-16 mt-14">
        &copy; John Marvin Doniña. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
