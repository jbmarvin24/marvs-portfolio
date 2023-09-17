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

interface PortfolioProps {}

const Portfolio: FunctionComponent<PortfolioProps> = () => {
  const theme = useThemeStore((s) => s.theme);

  return (
    <section id="portfolio">
      <Container className="md:px-32 px-0">
        <Title className="mb-1 text-center">Portfolio</Title>
        <SubTitle>Most recent work</SubTitle>

        <div className="mt-6">
          <Carousel
            swipeable={false}
            renderArrowPrev={(onClickHandler, _, label) => (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute z-10 md:top-[calc(50%-3rem)] top-[calc(50%)] cursor-pointer left-0"
              >
                <IoIosArrowForward className="md:w-14 md:h-14 h-10 w-10 rotate-180 text-primary" />
              </button>
            )}
            renderArrowNext={(onClickHandler, _, label) => (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute z-10 md:top-[calc(50%-3rem)] top-[calc(50%)] cursor-pointer right-0"
              >
                <IoIosArrowForward className="md:w-14 md:h-14 h-10 w-10 text-primary" />
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
            {Array.from(Array(5), (_, i) => (
              <div
                key={`slide${i + 1}`}
                className="md:px-20 px-12 py-10 md:h-80 h-[34rem] text-left"
              >
                <PortfolioCard
                  name={`Project ${i + 1}`}
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          vero voluptatum facere ipsam sit magnam eum dicta cumque laudantium
          sed!"
                />
              </div>
            ))}
          </Carousel>

          <a
            href="/#"
            className="mt-5 text-sm text-center hover:underline cursor-pointer block"
          >
            Show all <FaArrowRight className="inline-block" />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
