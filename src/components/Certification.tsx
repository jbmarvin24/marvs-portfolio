import { FunctionComponent } from 'react';
import Container from './common/Container';
import SubTitle from './common/SubTitle';
import Title from './common/Title';
import { FaArrowRight } from 'react-icons/fa';
import { PiCertificateBold } from 'react-icons/pi';
import classNames from 'classnames';
import useThemeStore from '../themeStore';
import Paragraph from './common/Paragraph';
import { certifications } from '../data/certifications';

interface CertificationProps {}

const Certification: FunctionComponent<CertificationProps> = () => {
  const theme = useThemeStore((s) => s.theme);

  return (
    <section id="portfolio">
      <Container className="lg:px-32 px-0">
        <Title className="mb-1 text-center">Certifications</Title>
        <SubTitle>My credential accomplishments</SubTitle>
        <div className="flex flex-wrap justify-center mt-10">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className={classNames('card w-96 shadow-xl', {
                'bg-[#1D2335]': theme === 'dark',
                'bg-white': theme === 'light',
              })}
            >
              <div className="card-body">
                <PiCertificateBold className="h-10 w-10 text-primary" />
                <h2 className="card-title mt-3">{cert.name}</h2>
                <Paragraph>{cert.issueBy}</Paragraph>
                <div className="card-actions mt-4">
                  <a
                    href={cert.credentialUrl}
                    className="link no-underline text-sm text-primary font-medium"
                    target="_blank"
                  >
                    View Credential
                    <FaArrowRight className="ml-2 h-3 w-3 inline-block" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Certification;
