import styles from "../style";
import { logo } from "../../assets";
import { footerLinks, socialMedia } from "../constants";

function Footer() {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col w-full mb-8`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img
            src={logo}
            alt="hoobank"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} max-w-[350px] ml-8 mt-8`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div
          className={`flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10`}
        >
          {footerLinks.map((footerLink, index) => {
            return (
              <div
                key={footerLink.key}
                className="flex flex-col ss:my-0 my-4 min-w-[150px]"
              >
                <h4 className={`${styles.paragraph} text-white font-medium`}>
                  {footerLink.title}
                </h4>
                <ul className="flex flex-col">
                  {footerLink.links.map((link, index) => (
                    <li
                      key={link.name}
                      className={`${styles.paragraph} ${
                        index === 0 ? `mt-5` : `mt-3`
                      } hover:text-secondary text-base transition-colors duration-300`}
                    >
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t border-t-[#3F3E45]">
        <p className={`${styles.paragraph} text-white text-center`}>
        &#169; 2023 HooBank. All Rights Reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Footer;
