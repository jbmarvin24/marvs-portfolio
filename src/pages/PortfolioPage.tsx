import { FunctionComponent, useEffect } from 'react';
import Container from '../components/common/Container';
import Title from '../components/common/Title';
import SubTitle from '../components/common/SubTitle';
import Paragraph from '../components/common/Paragraph';
import { BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

interface PortfolioPageProps {}

const PortfolioPage: FunctionComponent<PortfolioPageProps> = () => {
  useEffect(() => {
    window.scroll({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <section>
      <Container className="my-20">
        <Title className="mb-1 text-center">Portfolio</Title>
        <SubTitle>Most recent work</SubTitle>

        <div className="flex flex-wrap gap-16 mt-16 justify-center">
          {Array.from(Array(10), (_, i) => (
            <div key={i} className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={`https://picsum.photos/400/200?random=${i + 1}`}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Project {i + 1}</h2>
                {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                <div className="flex flex-wrap gap-3">
                  <div className="badge badge-primary mt-2">Typescript</div>
                  <div className="badge badge-primary mt-2">React JS</div>
                  <div className="badge badge-primary mt-2">Express JS</div>
                </div>
                <Paragraph className="mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dignissimos fugit maiores corrupti obcaecati ratione earum.
                </Paragraph>
                <div className="card-actions mt-5">
                  <div className="grow my-auto">
                    <div className="tooltip tooltip-top" data-tip="Repository">
                      <a href="#" target="_blank">
                        <BsGithub className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <button className="btn btn-primary">Demo</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-16">
          <Link to="/" className="link">
            <FaArrowRight className="w-5 h-5 inline-block mr-1 rotate-180" />
            Back
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default PortfolioPage;
