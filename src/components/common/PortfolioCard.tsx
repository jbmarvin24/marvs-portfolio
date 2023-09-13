import { FunctionComponent } from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface PortfolioCardProps {
  name: string;
}

const PortfolioCard: FunctionComponent<PortfolioCardProps> = ({ name }) => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 content-center items-center justify-items-center gap-10">
      {/* <div className=" bg-orange-400 h-44 w-5/6 rounded-md"></div> */}
      <div className="avatar">
        <div className="h-44 w-72 rounded-xl">
          <img src="https://placehold.co/280x180" />
        </div>
      </div>
      <div className="">
        <h3 className="text-2xl font-semibold text-white">{name}</h3>
        <p className="text-sm mt-2 pr-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          vero voluptatum facere ipsam sit magnam eum dicta cumque laudantium
          sed!
        </p>
        <button className="btn btn-primary mt-3">
          Demo <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default PortfolioCard;
