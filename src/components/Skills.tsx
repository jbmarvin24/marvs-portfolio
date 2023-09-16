import { FunctionComponent, useState } from 'react';
import TechStackProgress from './common/TechStackProgress';
import { BiCodeAlt } from 'react-icons/bi';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { PiBooksDuotone } from 'react-icons/pi';
import { BsCheckLg } from 'react-icons/bs';
import Collapsible from './common/Collapsible';
import Title from './common/Title';
import SubTitle from './common/SubTitle';
import Paragraph from './common/Paragraph';

interface SkillsProps {}

const Skills: FunctionComponent<SkillsProps> = () => {
  const [hardSkillOpen, sethardSkillOpen] = useState(true);
  const [AdditionalSkillsOpen, setAdditionalSkillsOpen] = useState(false);

  return (
    <section
      id="skills"
      className="md:pt-20 p-10 pt-14 md:px-32 px-10 max-w-5xl mx-auto"
    >
      <Title className="mb-1 text-center">Skills</Title>
      <SubTitle>My technical level</SubTitle>
      <div className="mt-10 flex md:flex-row flex-col md:gap-28 gap-10">
        <div className="md:mx-0 mx-auto">
          <div className="flex flex-row gap-4">
            <BiCodeAlt className="text-primary w-10 h-10 my-auto" />
            <div>
              <h3 className="text-xl font-semibold">Hard skills</h3>
              <Paragraph>Technologies I'm experienced with</Paragraph>
            </div>

            <button onClick={() => sethardSkillOpen(!hardSkillOpen)}>
              <MdOutlineKeyboardArrowDown
                className={`text-primary w-8 h-8 my-auto ${
                  hardSkillOpen ? 'rotate-180' : ''
                } transition ease-in-out duration-300`}
              />
            </button>
          </div>
          <Collapsible isOpen={hardSkillOpen}>
            <div className="pb-5 pt-8 ml-14 flex flex-col max-w-xs mx-auto gap-6">
              <TechStackProgress name="Typescript" value={85} />
              <TechStackProgress name="C#" value={85} />
              <TechStackProgress name="ASP.NET MVC + API" value={80} />
              <TechStackProgress name="React JS" value={80} />
              <TechStackProgress name="Nest JS" value={80} />
              <TechStackProgress name="SQL" value={90} />
              <TechStackProgress name="HTML + CSS" value={80} />
            </div>
          </Collapsible>
        </div>

        <div className="md:mx-0 mx-auto">
          <div className="flex flex-row gap-4">
            <PiBooksDuotone className="text-primary w-10 h-10 my-auto" />
            <div>
              <h3 className="text-xl font-semibold">Additional skills</h3>
              <Paragraph>What helps me to perform at my best</Paragraph>
            </div>
            <button
              onClick={() => setAdditionalSkillsOpen(!AdditionalSkillsOpen)}
            >
              <MdOutlineKeyboardArrowDown
                className={`text-primary w-8 h-8 my-auto ${
                  AdditionalSkillsOpen ? 'rotate-180' : ''
                } transition ease-in-out duration-300`}
              />
            </button>
          </div>
          <Collapsible isOpen={AdditionalSkillsOpen}>
            <div className="pb-5 pt-8 flex flex-col max-w-xs mx-auto gap-6 ml-14">
              <p className="text-sm text-gray-400">Libraries & Tools</p>
              <p>
                <BsCheckLg className="text-primary inline-block w-6 h-6" /> Git
                + GitHub
              </p>
              <p>
                <BsCheckLg className="text-primary inline-block w-6 h-6" />{' '}
                Docker + DockerHub
              </p>
              <p>
                <BsCheckLg className="text-primary inline-block w-6 h-6" />{' '}
                Postman
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
                Azure + Azure DevOps
              </p>
              <p>
                <BsCheckLg className="text-primary inline-block w-6 h-6" />{' '}
                Firebase
              </p>
              <p className="text-sm text-gray-400">Others</p>
              <p>
                <BsCheckLg className="text-primary inline-block w-6 h-6" />{' '}
                Power BI
              </p>
            </div>
          </Collapsible>
        </div>
      </div>
    </section>
  );
};

export default Skills;
