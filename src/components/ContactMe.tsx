import { FunctionComponent } from 'react';
import { LuMail } from 'react-icons/lu';
import { BiSend } from 'react-icons/bi';
import { FaLinkedin } from 'react-icons/fa';

interface ContactMeProps {}

const ContactMe: FunctionComponent<ContactMeProps> = () => {
  return (
    <section id="contact" className="px-10 md:py-20 py-14 max-w-5xl mx-auto">
      <h1 className="text-4xl font-semibold text-center mb-1 text-slate-200">
        Contact Me
      </h1>
      <p className="text-sm text-center">Get in touch</p>
      <div className="grid md:grid-cols-2 grid-cols-1 mt-16 md:justify-items-stretch gap-8 items-start">
        <div className="md:justify-self-center grid grid-cols-1 gap-10">
          <div className="flex items-center">
            <LuMail className="h-7 w-7 text-primary" />
            <div className="ml-5">
              <h3 className="text-xl font-semibold text-slate-200">Email me</h3>
              <div className="tooltip tooltip-bottom" data-tip="click to copy">
                <p
                  className="text-sm mt-1 text-gray-400 cursor-pointer"
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
              <h3 className="text-xl font-semibold text-slate-200">
                Connect with me
              </h3>
              <div
                className="tooltip tooltip-bottom"
                data-tip="go to my linkedin"
              >
                <a
                  href="https://linkedin.com/in/jbmarvin"
                  target="_blank"
                  className="text-sm mt-1 text-gray-400"
                >
                  linkedin.com/in/jbmarvin
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="md:justify-self-stretch md:-translate-x-24 mt-10 md:mt-0">
          <form action="" className="grid grid-cols-1 gap-8">
            <div className="form-control w-full bg-[#242D40] rounded-lg">
              <label className="label">
                <span className="label-text ml-3 mt-1 -mb-1 text-xs text-slate-200">
                  Name
                </span>
              </label>
              <input
                type="text"
                className="input w-full focus:outline-0 bg-[#242D40] text-slate-200"
              />
            </div>
            <div className="form-control w-full bg-[#242D40] rounded-lg">
              <label className="label">
                <span className="label-text ml-3 mt-1 -mb-1 text-xs text-slate-200">
                  Email
                </span>
              </label>
              <input
                type="text"
                className="input w-full focus:outline-0 bg-[#242D40] text-slate-200"
              />
            </div>
            <div className="form-control w-full bg-[#242D40] rounded-lg">
              <label className="label">
                <span className="label-text ml-3 mt-1 -mb-1 text-xs text-slate-200">
                  Message
                </span>
              </label>
              <textarea className="textarea h-40 w-full focus:outline-0 bg-[#242D40] text-slate-200"></textarea>
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
