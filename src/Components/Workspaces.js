import SideBar from './SideBar';
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { firestore, auth } from "../Firebase";
import { Redirect } from 'react-router-dom';
import { useState } from 'react';

function getUserID() {
    return auth.currentUser.uid
}
async function isMember() {
    const worspaceSnapshot = await getDocs(collection(firestore, "workspaces"));
    worspaceSnapshot.forEach((ws) => {
        // doc.data() is never undefined for query doc snapshots
        const memberSnapshot = async function () {
            const workspaceMember = await getDocs(collection(firestore, "workspaces/" + ws.id + "/members"));
            workspaceMember.forEach((wsm) => {
                if (wsm.data().userid == getUserID()) {
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
<<<<<<< HEAD
async function getMessages(workspace) {
    const messageSnapshot = await getDocs(collection(firestore,"workspaces/" + workspace + "/messages"));
    messageSnapshot.forEach((ms) => {
        console.log(ms.data().text);
=======
async function getMessage() {
    const querySnapshot = await getDocs(collection(firestore, "workspaces/" + getUserID() + "messages"))
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
>>>>>>> 17deabc5955fae32bf7b13947a5997712d49ce6d
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
            <nav className="notepad">
                <section class="shadow row">
                    <div class="tabs">
                        <div class="border-b tab">
                            <div class="relative">
                                <input class="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck1"></input>
                                <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label bg-white-brown rounded-2xl" for="chck1">
                                    <span class="text-grey-darkest font-thin text-xl">
                                        Merapikan Database
                                    </span>
                                    <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">

                                        <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                            <polyline points="6 9 12 15 18 9">
                                            </polyline>
                                        </svg>
                                    </div>
                                </header>
                                <div class="tab-content bg-white">
                                    <div class="pl-8 pr-8 pb-5 text-grey-darkest">
                                        <ul class="pl-4">
                                            <li class="pb-2">
                                                <label className="pl-2"><input type="checkbox"></input>Tanya Grup</label>
                                            </li>
                                            <li class="pb-2">
                                                <label className="pl-2"><input type="checkbox"></input>Buat Form</label>
                                            </li>
                                            <li class="pb-2">
                                                <label className="pl-2"><input type="checkbox"></input>Cek satu-satu</label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="shadow row">
                    <div class="tabs">
                        <div class="border-b tab">
                            <div class="relative">
                                <input class="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck1"></input>
                                <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label bg-white-brown rounded-2xl" for="chck1">
                                    <span class="text-grey-darkest font-thin text-xl">
                                        Bikin UI
                                    </span>
                                    <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">

                                        <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                            <polyline points="6 9 12 15 18 9">
                                            </polyline>
                                        </svg>
                                    </div>
                                </header>
                                <div class="tab-content bg-white">
                                    <div class="pl-8 pr-8 pb-5 text-grey-darkest">
                                        <ul class="pl-4">
                                            <li class="pb-2">
                                                <label className="pl-2"><input type="checkbox"></input>Navbar</label>
                                            </li>
                                            <li class="pb-2">
                                                <label className="pl-2"><input type="checkbox"></input>Login Page</label>
                                            </li>
                                            <li class="pb-2">
                                                <label className="pl-2"><input type="checkbox"></input>Dashboard</label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </nav>
            {/* Buat redirect kalo belom login */}
            {auth.currentUser ? null : <Redirect to="/login" />}
        </div>

    );
}

export default Workspaces;