import { FunctionComponent } from 'react';
import PortfolioCard from './common/PortfolioCard';
import { FaArrowRight } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { IoIosArrowForward } from 'react-icons/io';
import Title from './common/Title';
import SubTitle from './common/SubTitle';
import classNames from 'classnames';
import useThemeStore from '../themeStore';
import Container from './common/Container';
import { Link } from 'react-router-dom';
import { portfolios } from '../data/portfolios';

interface PortfolioProps {}

const Portfolio: FunctionComponent<PortfolioProps> = () => {
  const theme = useThemeStore((s) => s.theme);

  return (
    <section id="portfolio">
      <Container className="lg:px-32 px-0">
        <Title className="mb-1 text-center">Portfolio</Title>
        <SubTitle>Most recent work</SubTitle>

        <div className="mt-6">
          <Carousel
            swipeable={false}
            showThumbs={false}
            renderArrowPrev={(onClickHandler, _, label) => (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute z-10 lg:top-[calc(50%-3rem)] top-[calc(50%)] cursor-pointer left-0"
              >
                <IoIosArrowForward className="lg:w-14 lg:h-14 h-10 w-10 rotate-180 text-primary" />
              </button>
            )}
            renderArrowNext={(onClickHandler, _, label) => (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute z-10 lg:top-[calc(50%-3.5rem)] top-[calc(50%)] cursor-pointer right-0"
              >
                <IoIosArrowForward className="lg:w-14 lg:h-14 h-10 w-10 text-primary" />
              </button>
            )}
            statusFormatter={() => ''}
            renderIndicator={(onClickHandler, isSelected, index, label) => {
              if (isSelected) {
                return (
                  <li
                    className="w-2 h-2 inline-block my-0 mx-2 bg-primary rounded-full"
                    aria-label={`Selected: ${label} ${index + 1}`}
                    title={`Selected: ${label} ${index + 1}`}
                  />
                );
              }
              return (
                <li
                  className={classNames(
                    'w-2 h-2 inline-block my-0 mx-2 rounded-full',
                    {
                      'bg-gray-700': theme === 'dark',
                      'bg-gray-300': theme === 'light',
                    }
                  )}
                  onClick={onClickHandler}
                  onKeyDown={onClickHandler}
                  value={index}
                  key={index}
                  role="button"
                  tabIndex={0}
                  title={`${label} ${index + 1}`}
                  aria-label={`${label} ${index + 1}`}
                />
              );
            }}
          >
            {portfolios
              .filter((p) => p.isTop)
              .sort((a, b) => a.order - b.order)
              .map((p, i) => (
                <div
                  key={`slide${i + 1}`}
                  className="lg:px-20 px-12 py-10 lg:h-[23rem] h-[34rem] text-left"
                >
                  <PortfolioCard portfolio={p} />
                </div>
              ))}
          </Carousel>

          <div className="mt-5 mx-auto text-center">
            <Link to="/portfolio" className="text-sm hover:underline">
              Show all <FaArrowRight className="inline-block" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
