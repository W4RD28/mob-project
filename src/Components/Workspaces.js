import SideBar from './SideBar';
import { doc, getDoc, collection, getDocs} from "firebase/firestore";
import { firestore, auth } from "../Firebase";

function getUserID(){
    return auth.currentUser.uid
}
async function getUsers() {
    // const docRef = doc(firestore, "users", "P51rxv9IvvdQjvvniBUawrUzPZm2");
    // const docSnap = await getDoc(docRef);

    // if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data());
    // } else {
    // // doc.data() will be undefined in this case
    // console.log("No such document!");
    // }
    const querySnapshot = await getDocs(collection(firestore, "users"));
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
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
    
    return (
        <SideBar />
     );
}
 
export default Workspaces;