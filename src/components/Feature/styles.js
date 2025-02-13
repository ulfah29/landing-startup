/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import FeatureBG from '../../assets/feature-bg.png';

export const featureSectionContainer = css({
    padding: '100px 40px',
    background: `url(${FeatureBG}) no-repeat`,
    backgroundSize: 'cover',
    boxSizing: 'border-box',

    h2: {
        fontSize: '20px',
        textAlign: 'center',
        margin: '0 0 40px 0',
    },

    '@media only screen and (max-width: 600px)': {
        padding: '40px 16px',
        background: '#ECF7FF',
    }
})

export const featureListContainer = css({
    display: 'grid',
    'grid-template-columns': 'repeat(4, 1fr)',
    'grid-column-gap': 30,
    'grid-row-gap': 30,
    boxSizing: 'border-box',

    '@media only screen and (max-width: 600px)': {
        display: 'block',
    }
});

export const featureList = css({
    padding: 8,

    '@media only screen and (max-width: 600px)': {
        width: '100%',
        padding: '8px 0',
    }
})

export const featureBox = css({
    borderRadius: 12,
    padding: 24,
    backgroundColor: '#FFF',
    '-webkit-box-shadow': '-1px 0px 21px 0px rgba(176,174,176,0.4)',
    'box-shadow': '-1px 0px 21px 0px rgba(176,174,176,0.4)',
    height: '100%',
    boxSizing: 'border-box',

    img: {
        width: 52,
    },
    
    '@media only screen and (max-width: 600px)': {
        textAlign: 'center',
    }
})

export const featureDesc = css({
    '.featureHeading': {
        fontWeight: 800,
        margin: '12px 0',
    },

    '.featureText': {
        color: '#331B3B',
    }
})