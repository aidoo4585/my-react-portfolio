import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss'; 

const Layout = () => { 
    return (
        <div className='App' /*main wrapper of our app*/>
            <Sidebar /> 
            <div className='page' /*Place holder for rendering our apps*/>
                <span className='tags top-tags'>&lt;body&gt;</span>

                <Outlet /*Place holder for rendering our apps*//> 

                <span className='tags bottom-tags'>&lt;/body&gt;
                <br /> 
                <span className='bottom-tag-html'>&lt;/html&gt;</span>
                </span>
            </div>
        </div>
    )
}

export default Layout; 