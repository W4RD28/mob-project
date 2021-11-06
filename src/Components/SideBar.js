import '../Styles/SideBar.css'
import { BellIcon, CogIcon } from '@heroicons/react/outline'

const SideBar = () => {
    return ( 
        <div className="inline-block">
            <nav className="Profile">
                {/* cari gambar yang kotak nanti lonjong kalo gak bisa */}
                <img src="https://lh3.googleusercontent.com/a-/AOh14GiXK3mJXWaKrJhb6xBuWP_LjIv0hDWcKGaDVhdDLQ=s288-p-rw-no" 
                alt="Placeholder User" className="Userimg"/>

                <div className="Icons">
                    <BellIcon />
                    <CogIcon />
                </div>
            </nav>
            <nav className="MyWorkspaces">
                <div className="WorkspaceLink">
                    <img src="https://lh3.googleusercontent.com/a-/AOh14GiXK3mJXWaKrJhb6xBuWP_LjIv0hDWcKGaDVhdDLQ=s288-p-rw-no" 
                    alt="Placeholder Group" className="Groupimg" />
                    <p className="Groupname">Persatuan Komodo</p>
                </div>
                <div className="WorkspaceLink">
                    <img src="https://lh3.googleusercontent.com/a-/AOh14GiXK3mJXWaKrJhb6xBuWP_LjIv0hDWcKGaDVhdDLQ=s288-p-rw-no" 
                    alt="Placeholder Group" className="Groupimg" />
                    <p className="Groupname">Komodo Dragon Forum Group</p>
                </div>
                <div className="WorkspaceLink">
                    <img src="https://lh3.googleusercontent.com/a-/AOh14GiXK3mJXWaKrJhb6xBuWP_LjIv0hDWcKGaDVhdDLQ=s288-p-rw-no" 
                    alt="Placeholder Group" className="Groupimg" />
                    <p className="Groupname">Keluarga Komodo</p>
                </div>
                <div className></div>
            </nav>
        </div>
        
     );
}
 
export default SideBar;