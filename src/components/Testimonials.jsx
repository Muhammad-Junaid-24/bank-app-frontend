import styles, { layout } from "../style";
import { feedback } from "../constants";
import Feedback from "../components/Feedback";

function Testimonials() {
  return (
    <section
      id="testimonials"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="absolute z-0 w-3/5 h-3/5 -right-1/2 rounded-full blue__gradient"/>
      <div
        className={`w-full flex flex-col md:flex-row sm:mb-16 mb-6 relative z-[1] justify-between items-center`}
      >
        <h2 className={styles.heading2}>
          What people are <br className="sm:block hidden" /> saying about us
        </h2>
        <div className="w-full mt-6 md:mt-0">
          <p className={`${styles.paragraph} max-w-[480px] text-left`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((feedbackCard, index) => (
          <Feedback key={feedback.id} {...feedbackCard} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
