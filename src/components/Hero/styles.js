/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const heroContainer = css({
    display: 'flex',
    alignItems: 'center',
    maxWidth: 1200,
    margin: '80px auto 0',

    h1: {
        fontSize: 60,
        margin: '20px 0',
    },

    '@media only screen and (max-width: 600px)': {
        display: 'block',
    }
})

export const heroSectionText = css({
    width: '40%',
    padding: '40px 0 40px 20px',

    button: {
        backgroundColor: '#331B3B',
        padding: 20,
        color: '#FFF',
        fontWeight: 800,
        border: 'none',
        borderRadius: 12,
        cursor: 'pointer',

        '&:hover': {
            opacity: .7,
        }
    },

    '@media only screen and (max-width: 600px)': {
        width: '100%',
        boxSizing: 'border-box',
    }
})

export const heroSectionImage = css({
    width: '60%',
    padding: '40px 24px',
    textAlign: 'right',
    boxSizing: 'border-box',

    img: {
        maxWidth: '90%',
    },

    '@media only screen and (max-width: 600px)': {
        width: '100%',
        textAlign: 'center',
    }
})