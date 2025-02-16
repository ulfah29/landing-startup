/** @jsxImportSource @emotion/react */
import { footerContainer } from './styles';
import Logo from '../../assets/logo.png';

function Footer() {
    const getYearInfo = new Date().getFullYear();

    return (
        <div css={footerContainer}>
            <img width="50" src={Logo} alt="Logo" />
            <div>&copy; 2024 - {getYearInfo}</div>
        </div>
    )
}

export default Footer;
