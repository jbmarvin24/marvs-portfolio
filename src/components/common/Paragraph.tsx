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
      className={`text-base ${
        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
      } ${className}`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
