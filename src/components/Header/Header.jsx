import './Header.scss';
import HeaderNavList from '../HeaderNavList/HeaderNavList';
import logo from '../../assets/icons/martial-arts-uniform.svg';
import HeaderNavModal from '../HeaderNavModal/HeaderNavModal';

function Header() {
  return (
    <header className='header'>
        <div className='header__logo-container'>
            <img src={logo} className='header__logo' alt='logo'/>
            <h2 className='header__title'> Jitsu Flow </h2>
        </div>
        <HeaderNavModal />
        <HeaderNavList className="header__nav--desktop"/>
    </header>
  );
}

export default Header

