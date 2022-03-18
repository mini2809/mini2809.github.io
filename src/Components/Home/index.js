import {SideNavBar} from '../SideNavBar';
import {MainContent} from '../MainContent';
import './index.scss';

export function Home(){
    return(
        <div className='home'>
            <SideNavBar />
            <MainContent />
        </div>
    )
}