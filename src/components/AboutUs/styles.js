/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const aboutUsContainer = css({
    display: 'flex',
    padding: '100px 40px',
    alignItems: 'center',
    justifyContent: 'center',

    '@media only screen and (max-width: 600px)': {
        display: 'block',
        width: '100%',
        padding: '16px',
        boxSizing: 'border-box',

        img: {
            maxWidth: '100%',
        },
    }
})

export const aboutUsImageContainer = css({
    maxWidth: '40%',

    img: {
        width: '100%',
        maxWidth: 400,
        marginRight: 32,
    },

    '@media only screen and (max-width: 600px)': {
        maxWidth: '100%',
        marginRight: 0
    }
})

export const aboutUsContent = css({
    paddingLeft: 16,
    maxWidth: '50%',

    '@media only screen and (max-width: 600px)': {
        maxWidth: '100%',
    }
})