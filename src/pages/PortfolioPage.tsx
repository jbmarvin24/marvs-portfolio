import { FunctionComponent, useEffect, useRef, useState } from 'react';
import Container from '../components/common/Container';
import Title from '../components/common/Title';
import SubTitle from '../components/common/SubTitle';
import Paragraph from '../components/common/Paragraph';
import { BsGithub } from 'react-icons/bs';
import { FaArrowRight } from 'react-icons/fa';
import { IPortfolio, portfolios } from '../data/portfolios';
import useThemeStore from '../themeStore';
import classNames from 'classnames';

interface PortfolioPageProps {}

const PortfolioPage: FunctionComponent<PortfolioPageProps> = () => {
  const theme = useThemeStore((s) => s.theme);
  const dialogRef = useRef(null);
  const [selectedPortfolio, setSelectedPortfolio] = useState<IPortfolio | null>(
    null
  );

  const handleDialogOpen = (portfolio: IPortfolio) => {
    setSelectedPortfolio(portfolio);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dialogRef.current?.showModal();
  };
  // console.log(ref);

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
                    <div className="space-x-4 grow my-auto">
                      {p.gitHubRepoUrl && (
                        <div
                          className="tooltip tooltip-top"
                          data-tip="repository"
                        >
                          <a href={p.gitHubRepoUrl} target="_blank">
                            <BsGithub className="w-6 h-6 mt-2" />
                          </a>
                        </div>
                      )}
                    </div>
                    {p.moreInfo && (
                      <button
                        className="btn btn-outline"
                        onClick={() => handleDialogOpen(p)}
                      >
                        More Info
                      </button>
                    )}
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

        <dialog id="my_modal_1" className="modal" ref={dialogRef}>
          <div className="modal-box">
            <h3 className="font-bold text-lg">{selectedPortfolio?.name}</h3>
            <div className="py-4 space-y-5">
              {selectedPortfolio?.moreInfo?.map((info, i) => (
                <div key={i} className="space-y-2">
                  <h6 className="font-medium">{info.title}</h6>
                  <ul className="list-disc list-inside">
                    {info.content.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </Container>
    </section>
  );
};

export default PortfolioPage;
