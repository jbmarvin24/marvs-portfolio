import { FunctionComponent, useEffect } from 'react';
import Container from '../components/common/Container';
import Title from '../components/common/Title';
import SubTitle from '../components/common/SubTitle';
import Paragraph from '../components/common/Paragraph';
import { BsGithub } from 'react-icons/bs';
import { FaArrowRight } from 'react-icons/fa';
import { portfolios } from '../data/portfolios';
import useThemeStore from '../themeStore';
import classNames from 'classnames';

interface PortfolioPageProps {}

const PortfolioPage: FunctionComponent<PortfolioPageProps> = () => {
  const theme = useThemeStore((s) => s.theme);

  useEffect(() => {
    window.scroll({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <section>
      <Container className="my-20">
        <Title className="mb-1 text-center">Portfolio</Title>
        <SubTitle>Most recent work</SubTitle>

        <div className="flex flex-wrap gap-16 mt-16 justify-center">
          {portfolios
            .sort((a, b) => a.order - b.order)
            .map((p, i) => (
              <div
                key={i}
                className={classNames('card w-96 shadow-xl', {
                  'bg-[#1D2335]': theme === 'dark',
                  'bg-white': theme === 'light',
                })}
              >
                <figure>
                  <img
                    className="object-fill h-48 w-full"
                    src={p.image}
                    alt="Portfolio Image"
                  />
                </figure>
                <div className="card-body">
                  <h2
                    className={classNames('card-title', {
                      'text-gray-100': theme === 'dark',
                      'text-gray-900': theme === 'light',
                    })}
                  >
                    {p.name}
                  </h2>

                  <div className="flex flex-wrap gap-3 mt-1">
                    {p.techStacks.map((stack, i) => (
                      <div
                        key={i}
                        className={classNames('badge', {
                          'badge-ghost': theme === 'light',
                          'badge-neutral': theme === 'dark',
                        })}
                      >
                        {stack}
                      </div>
                    ))}
                  </div>
                  <Paragraph className="mt-2">{p.description}</Paragraph>
                  <div className="card-actions mt-5">
                    <div className="grow my-auto">
                      {p.gitHubRepoUrl && (
                        <div
                          className="tooltip tooltip-top"
                          data-tip="repository"
                        >
                          <a href={p.gitHubRepoUrl} target="_blank">
                            <BsGithub className="w-5 h-5" />
                          </a>
                        </div>
                      )}
                    </div>
                    {p.demoUrl && (
                      <a
                        href={p.demoUrl}
                        target="_blank"
                        className="btn btn-primary text-white"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="flex justify-center mt-16">
          <button className="link" onClick={() => window.history.back()}>
            <FaArrowRight className="w-5 h-5 inline-block mr-1 rotate-180" />
            Back
          </button>
        </div>
      </Container>
    </section>
  );
};

export default PortfolioPage;
