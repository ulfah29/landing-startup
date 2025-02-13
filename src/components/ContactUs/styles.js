/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const contactUsContainer = css({
    padding: '40px 0',
})

export const contactUsHeading = css({
    textAlign: 'center',
})

export const contactUsForm = css({
    maxWidth: 500,
    margin: '40px auto',
    padding: '12px 24px',
    boxSizing: 'border-box',

    'input, textarea': {
        padding: 16,
        border: '1px solid #E0E0E0',
        borderRadius: 12,
        width: '100%',
        margin: '8px 0',
        boxSizing: 'border-box',
    },

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
    }
})