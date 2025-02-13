/** @jsxImportSource @emotion/react */
import { PropTypes } from "prop-types";
import HeroImage from '../../assets/hero-image.png';
import { heroContainer, heroSectionText, heroSectionImage } from './styles';

function HeroSection({ cta }) {
    return (
        <div css={heroContainer}>
            <div css={heroSectionText}>
                <h1>We Help You to grow your Business</h1>
                <p>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <button onClick={() => cta()}>GET STARTED</button>
            </div>
            <div css={heroSectionImage}>
                <img src={HeroImage} alt="Hero Image" />
            </div>
        </div>
    )
}

HeroSection.propTypes = {
    cta: PropTypes.func,
}

HeroSection.defaultProp = {
    cta: () => {},
};

export default HeroSection;
