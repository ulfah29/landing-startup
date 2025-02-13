/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { headerContainer } from './styles';
import Logo from '../../assets/logo.png';

function Header() {
    return(
        <div css={headerContainer}>
            <img src={Logo} alt="Dream Company" width="100" />
        </div>
    );
}

export default Header;
