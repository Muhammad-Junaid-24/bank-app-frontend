import styles from "../style";
import { quotes } from "../../assets";

function Feedback({ content, name, title, img }) {
  return (
    <div className="flex justify-between flex-col px-10 py-20 rounded-[20px] max-w[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <img src={quotes} alt="quote" className="w-[43px] h-[28px] object-contain" />
      <p className={`${styles.paragraph} max-w-[280px] my-10`}>{content}</p>
      <div className="flex">
        <img src={img} alt={name} className="w-[48px] h-[48px]"/>
        <div className="ml-10">
          <p className={`${styles.paragraph} font-bold text-white`}>{name}</p>
          <p className={`${styles.paragraph} text-dimWhite`}>{title}</p>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
