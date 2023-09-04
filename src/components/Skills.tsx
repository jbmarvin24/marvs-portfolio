import { FunctionComponent, useState } from 'react';
import TechStackProgress from './common/TechStackProgress';
import { BiCodeAlt } from 'react-icons/bi';
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from 'react-icons/md';
import { PiBooksDuotone } from 'react-icons/pi';
import { BsCheckLg } from 'react-icons/bs';

interface SkillsProps {}

const Skills: FunctionComponent<SkillsProps> = () => {
  const [hardSkillOpen, sethardSkillOpen] = useState(true);
  const [AdditionalSkillsOpen, setAdditionalSkillsOpen] = useState(false);

  return (
    <section className="py-10 md:px-32 px-10 max-w-5xl mx-auto">
      <h1 className="text-4xl font-semibold text-center mb-1">Skills</h1>
      <p className="text-sm text-center">My technical level</p>
      <div className="mt-10 flex md:flex-row flex-col gap-16">
        <div>
          <div className="flex flex-row gap-4">
            <BiCodeAlt className="text-primary w-10 h-10 my-auto" />
            <div>
              <h3 className="text-xl font-semibold">Hard skills</h3>
              <p className="text-sm text-gray-400">
                Technologies I'm experienced with
              </p>
            </div>

            <button onClick={() => sethardSkillOpen(!hardSkillOpen)}>
              {hardSkillOpen ? (
                <MdOutlineKeyboardArrowUp className="text-primary w-8 h-8 my-auto" />
              ) : (
                <MdOutlineKeyboardArrowDown className="text-primary w-8 h-8 my-auto" />
              )}
            </button>
          </div>
          {hardSkillOpen && (
            <div className="mt-14 flex flex-col max-w-xs mx-auto gap-6">
              <TechStackProgress name="Typescript" value={80} />
              <TechStackProgress name="C#" value={80} />
              <TechStackProgress name="ASP.NET MVC + API" value={70} />
              <TechStackProgress name="React JS" value={85} />
              <TechStackProgress name="Nest JS" value={80} />
              <TechStackProgress name="SQL" value={90} />
              <TechStackProgress name="HTML+CSS" value={80} />
            </div>
          )}
        </div>

        <div>
          <div className="flex flex-row gap-4">
            <PiBooksDuotone className="text-primary w-10 h-10 my-auto" />
            <div>
              <h3 className="text-xl font-semibold">Additional skills</h3>
              <p className="text-sm text-gray-400">
                What helps me to perform at my best
              </p>
            </div>
            <button
              onClick={() => setAdditionalSkillsOpen(!AdditionalSkillsOpen)}
            >
              {AdditionalSkillsOpen ? (
                <MdOutlineKeyboardArrowUp className="text-primary w-8 h-8 my-auto" />
              ) : (
                <MdOutlineKeyboardArrowDown className="text-primary w-8 h-8 my-auto" />
              )}
            </button>
          </div>
          {AdditionalSkillsOpen && (
            <div className="mt-14 flex flex-col max-w-xs mx-auto gap-6">
              <p className="text-sm text-gray-400">Libraries & Tools</p>
              <p>
                <BsCheckLg className="text-primary inline-block w-6 h-6" />{' '}
                Express JS
              </p>
              <p>
                <BsCheckLg className="text-primary inline-block w-6 h-6" /> Git
                + GitHub
              </p>
              <p className="text-sm text-gray-400">Databases</p>
              <p>
                <BsCheckLg className="text-primary inline-block w-6 h-6" /> SQL
                Server
              </p>
              <p>
                <BsCheckLg className="text-primary inline-block w-6 h-6" />{' '}
                MySQL
              </p>
              <p>
                <BsCheckLg className="text-primary inline-block w-6 h-6" />{' '}
                Postgres
              </p>
              <p className="text-sm text-gray-400">Cloud Platforms</p>
              <p>
                <BsCheckLg className="text-primary inline-block w-6 h-6" />{' '}
                Firebase + Firestore
              </p>
              <p>
                <BsCheckLg className="text-primary inline-block w-6 h-6" />{' '}
                Azure + Azure DevOps
              </p>
              <p className="text-sm text-gray-400">Others</p>
              <p>
                <BsCheckLg className="text-primary inline-block w-6 h-6" />{' '}
                Power BI
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
