
import { SignupOne, VerificationTwo } from '../components'
import logojk from '/assets/layer-12@2x.png'

const VerificationScreen = () => {
  return (

    <div className='flex md:flex-row flex-col'>
      <SignupOne logoSrc={logojk} />
      <VerificationTwo />
    </div>

  )
}

export default VerificationScreen