import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'

const Billing = () => (
  <section id='product' className={layout.sectionImgReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className='w-full h-full relative z-10' />
    </div>
    <div className='absolute z-[3] -left-1/2 top-0 w-1/2 h-1/2 
    rounded-full white__gradient' />
    <div className='absolute z-0 -left-1/2 bottom-0 w-1/2 h-1/2 
    rounded-full pink__gradient' />

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className='sm:block hidden' /> billing & invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque.
        Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>

      <div className='flex flex-row sm:mt-10 mt-6'>
        <img src={apple} alt="App_store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
        <img src={google} alt="Google_play" className='w-[128px] h-[42px] object-contain cursor-pointer' />
      </div>
    </div>
  </section>
)

export default Billing
