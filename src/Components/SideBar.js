import '../Styles/SideBar.css'
import { BellIcon, CogIcon } from '@heroicons/react/outline'
import { doc, getDoc, collection, getDocs} from "firebase/firestore";
import { getDatabase, ref, child, get } from "firebase/database";
import { firestore, auth } from "../Firebase";
import { useState } from 'react';

async function getPhotoURL() {
    const memberSnap = await getDocs(collection(firestore,"users"));
    memberSnap.forEach((doc) => {
        if(doc.id == auth.currentUser.uid)
            return doc.data().photoURL;
    });
}

const SideBar = () => {
    const [userPhoto, setPhoto] = useState(getPhotoURL());
    
    return (
        <div className="inline-block">
            <nav className="Profile">
                {/* cari gambar yang kotak nanti lonjong kalo gak bisa */}
                <a href="#" className="w-12">
                    <img src={ userPhoto }
                        alt="Placeholder User" className="Userimg" />
                </a>

                <div className="Icons">
                    <a href="#" className="w-12">
                        <BellIcon />
                    </a>
                    <a href="#" className="w-12">
                        <CogIcon />
                    </a>
                </div>
            </nav>
            <nav className="MyWorkspaces">
                <button href="#" className="workspacebtn">
                    <div className="WorkspaceLink">
                        <img src="https://lh3.googleusercontent.com/a-/AOh14GiXK3mJXWaKrJhb6xBuWP_LjIv0hDWcKGaDVhdDLQ=s288-p-rw-no"
                            alt="Placeholder Group" className="Groupimg" />
                        <p className="Groupname">Persatuan Komodo</p>
                    </div>
                </button>
                <button className="workspacebtn">
                    <div className="WorkspaceLink">
                        <img src="https://lh3.googleusercontent.com/a-/AOh14GiXK3mJXWaKrJhb6xBuWP_LjIv0hDWcKGaDVhdDLQ=s288-p-rw-no"
                            alt="Placeholder Group" className="Groupimg" />
                        <p className="Groupname">Komodo Dragon Forum Group</p>
                    </div>
                </button>
                <button className="workspacebtn">
                    <div className="WorkspaceLink">
                        <img src="https://lh3.googleusercontent.com/a-/AOh14GiXK3mJXWaKrJhb6xBuWP_LjIv0hDWcKGaDVhdDLQ=s288-p-rw-no"
                            alt="Placeholder Group" className="Groupimg" />
                        <p className="Groupname">Keluarga Komodo</p>
                    </div>
                </button>
                <button className="workspacebtn">
                    <div className="WorkspaceLink">
                        <img src="https://media.istockphoto.com/vectors/black-plus-sign-positive-symbol-vector-id688550958?k=20&m=688550958&s=170667a&w=0&h=vwmBL25oWU3A26BASebi4wENUZ23pnYz9QKnBiw4EvE="
                            alt="Placeholder Group" className="Groupimg" />
                        <p className="Groupname">Add Workspace</p>
                    </div>
                </button>
                <div className></div>
            </nav>

        </div>
    );
}

export default SideBar;