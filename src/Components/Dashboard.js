import '../Styles/Dashboard.css'
import dashboard from '../dashboard.svg'
import Header from './Header'

const Dashboard = () => {
    return ( 
        <><Header />
        <div className="tagline">
            <h1>CREATE YOUR SPACE!</h1>
            <p>YOU CAN NOW MANAGE YOUR OWN WORKSPACE FOR YOUR ORGANIZATION!</p>
            <p>ADD SOME TASK, TIMELINE, AND EVEN CHAT WITH YOUR CO-WORKERS IN ONE PLACE</p>
            <p>A PLACE WHERE YOU CAN WORK AND ALSO ENJOY!</p>
        </div>
        <div className="dashboard">
            <img src={dashboard}/>
        </div>
        </>
     );
}
 
export default Dashboard;