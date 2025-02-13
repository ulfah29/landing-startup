/** @jsxImportSource @emotion/react */
import { contactUsContainer, contactUsHeading, contactUsForm } from './styles';

function ContactUs() {
    const getFormSubmitHandler = () => {
        alert('success');
    }
    
    const formContact = () => {
        return (
            <form onSubmit={() => getFormSubmitHandler()}>
                <div>
                    <input type="text" placeholder="Your name" name="name" required />
                </div>
                <div>
                    <input type="email" placeholder="Email" name="email" required />
                </div>
                <div>
                    <textarea placeholder="Your message" name="message" required />
                </div>
                <div>
                    <button type="submit"> Send a message </button>
                </div>
            </form>
        )
    }

    return (
        <div css={contactUsContainer}>
            <div css={contactUsHeading}>
                <h2>Contact Us</h2>
                <div>We'll get back to you asap!</div>
            </div>
            <div css={contactUsForm}>{formContact()}</div>
        </div>
    )
}

export default ContactUs;
