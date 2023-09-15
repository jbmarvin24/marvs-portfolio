import { FunctionComponent } from 'react';
import { FiDownload } from 'react-icons/fi';
import Paragraph from './common/Paragraph';
import Title from './common/Title';

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
  return (
    <section
      id="about"
      className="md:py-20 py-14 md:px-32 px-10 max-w-5xl mx-auto"
    >
      <Title className="mb-1 text-center">About me</Title>
      <p className="text-sm text-center">My introduction</p>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-14 gap-8 mt-10">
        <div className="mx-auto my-auto">
          <div className="avatar">
            <div className="w-80 rounded-xl">
              <img src="https://placehold.co/300" />
            </div>
          </div>
        </div>
        <div>
          <Paragraph className="leading-relaxed md:text-left text-center px-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            ipsam sint maiores mollitia odio repudiandae nihil at veritatis ab
            rerum fuga, modi, ex vero. Molestias hic animi in libero voluptates.
          </Paragraph>
          <div className="text-center">
            <button className="btn btn-primary mt-20 text-white">
              Download CV <FiDownload className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
