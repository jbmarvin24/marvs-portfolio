import { FunctionComponent } from 'react';
import TechStackProgress from './common/TechStackProgress';

interface TechStackProps {}

const TechStack: FunctionComponent<TechStackProps> = () => {
  return (
    <section className="py-10 md:px-32 px-10 max-w-5xl mx-auto">
      <h1 className="text-4xl font-semibold text-center mb-1">Tech stack</h1>
      <p className="text-sm text-center">My technical level</p>
      <div className="mt-14 flex flex-col max-w-xs mx-auto gap-6">
        <TechStackProgress name="Typescript" value={80} />
        <TechStackProgress name="C#" value={80} />
        <TechStackProgress name="ASP.NET MVC + API" value={70} />
        <TechStackProgress name="React JS" value={85} />
        <TechStackProgress name="Nest JS" value={80} />
        <TechStackProgress name="SQL" value={90} />
        <TechStackProgress name="HTML+CSS" value={80} />
      </div>
    </section>
  );
};

export default TechStack;
