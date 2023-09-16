import { FunctionComponent } from 'react';
import { LuMail } from 'react-icons/lu';
import { BiSend } from 'react-icons/bi';
import { FaLinkedin } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import Title from './common/Title';
import SubTitle from './common/SubTitle';
import classNames from 'classnames';
import useThemeStore from '../themeStore';

interface ContactMeProps {}

const ContactMe: FunctionComponent<ContactMeProps> = () => {
  const theme = useThemeStore((s) => s.theme);

  return (
    <section id="contact" className="px-10 md:py-20 py-14 max-w-5xl mx-auto">
      <Title className="mb-1 text-center">Contact Me</Title>
      <SubTitle>Get in touch</SubTitle>
      <div className="grid md:grid-cols-2 grid-cols-1 mt-16 md:justify-items-stretch gap-8 items-start">
        <div className="md:justify-self-center grid grid-cols-1 gap-10">
          <div className="flex items-center">
            <LuMail className="h-7 w-7 text-primary" />
            <div className="ml-5">
              <h3 className="text-xl font-semibold">Email me</h3>
              <div className="tooltip tooltip-bottom" data-tip="click to copy">
                <p
                  className={classNames('text-sm mt-1 cursor-pointer', {
                    'text-gray-400': theme === 'dark',
                    'text-gray-600': theme === 'light',
                  })}
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
                  className={classNames('text-sm mt-1 hover:underline', {
                    'text-gray-400': theme === 'dark',
                    'text-gray-600': theme === 'light',
                  })}
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
                  className={classNames('text-sm mt-1 hover:underline', {
                    'text-gray-400': theme === 'dark',
                    'text-gray-600': theme === 'light',
                  })}
                >
                  github.com/jbmarvin24
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="md:justify-self-stretch md:-translate-x-24 mt-10 md:mt-0">
          <form action="" className="grid grid-cols-1 gap-8">
            <div
              className={classNames('form-control w-full rounded-lg', {
                'bg-[#242D40]': theme === 'dark',
                'bg-[#EEF1FC]': theme === 'light',
              })}
            >
              <label className="label">
                <span className="label-text ml-3 mt-1 -mb-1 text-xs">Name</span>
              </label>
              <input
                type="text"
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
                type="text"
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
              <textarea className="textarea h-40 w-full focus:outline-0 bg-transparent"></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary mt-4 justify-self-start capitalize"
            >
              Send Message <BiSend className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
