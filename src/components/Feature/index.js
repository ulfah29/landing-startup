/** @jsxImportSource @emotion/react */
import FeatureLogo1 from '../../assets/feature-logo-1.png';
import FeatureLogo2 from '../../assets/feature-logo-2.png';
import FeatureLogo3 from '../../assets/feature-logo-3.png';
import FeatureLogo4 from '../../assets/feature-logo-4.png';
import { featureSectionContainer, featureListContainer, featureList, featureBox, featureDesc } from './styles';

function Feature() {
    return (
        <div css={featureSectionContainer}>
            <h2>What We Do For Your Business</h2>
            <div css={featureListContainer}>
                <div css={featureList}>
                    <div css={featureBox}>
                        <img src={FeatureLogo1} alt="Website Design" />
                        <div css={featureDesc}>
                            <div className="featureHeading">Website Design</div>
                            <div className="featureText">
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </div>
                        </div>
                    </div>
                </div>
                <div css={featureList}>
                    <div css={featureBox}>
                        <img src={FeatureLogo2} alt="Web Development" />
                        <div css={featureDesc}>
                            <div className="featureHeading">Web Development</div>
                            <div className="featureText">
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </div>
                        </div>
                    </div>
                </div>
                <div css={featureList}>
                    <div css={featureBox}>
                        <img src={FeatureLogo3} alt="Mobile APP Development" />
                        <div css={featureDesc}>
                            <div className="featureHeading">Mobile APP Development</div>
                            <div className="featureText">
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </div>
                        </div>
                    </div>
                </div>
                <div css={featureList}>
                    <div css={featureBox}>
                        <img src={FeatureLogo4} alt="Marketing" />
                        <div css={featureDesc}>
                            <div className="featureHeading">Marketing</div>
                            <div className="featureText">
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature;
