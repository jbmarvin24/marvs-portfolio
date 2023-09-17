import { FunctionComponent } from 'react';
import { BiUpArrowAlt } from 'react-icons/bi';
import Title from './common/Title';
import useThemeStore from '../themeStore';
import classNames from 'classnames';

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  const theme = useThemeStore((s) => s.theme);

  return (
    <footer
      className={classNames('mx-auto p-10 ', {
        'bg-[#0E111B]': theme === 'dark',
        'bg-primary': theme === 'light',
        'text-gray-100': theme == 'dark',
        'text-gray-50': theme == 'light',
      })}
    >
      <div className="grid md:grid-cols-2 grid-cols-1 md:px-40 max-w-5xl mx-auto md:justify-items-stretch md:gap-20 gap-16">
        <div>
          <Title>Marvin</Title>
          <p className="text-sm mt-4">Fullstack developer</p>
        </div>
        <div className="md:justify-self-end">
          <ul className="grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-5 text-md">
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
          className={classNames(
            'btn btn-primary md:px-1 px-1 md:opacity-100 opacity-80 min-h-0 h-9 md:h-8 rounded-md',
            {
              'border-gray-300': theme === 'light',
              'text-gray-50': theme === 'light',
            }
          )}
        >
          <BiUpArrowAlt className="md:w-5 md:h-5 w-6 h-6" />
        </a>
      </div>
      <p
        className={classNames('text-center text-xs md:mt-16 mt-5', {
          'text-gray-400': theme === 'dark',
          'text-gray-300': theme == 'light',
        })}
      >
        &copy; John Marvin Doniña. All rights reserved |{' '}
        <a
          href="https://www.behance.net/213c339b"
          className="text-xs mt-5"
          target="_blank"
        >
          Designed by Мария Ларичева
        </a>
      </p>
    </footer>
  );
};

export default Footer;
