import { feedback } from '../constants'
import styles from '../style'
import FeedbackCard from './FeedbackCard'

const Testimonials = () => (
  <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className='absolute z-0 -right-1/2 top-0 w-[60%] h-[60%]
    rounded-full blue__gradient' />
    <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-10'>
      <h2 className={styles.heading2}>
        What people are
        <br className='sm:block hidden' />
        saying about us
      </h2>
      <div className='w-full md:mt-0 mt-6'>
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>Everything you need to accept card payments and
          grow your business anywhere on the planet.
        </p>
      </div>
    </div>

    <div className='w-full flex flex-wrap sm:flex-nowrap sm:justify-start justify-center items-center feedback-container relative z-10'>
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>

  </section>
)

export default Testimonials
