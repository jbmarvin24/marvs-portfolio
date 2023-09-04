import { FunctionComponent } from 'react';
import { FiDownload } from 'react-icons/fi';

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
  return (
    <section className="py-10 md:px-32 px-10 max-w-5xl mx-auto">
      <h1 className="text-4xl font-semibold text-center mb-1">About me</h1>
      <p className="text-sm text-center">My introduction</p>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-8 mt-10">
        <div className="mx-auto my-auto">
          <div className="w-64 h-64 bg-red-400 rounded-md"></div>
        </div>
        <div>
          <p className="text-base leading-relaxed md:text-left text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            ipsam sint maiores mollitia odio repudiandae nihil at veritatis ab
            rerum fuga, modi, ex vero. Molestias hic animi in libero voluptates.
          </p>
          <div className="md:text-left text-center">
            <button className="btn btn-primary mt-10">
              Download CV <FiDownload className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
