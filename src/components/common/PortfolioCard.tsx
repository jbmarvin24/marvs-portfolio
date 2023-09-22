import { FunctionComponent } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Paragraph from './Paragraph';
import { IPortfolio } from '../../data/portfolios';

interface PortfolioCardProps {
  portfolio: IPortfolio;
}

const PortfolioCard: FunctionComponent<PortfolioCardProps> = ({
  portfolio,
}) => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 content-center items-center justify-items-center gap-10">
      <img
        className="object-fill h-48 w-96 rounded-xl"
        src={portfolio.image}
        alt={portfolio.name + ' Image'}
      />
      <div className="">
        <h3 className="text-2xl font-semibold">{portfolio.name}</h3>
        <Paragraph className="mt-2 lg:pr-5">{portfolio.description}</Paragraph>
        <a
          href={portfolio.demoUrl}
          target="_blank"
          className="btn btn-primary mt-3 text-white"
        >
          Demo <FaArrowRight />
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;
