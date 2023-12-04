import { FunctionComponent } from 'react';
import { FiDownload } from 'react-icons/fi';
import Paragraph from './common/Paragraph';
import Title from './common/Title';
import SubTitle from './common/SubTitle';
import Container from './common/Container';

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
  return (
    <section id="about">
      <Container className="lg:px-52 px-6">
        <Title className="mb-1 text-center">About me</Title>
        <SubTitle>My introduction</SubTitle>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-8 mt-16">
          <div className="mx-auto my-auto">
            <div className="avatar">
              <div className="w-80 rounded-xl">
                <img src="img/marvs-about.jpg" alt="About image" />
              </div>
            </div>
          </div>
          <div>
            <Paragraph className="leading-relaxed lg:text-left text-center">
              Full Stack Web Developer specializing in TypeScript and ASP.NET
              C#. Enthusiast of Rubik's Cube solving. Passionate about crafting
              impactful digital solutions that blend creativity and
              functionality.
            </Paragraph>
            <div className="text-center">
              <a
                href="https://drive.google.com/file/d/1Pz8ZaHv2XfZakmCwYDsOi7JyVtV8Pt--/view?usp=sharing"
                target="_blank"
                className="btn btn-primary lg:mt-20 mt-14 text-white"
              >
                Download CV <FiDownload className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
