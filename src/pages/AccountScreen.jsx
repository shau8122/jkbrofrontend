
import { SignupOne, AccountTwo } from '../components'
import logojk from '/assets/layer-12@2x.png';

const AccountScreen = () => {
    return (
        <div className='flex md:flex-row flex-col'> 
            <SignupOne logoSrc={logojk}/>
            <AccountTwo />
        </div>
    );
};

export default AccountScreen;
