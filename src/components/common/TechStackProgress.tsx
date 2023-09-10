import { FunctionComponent } from 'react';

interface TechStackProgressProps {
  name: string;
  value: number;
}

const TechStackProgress: FunctionComponent<TechStackProgressProps> = ({
  name,
  value,
}) => {
  return (
    <div>
      <div className="flex mb-[-3px]">
        <p className="grow text-white">{name}</p>
        <p className="ml-3 text-gray-400">{value}%</p>
      </div>
      <progress
        className="progress progress-primary h-1"
        value={value}
        max={100}
      ></progress>
    </div>
  );
};

export default TechStackProgress;
