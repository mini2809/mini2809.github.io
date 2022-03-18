import './index.scss';
import contact from '../../public/nav-icons/contact.svg';
import education from '../../public/nav-icons/education.svg';
import experience from '../../public/nav-icons/experience.svg';
import profile from '../../public/nav-icons/profile.svg';
import projects from '../../public/nav-icons/projects.svg';
import resume from '../../public/nav-icons/resume.svg';


export function SideNavBar(){
    return(
    <div className='nav-container'>
        <div className='profilephotodiv'>

        </div>
        <div className='table'>
        <table>
            <tr>
                <td className='icon'>
                    <img src={profile} alt="profile" />
                    <div className='tag'> About Me</div>
                </td>
            </tr>
            <tr>
                <td className='icon'>
                    <img src={experience} alt="experience" />
                    <div className='tag'> Work Experience</div>
                </td>
            </tr>
            <tr>
                <td className='icon'>
                    <img src={projects} alt="projects" />
                    <div className='tag'> Projects</div>
                </td>
            </tr>
            <tr>
                <td className='icon'>
                    <img src={education} alt="education" />
                    <div className='tag'> Education</div>
                </td>
            </tr>
            <tr>
                <td className='icon'>
                    <img src={contact} alt="contact" />
                    <div className='tag'> Contact</div>
                </td>
            </tr>
            <tr>
                <td className='icon'>
                    <img src={resume} alt="resume" />
                    <div className='tag'> Resume</div>
                </td>
            </tr>
        </table>
        </div>
    </div>
    );
}