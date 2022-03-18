import './index.scss';
import linkedin from '../../public/landingpage-icons/linkedin.svg';
import gmail from '../../public/landingpage-icons/gmail.svg';
import github from '../../public/landingpage-icons/github.svg';

export function LandingPage(){
    return(
        <div className='landing-container'>
            <div className="intro">
                <div>
                    <div className="name">Hi, I’m <b>Mini Jain!</b></div>
                    <div className="designation">Frontend Javascript Developer</div>
                </div>
                <div className="contact-icons">
                <div> 
                    <img src={linkedin} alt="linkedin-icon" />
                </div>
                <div>
                <img src={gmail} alt="gmail-icon" />
                </div>
                <div>
                <img src={github} alt="github-icon" />
                </div>
                </div>
            </div>
            <div className="my-icon"></div>
        </div>
    );
}