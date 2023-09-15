import { FunctionComponent, ReactNode } from 'react';

interface TitleProps {
  className?: string;
  children: ReactNode | ReactNode[];
}

const Title: FunctionComponent<TitleProps> = ({ children, className }) => {
  return <h1 className={`text-4xl font-semibold ${className}`}>{children}</h1>;
};

export default Title;
