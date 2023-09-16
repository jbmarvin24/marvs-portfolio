import { FunctionComponent, ReactNode } from 'react';
import useThemeStore from '../../themeStore';
import classNames from 'classnames';

interface ParagraphProps {
  className?: string;
  children: ReactNode | ReactNode[];
}

const Paragraph: FunctionComponent<ParagraphProps> = ({
  className,
  children,
}) => {
  const theme = useThemeStore((s) => s.theme);

  return (
    <p
      className={classNames('text-base', className, {
        'text-gray-400': theme === 'dark',
        'text-gray-600': theme === 'light',
      })}
    >
      {children}
    </p>
  );
};

export default Paragraph;
