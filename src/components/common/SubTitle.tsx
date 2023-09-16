import { FunctionComponent, ReactNode } from 'react';
import useThemeStore from '../../themeStore';
import classNames from 'classnames';

interface SubTitleProps {
  className?: string;
  children: ReactNode | ReactNode[];
}

const SubTitle: FunctionComponent<SubTitleProps> = ({
  children,
  className,
}) => {
  const theme = useThemeStore((s) => s.theme);

  return (
    <p
      className={classNames('text-sm text-center', className, {
        'text-gray-400': theme === 'dark',
        'text-gray-600': theme === 'light',
      })}
    >
      {children}
    </p>
  );
};

export default SubTitle;
