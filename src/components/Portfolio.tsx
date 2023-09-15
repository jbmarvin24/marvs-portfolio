import { CSSProperties, FunctionComponent } from 'react';
import PortfolioCard from './common/PortfolioCard';
import { FaArrowRight } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { IoIosArrowForward } from 'react-icons/io';
import Title from './common/Title';

interface PortfolioProps {}

const Portfolio: FunctionComponent<PortfolioProps> = () => {
  const arrowStyles: CSSProperties = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 3rem)',
    cursor: 'pointer',
  };

  return (
    <section id="portfolio" className="py-20 px-10 max-w-4xl mx-auto">
      <Title className="mb-1 text-center">Portfolio</Title>
      <p className="text-sm text-center">Most recent work</p>

      <div className="md:mt-16 mt-8">
        <Carousel
          // className="max-w-4xl"
          renderArrowPrev={(onClickHandler, _, label) => (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, left: 0 }}
            >
              <IoIosArrowForward className="md:w-14 md:h-14 h-10 w-10 rotate-180 text-primary" />
            </button>
          )}
          renderArrowNext={(onClickHandler, _, label) => (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, right: 0 }}
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
                className="w-2 h-2 inline-block my-0 mx-2 bg-gray-700 rounded-full"
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
          <div key="slide1" className="px-20 py-10 md:h-80 h-[32rem] text-left">
            <PortfolioCard
              name="Project 1"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          vero voluptatum facere ipsam sit magnam eum dicta cumque laudantium
          sed!"
            />
          </div>
          <div
            key="slide2"
            className=" px-20 py-10 md:h-80 h-[32rem] text-left"
          >
            <PortfolioCard
              name="Project 2"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          vero voluptatum facere ipsam sit magnam eum dicta cumque laudantium
          sed!"
            />
          </div>
          <div
            key="slide2"
            className=" px-20 py-10 md:h-80 h-[32rem] text-left"
          >
            <PortfolioCard
              name="Project 3"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          vero voluptatum facere ipsam sit magnam eum dicta cumque laudantium
          sed!"
            />
          </div>
        </Carousel>

        <a
          href="/#"
          className="mt-5 text-sm text-center hover:underline cursor-pointer block"
        >
          Show all <FaArrowRight className="inline-block" />
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
