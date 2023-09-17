import classNames from 'classnames';
import { FunctionComponent, ReactNode } from 'react';

interface ContainerProps {
  className?: string;
  children: ReactNode | ReactNode[];
}

const Container: FunctionComponent<ContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div className={classNames('max-w-6xl mx-auto', className)}>{children}</div>
  );
};

export default Container;
