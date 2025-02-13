/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ArrowIcon from '../../assets/arrow-icon.png';

export const faqContainer = css({
    padding: '40px 0',
    backgroundColor: '#ECF7FF',

    h2: {
        textAlign: 'center',
    }
})

export const faqContent = css({
    maxWidth: 700,
    margin: 'auto',
    padding: '12px 24px',
    borderRadius: 12,
    '-webkit-box-shadow': '-1px 0px 21px 0px rgba(176,174,176,0.4)',
    'box-shadow': '-1px 0px 21px 0px rgba(176,174,176,0.4)',
    backgroundColor: '#FFF',

    '@media only screen and (max-width: 600px)': {
        margin: '0 16px',
    }
})

export const accordionWrapper = css({
    overflow: 'hidden',

    '.accordionList': {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: 'none',
        backgroundColor: 'transparent',
        padding: '16px 8px 16px 0',
        borderBottom: '1px solid #E0E0E0',

        '&.active .arrow-icon': {
            transform: 'rotate(180deg)',
        }
    },

    '.question-content': {
        fontSize: 18,
        textAlign: 'left',
    },

    '.answer-content': {
        fontSize: 14,
    },

    '.arrow-icon': {
        background: `url(${ArrowIcon}) no-repeat`,
        backgroundSize: 'contain',
        display: 'block',
        width: 16,
        height: 16,
    }
})