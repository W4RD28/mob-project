import SideBar from './SideBar';
import { doc, getDoc, collection, getDocs} from "firebase/firestore";
import { firestore, auth } from "../Firebase";
import { Redirect } from 'react-router-dom';

function getUserID(){
    return auth.currentUser.uid
}
async function isMember() {
    const worspaceSnapshot = await getDocs(collection(firestore, "workspaces"));
    worspaceSnapshot.forEach((ws) => {
        // doc.data() is never undefined for query doc snapshots
        const memberSnapshot = async function() {
            const workspaceMember = await getDocs(collection(firestore,"workspaces/" + ws.id + "/members"));
            workspaceMember.forEach((wsm) => {
                if(wsm.data().userid == getUserID()){
                    console.log(wsm.data().username, " is a member of ", ws.data().workspaceName);
                }
            });
        }
        memberSnapshot();
    });
}
async function getWorkspaces() {
    const querySnapshot = await getDocs(collection(firestore, "workspaces"))
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    });
}
async function getTasks() {
    const querySnapshot = await getDocs(collection(firestore, "workspaces/" + getUserID() + "tasks"))
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    });
}
async function getSchedules() {
    const querySnapshot = await getDocs(collection(firestore, "workspaces/" + getUserID() + "schedules"))
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    });
}
async function getTimeline() {
    const querySnapshot = await getDocs(collection(firestore, "workspaces/" + getUserID() + "timeline"))
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    });
}
async function getMessage() {
    const querySnapshot = await getDocs(collection(firestore, "workspaces/" + getUserID() + "messages"))
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    });
}
async function getMembers() {
    const querySnapshot = await getDocs(collection(firestore, "workspaces/" + getUserID() + "members"))
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    });
}

const Workspaces = () => {
    isMember();
    return (
        <div>
        <SideBar />


        {/* Buat redirect kalo belom login */}
        { auth.currentUser ? null : <Redirect to="/login" /> }
        </div>
        
     );
}
 
export default Workspaces;