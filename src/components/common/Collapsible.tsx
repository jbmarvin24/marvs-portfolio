import {
  FunctionComponent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';

interface CollapsibleProps {
  isOpen: boolean;
  children: ReactNode | ReactNode[];
}

const Collapsible: FunctionComponent<CollapsibleProps> = ({
  isOpen,
  children,
}) => {
  const [height, setHeight] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current?.clientHeight);
    }
  }, [ref]);

  return (
    <div
      className={`transition-[height] ease-in-out duration-500 overflow-hidden`}
      style={{
        height: isOpen ? height : 0,
      }}
    >
      <div ref={ref}>{children}</div>
    </div>
  );
};

export default Collapsible;
