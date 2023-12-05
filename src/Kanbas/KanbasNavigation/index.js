import { Link, useLocation } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';

function KanbasNavigation() {
    const links = ["SignIn", "SignUp", "Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
    const icons = ["fas fa-user", "fas fa-user", "fas fa-user", "fas fa-gauge-high", "fas fa-book", "fas fa-calendar-days", "fas fa-inbox", "fas fa-clock", "fas fa-desktop", "fas fa-right-from-bracket", "fas fa-circle-question"];
    const { pathname } = useLocation();
    return (
        <div className="wd-kanbas-navigator">
            <h1>N</h1>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/${link}`}
                    className={`list-group-item ${pathname.includes(link) && "active"}`}>
                    <i className={icons[index]}></i>
                    <br />
                    {link}
                </Link>
            ))}
        </div>
    );
}
export default KanbasNavigation;