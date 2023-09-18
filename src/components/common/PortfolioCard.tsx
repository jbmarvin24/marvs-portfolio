import { FunctionComponent } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Paragraph from './Paragraph';

interface PortfolioCardProps {
  name: string;
  description: string;
}

const PortfolioCard: FunctionComponent<PortfolioCardProps> = ({
  name,
  description,
}) => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 content-center items-center justify-items-center gap-10">
      <div className="avatar">
        <div className="h-44 w-72 rounded-xl">
          <img src="https://placehold.co/280x180" />
        </div>
      </div>
      <div className="">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <Paragraph className="mt-2 lg:pr-5">{description}</Paragraph>
        <button className="btn btn-primary mt-3 text-white">
          Demo <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default PortfolioCard;
