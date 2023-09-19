import { FunctionComponent, useState } from 'react';
import TechStackProgress from './common/TechStackProgress';
import { BiCodeAlt } from 'react-icons/bi';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { PiBooksDuotone } from 'react-icons/pi';
import { BsCheckLg } from 'react-icons/bs';
import Title from './common/Title';
import SubTitle from './common/SubTitle';
import Paragraph from './common/Paragraph';
import Container from './common/Container';

interface SkillsProps {}

const Skills: FunctionComponent<SkillsProps> = () => {
  const [hardSkillOpen, setHardSkillOpen] = useState(true);
  const [additionalSkillsOpen, setAdditionalSkillsOpen] = useState(false);

  const toggleHardSkill = () => setHardSkillOpen(!hardSkillOpen);
  const toggleAddtlSkill = () => setAdditionalSkillsOpen(!additionalSkillsOpen);

  return (
    <section id="skills">
      <Container className="lg:px-32 px-6">
        <Title className="mb-1 text-center">Skills</Title>
        <SubTitle>My technical level</SubTitle>

        <div className="mt-10 flex lg:flex-row flex-col lg:gap-20 gap-10">
          {/* Hard Skills */}
          <div className="collapse">
            <input
              onChange={toggleHardSkill}
              type="checkbox"
              checked={hardSkillOpen}
            />
            <div className="collapse-title">
              <div className="flex flex-row gap-4 justify-center">
                <BiCodeAlt className="text-primary w-10 h-10 my-auto" />
                <div>
                  <h3 className="text-xl font-semibold">Hard skills</h3>
                  <Paragraph>Technologies I'm experienced with</Paragraph>
                </div>

                <button>
                  <MdOutlineKeyboardArrowDown
                    className={`text-primary w-8 h-8 my-auto ${
                      hardSkillOpen ? 'rotate-180' : ''
                    } transition ease-in-out duration-300`}
                  />
                </button>
              </div>
            </div>

            <div className="collapse-content">
              <div className="flex flex-col gap-6 max-w-sm py-8 px-10 mx-auto">
                <TechStackProgress name="Typescript" value={85} />
                <TechStackProgress name="C#" value={85} />
                <TechStackProgress name="ASP.NET MVC + API" value={80} />
                <TechStackProgress name="React JS" value={80} />
                <TechStackProgress name="Nest JS" value={80} />
                <TechStackProgress name="SQL" value={90} />
                <TechStackProgress name="HTML + CSS" value={80} />
              </div>
            </div>
          </div>

          {/* Additional Skills */}
          <div className="collapse">
            <input type="checkbox" onClick={toggleAddtlSkill} />
            <div className="collapse-title">
              <div className="flex flex-row gap-4 justify-center">
                <PiBooksDuotone className="text-primary w-10 h-10 my-auto" />
                <div>
                  <h3 className="text-xl font-semibold">Additional skills</h3>
                  <Paragraph>What helps me to perform at my best</Paragraph>
                </div>
                <button>
                  <MdOutlineKeyboardArrowDown
                    className={`text-primary w-8 h-8 my-auto ${
                      additionalSkillsOpen ? 'rotate-180' : ''
                    } transition ease-in-out duration-300`}
                  />
                </button>
              </div>
            </div>
            <div className="collapse-content">
              <div className="py-8 flex flex-col max-w-sm mx-auto gap-6 px-10">
                <p className="text-sm text-gray-400">Libraries & Tools</p>
                <p>
                  <BsCheckLg className="text-primary inline-block w-6 h-6" />{' '}
                  Git + GitHub
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
                  <BsCheckLg className="text-primary inline-block w-6 h-6" />{' '}
                  SQL Server
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
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
