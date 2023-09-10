import { FunctionComponent, useState } from 'react';
import { BiSun } from 'react-icons/bi';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Collapsible from './common/Collapsible';

interface NavBarProps {}

const NavBar: FunctionComponent<NavBarProps> = () => {
  const [toggleMobileNav, setToggleMobileNav] = useState(false);

  return (
    <header>
      <nav className="p-8 px-10 max-w-4xl mx-auto text-white">
        <div className="flex justify-between mb-10">
          <a href="#" className="grow md:text-base text-lg">
            Marvin
          </a>
          <ul className="md:hidden flex gap-5">
            <li>
              <a href="">
                <BiSun className="inline-block h-7 w-7" />
              </a>
            </li>
            <li>
              <button
                className={`transition-transform  ${
                  toggleMobileNav ? 'rotate-180' : 'rotate-0'
                } ease-in-out duration-200`}
                onClick={() => setToggleMobileNav(!toggleMobileNav)}
              >
                {toggleMobileNav ? (
                  <AiOutlineClose className="inline-block h-7 w-7" />
                ) : (
                  <AiOutlineMenu className="inline-block h-7 w-7" />
                )}
              </button>
            </li>
          </ul>

          <ul className="md:flex gap-10 hidden text-sm">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Skills</a>
            </li>
            <li>
              <a href="">Portfolio</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">
                <BiSun className="inline-block h-5 w-5" />
              </a>
            </li>
          </ul>
        </div>

        <Collapsible isOpen={toggleMobileNav}>
          <ul className="grid grid-cols-1 gap-5 text-base">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Skills</a>
            </li>
            <li>
              <a href="">Portfolio</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </Collapsible>
      </nav>
    </header>
  );
};

export default NavBar;
