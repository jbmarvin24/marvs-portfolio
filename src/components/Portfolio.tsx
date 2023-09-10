import { FunctionComponent } from 'react';
import PortfolioCard from './common/PortfolioCard';
import { FaArrowRight } from 'react-icons/fa';

interface PortfolioProps {}

const Portfolio: FunctionComponent<PortfolioProps> = () => {
  return (
    <section className="py-20 px-10 max-w-3xl mx-auto">
      <h1 className="text-4xl font-semibold text-center mb-1 text-white">
        Portfolio
      </h1>
      <p className="text-sm text-center">Most recent work</p>

      <div className="mt-16">
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <PortfolioCard name="Project 1" />
          </div>
          <div id="item2" className="carousel-item w-full">
            <PortfolioCard name="Project 2" />
          </div>
          <div id="item3" className="carousel-item w-full">
            <PortfolioCard name="Project 3" />
          </div>
        </div>
        <div className="flex justify-center w-full py-10 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
        </div>
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
