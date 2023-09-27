import { FunctionComponent, useState } from 'react';
import TechStackProgress from './common/TechStackProgress';
import { BiCodeAlt } from 'react-icons/bi';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { PiBooksDuotone } from 'react-icons/pi';
import Title from './common/Title';
import SubTitle from './common/SubTitle';
import Paragraph from './common/Paragraph';
import Container from './common/Container';
import { BsFillCircleFill } from 'react-icons/bs';
import { HiOutlineLightBulb } from 'react-icons/hi';

interface SkillsProps {}

const Skills: FunctionComponent<SkillsProps> = () => {
  const [techStackOpen, setTechStackOpen] = useState(true);
  const [hardSkillOpen, setHardSkillOpen] = useState(false);
  const [additionalSkillsOpen, setAdditionalSkillsOpen] = useState(false);

  const toggleTechStack = () => setTechStackOpen(!techStackOpen);
  const toggleAddtlSkill = () => setAdditionalSkillsOpen(!additionalSkillsOpen);
  const toggleHardSkill = () => setHardSkillOpen(!hardSkillOpen);

  return (
    <section id="skills">
      <Container className="lg:px-10 px-6">
        <Title className="mb-1 text-center">Skills</Title>
        <SubTitle>My technical level</SubTitle>

        <div className="mt-10 flex lg:flex-row flex-col lg:gap-0 gap-10">
          {/* Tech Stack */}
          <div className="collapse">
            <input
              onChange={toggleTechStack}
              type="checkbox"
              checked={techStackOpen}
            />
            <div className="collapse-title">
              <div className="flex flex-row gap-4 justify-center">
                <BiCodeAlt className="text-primary w-12 h-12 my-auto" />
                <div>
                  <h3 className="text-xl font-semibold">Tech Stack</h3>
                  <Paragraph>Technologies I'm experienced with</Paragraph>
                </div>

                <button>
                  <MdOutlineKeyboardArrowDown
                    className={`text-primary w-8 h-8 my-auto ${
                      techStackOpen ? 'rotate-180' : ''
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

          {/* Hard Skills */}
          <div className="collapse">
            <input
              type="checkbox"
              onChange={toggleHardSkill}
              checked={hardSkillOpen}
            />
            <div className="collapse-title">
              <div className="flex flex-row gap-4 justify-center">
                <HiOutlineLightBulb className="text-primary w-12 h-12 my-auto" />
                <div>
                  <h3 className="text-xl font-semibold">Hard Skills</h3>
                  <Paragraph>
                    Proficiencies and talents I bring to the table
                  </Paragraph>
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
              <div className="py-8 flex flex-col max-w-sm mx-auto gap-6 pl-10 pr-4">
                <ul className="space-y-7">
                  <li>
                    <BsFillCircleFill className="text-primary inline-block w-2 h-2 mr-3" />
                    Develop Full stack web applications.
                  </li>
                  <li>
                    <BsFillCircleFill className="text-primary inline-block w-2 h-2 mr-3" />
                    Build Restful API's.
                  </li>
                  <li>
                    <BsFillCircleFill className="text-primary inline-block w-2 h-2 mr-3" />
                    Build Server-side logic and databases.
                  </li>
                  <li>
                    <BsFillCircleFill className="text-primary inline-block w-2 h-2 mr-3" />
                    Build cloud native applications.
                  </li>
                  <li>
                    <BsFillCircleFill className="text-primary inline-block w-2 h-2 mr-3" />
                    Perform testing and debugging.
                  </li>
                  <li>
                    <BsFillCircleFill className="text-primary inline-block w-2 h-2 mr-3" />
                    Build reports and dashboards for analysis.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Skills */}
          <div className="collapse">
            <input type="checkbox" onChange={toggleAddtlSkill} />
            <div className="collapse-title">
              <div className="flex flex-row gap-4 justify-center">
                <PiBooksDuotone className="text-primary w-12 h-12 my-auto" />
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
                  <BsFillCircleFill className="text-primary inline-block w-2 h-2 mr-2" />{' '}
                  Git + GitHub
                </p>
                <p>
                  <BsFillCircleFill className="text-primary inline-block w-2 h-2 mr-2" />{' '}
                  Docker + DockerHub
                </p>
                <p>
                  <BsFillCircleFill className="text-primary inline-block w-2 h-2 mr-2" />{' '}
                  Postman
                </p>
                <p className="text-sm text-gray-400">Databases</p>
                <p>
                  <BsFillCircleFill className="text-primary inline-block w-2 h-2 mr-2" />{' '}
                  SQL Server
                </p>
                <p>
                  <BsFillCircleFill className="text-primary inline-block w-2 h-2 mr-2" />{' '}
                  MySQL
                </p>
                <p>
                  <BsFillCircleFill className="text-primary inline-block w-2 h-2 mr-2" />{' '}
                  Postgres
                </p>
                <p className="text-sm text-gray-400">Cloud Platforms</p>
                <p>
                  <BsFillCircleFill className="text-primary inline-block w-2 h-2 mr-2" />{' '}
                  Azure + Azure DevOps
                </p>
                <p>
                  <BsFillCircleFill className="text-primary inline-block w-2 h-2 mr-2" />{' '}
                  Firebase
                </p>
                <p className="text-sm text-gray-400">Others</p>
                <p>
                  <BsFillCircleFill className="text-primary inline-block w-2 h-2 mr-2" />{' '}
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
