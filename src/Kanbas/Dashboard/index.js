import { Link } from 'react-router-dom';
import db from '../Databases'

function Dashboard() {
    const courses = db.courses;
    return (
        <div className="wd-flex-grow-1">
            <div className="wd-content-header">
                <nav className="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page">
                            Dashboard
                        </li>
                    </ol>
                </nav>
            </div>
            <div className="container wd-card-container wd-dashboard-grid">
                <strong>Published Courses (8)</strong>
                <hr></hr>

                <div className="row row-cols-1 row-cols-md-3 g-4 wd-dashboard-grid ">
                    {courses.map((course) => (
                        <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>
                            <div className="col">
                                <div className="card h-100">
                                    <img src="https://i.ytimg.com/vi/2-crBg6wpp0/maxresdefault.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{course.name}</h5>
                                        <p className="card-text">{course.number}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Dashboard;