import SideBar from './SideBar';
import { doc, getDoc, collection, getDocs} from "firebase/firestore";
import { firestore, auth } from "../Firebase";
import { Redirect } from 'react-router-dom';
import { useState } from 'react';

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
                    console.log(ws.id)
                    return ws.id;
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
    const querySnapshot = await getDocs(collection(firestore, "workspaces/" + getUserID() + "/tasks"))
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    });
}
async function getSchedules() {
    const querySnapshot = await getDocs(collection(firestore, "workspaces/" + getUserID() + "/schedules"))
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    });
}
async function getTimeline() {
    const querySnapshot = await getDocs(collection(firestore, "workspaces/" + getUserID() + "/timeline"))
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    });
}
async function getMessages(workspace) {
    const messageSnapshot = await getDocs(collection(firestore,"workspaces/" + workspace + "/messages"));
    messageSnapshot.forEach((ms) => {
        console.log(ms.data().text);
    });
}
async function getMembers() {
    const querySnapshot = await getDocs(collection(firestore, "workspaces/" + getUserID() + "/members"))
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    });
}

const Workspaces = () => {
    const [userWorkspace, setWorkspace] = useState(isMember())
    getMessages(userWorkspace);
    
    return (
        <div>
        <SideBar />


        {/* Buat redirect kalo belom login */}
        { auth.currentUser ? null : <Redirect to="/login" /> }
        </div>
        
     );
}
 
export default Workspaces;