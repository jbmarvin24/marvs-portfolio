import { FunctionComponent, ReactNode } from 'react';
import useThemeStore from '../../themeStore';

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
      className={`text-sm text-center 
  ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}
  ${className}`}
    >
      {children}
    </p>
  );
};

export default SubTitle;
