import './index.scss';
import contact from '../../public/nav-icons/contact.svg';
import education from '../../public/nav-icons/education.svg';
import experience from '../../public/nav-icons/experience.svg';
import profile from '../../public/nav-icons/profile.svg';
import projects from '../../public/nav-icons/projects.svg';
import resume from '../../public/nav-icons/resume.svg';
import profilepic from '../../public/nav-icons/profile-pic.jpeg';

export function SideNavBar(){
    return(
    <div className='nav-container'>
        <div className='profilephotodiv'>
            <img src={profilepic}  alt="profile-pic" className='ppic'/>
       </div>
        <div >
            <ul className='list'>
                <li>
                    <img src={profile} alt="profile" />
                    <div className='tag'> About Me</div>
                </li>
                <li>
                    <img src={experience} alt="experience" />
                    <div className='tag'> Work Experience</div>
                </li>
                <li>
                    <img src={projects} alt="projects" />
                    <div className='tag'> Projects</div>
                </li>
                <li>
                    <img src={education} alt="education" />
                    <div className='tag'> Education</div>
                </li>
                <li>
                    <img src={contact} alt="contact" />
                    <div className='tag'> Contact</div>
                </li>
                <li>
                    <img src={resume} alt="resume" />
                    <div className='tag'> Resume</div>
                </li>
            </ul>
        
        </div>
    </div>
    );
}