import { FunctionComponent } from 'react';
import { LuMail } from 'react-icons/lu';
import { BiSend } from 'react-icons/bi';
import { FaLinkedin } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import Title from './common/Title';
import SubTitle from './common/SubTitle';
import classNames from 'classnames';
import useThemeStore from '../themeStore';
import Container from './common/Container';

interface ContactMeProps {}

const ContactMe: FunctionComponent<ContactMeProps> = () => {
  const theme = useThemeStore((s) => s.theme);

  return (
    <section id="contact">
      <Container className="lg:px-32 px-8">
        <Title className="mb-1 text-center">Contact Me</Title>
        <SubTitle>Get in touch</SubTitle>
        <div className="grid lg:grid-cols-2 grid-cols-1 mt-16 gap-8 items-start">
          <div className="grid grid-cols-1 gap-10 lg:pl-10">
            <div className="flex items-center">
              <LuMail className="h-7 w-7 text-primary" />
              <div className="ml-5">
                <h3 className="text-xl font-semibold">Email me</h3>
                <div
                  className="tooltip tooltip-bottom"
                  data-tip="click to copy"
                >
                  <p
                    className={classNames(
                      'text-sm mt-1 cursor-pointer text-gray-400'
                    )}
                    onClick={() =>
                      navigator.clipboard.writeText('jbmarvin24@gmail.com')
                    }
                  >
                    jbmarvin24@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <FaLinkedin className="h-7 w-7 text-primary" />
              <div className="ml-5">
                <h3 className="text-xl font-semibold ">Connect with me</h3>
                <div
                  className="tooltip tooltip-bottom"
                  data-tip="open in new tab"
                >
                  <a
                    href="https://linkedin.com/in/jbmarvin"
                    target="_blank"
                    className={classNames(
                      'text-sm mt-1 hover:underline text-gray-400'
                    )}
                  >
                    linkedin.com/in/jbmarvin
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <AiFillGithub className="h-7 w-7 text-primary" />
              <div className="ml-5">
                <h3 className="text-xl font-semibold ">Follow me</h3>
                <div
                  className="tooltip tooltip-bottom"
                  data-tip="open in new tab"
                >
                  <a
                    href="https://github.com/jbmarvin24"
                    target="_blank"
                    className={classNames(
                      'text-sm mt-1 hover:underline text-gray-400'
                    )}
                  >
                    github.com/jbmarvin24
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:justify-self-stretch lg:-translate-x-24 mt-10 lg:mt-0">
            <form
              action="https://app.formbold.com/s/9EP5k"
              method="POST"
              className="grid grid-cols-1 gap-8"
            >
              <div
                className={classNames('form-control w-full rounded-lg', {
                  'bg-[#242D40]': theme === 'dark',
                  'bg-[#EEF1FC]': theme === 'light',
                })}
              >
                <label className="label">
                  <span className="label-text ml-3 mt-1 -mb-1 text-xs">
                    Name
                  </span>
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  maxLength={50}
                  className="input w-full focus:outline-0 bg-transparent"
                />
              </div>
              <div
                className={classNames('form-control w-full rounded-lg', {
                  'bg-[#242D40]': theme === 'dark',
                  'bg-[#EEF1FC]': theme === 'light',
                })}
              >
                <label className="label">
                  <span className="label-text ml-3 mt-1 -mb-1 text-xs">
                    Email
                  </span>
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="input w-full focus:outline-0 bg-transparent"
                />
              </div>
              <div
                className={classNames('form-control w-full rounded-lg', {
                  'bg-[#242D40]': theme === 'dark',
                  'bg-[#EEF1FC]': theme === 'light',
                })}
              >
                <label className="label">
                  <span className="label-text ml-3 mt-1 -mb-1 text-xs">
                    Message
                  </span>
                </label>
                <textarea
                  name="message"
                  className="textarea h-40 w-full focus:outline-0 bg-transparent"
                  required
                  maxLength={200}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary mt-4 justify-self-start capitalize text-white"
              >
                Send Message <BiSend className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactMe;
