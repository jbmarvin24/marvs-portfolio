import { FunctionComponent, ReactNode } from 'react';
import useThemeStore from '../../themeStore';

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
      className={`text-sm ${
        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
      } ${className}`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
