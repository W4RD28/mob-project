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
                <button href="#" className="focus:bg-brown focus:bg-opacity-50 rounded-xl">
                    <div className="WorkspaceLink flex flex-nowrap content-center">
                        <img src="https://lh3.googleusercontent.com/a-/AOh14GiXK3mJXWaKrJhb6xBuWP_LjIv0hDWcKGaDVhdDLQ=s288-p-rw-no"
                            alt="Placeholder Group" className="Groupimg" />
                        <p className="Groupname">Persatuan Komodo</p>
                    </div>
                </button>
                <button className="focus:bg-brown focus:bg-opacity-50 rounded-xl">
                    <div className="WorkspaceLink flex flex-nowrap content-center">
                        <img src="https://lh3.googleusercontent.com/a-/AOh14GiXK3mJXWaKrJhb6xBuWP_LjIv0hDWcKGaDVhdDLQ=s288-p-rw-no"
                            alt="Placeholder Group" className="Groupimg" />
                        <p className="Groupname">Komodo Dragon Forum Group</p>
                    </div>
                </button>
                <button className="focus:bg-brown focus:bg-opacity-50 rounded-xl">
                    <div className="WorkspaceLink flex flex-nowrap content-center">
                        <img src="https://lh3.googleusercontent.com/a-/AOh14GiXK3mJXWaKrJhb6xBuWP_LjIv0hDWcKGaDVhdDLQ=s288-p-rw-no"
                            alt="Placeholder Group" className="Groupimg" />
                        <p className="Groupname">Keluarga Komodo</p>
                    </div>
                </button>
                <div className></div>
            </nav>
        </div>

    );
}

export default SideBar;