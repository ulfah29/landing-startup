/** @jsxImportSource @emotion/react */
import AboutUsImage from '../../assets/about-us-image.png';
import { aboutUsContainer, aboutUsImageContainer, aboutUsContent } from './styles';

function AboutUs() {
    return (
        <div css={aboutUsContainer}>
            <div css={aboutUsImageContainer}>
                <img src={AboutUsImage} alt="About us" />
            </div>
            <div css={aboutUsContent}>
                <h2>About Us Fake or Real</h2>
                <p>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <p>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
        </div>
    )
}

export default AboutUs;
