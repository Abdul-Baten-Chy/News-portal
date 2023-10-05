import logo from '../../assets/logo.png';
import moment from 'moment/moment';
const Header = () => {
    return (
        <div className='text-center '>
            <img className='block mx-auto' src={logo} alt="" />
            <p className='text-3xl'>Hellow this is a news Site</p>
            <p>{moment().format('LLLL')}</p>
        </div>
    );
};

export default Header;