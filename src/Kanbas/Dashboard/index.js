import { Link } from 'react-router-dom';


function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }) {
    return (
        <div className="wd-flex-grow-1">
            <div className="wd-content-header">
                <nav className="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page">
                            <h3>Dashboard</h3>
                            <input value={course.name} className="form-control"
                                onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                            <input value={course.number} className="form-control"
                                onChange={(e) => setCourse({ ...course, number: e.target.value })} />
                            <input value={course.startDate} className="form-control" type="date"
                                onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
                            <input value={course.endDate} className="form-control" type="date"
                                onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
                            <button onClick={addNewCourse} >
                                Add
                            </button>
                            <button onClick={updateCourse} >
                                Update
                            </button>
                        </li>
                    </ol>
                </nav>
            </div>

            <div className="container wd-card-container wd-dashboard-grid">
                <strong>Published Courses (8)</strong>
                <hr></hr>

                <div className="row row-cols-1 row-cols-md-3 g-4 wd-dashboard-grid ">
                    {courses.map((course) => (
                        <Link key={course._id["$oid"]} to={`/Kanbas/Courses/${course._id["$oid"]}`}>

                            <div className="col">
                                <div className="card h-100">
                                    <img src="https://i.ytimg.com/vi/2-crBg6wpp0/maxresdefault.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{course.name}</h5>
                                        <p className="card-text">{course.number}</p>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={(event) => {
                                    event.preventDefault();
                                    setCourse(course);
                                }}>
                                Edit
                            </button>

                            <button
                                onClick={(event) => {
                                    event.preventDefault();
                                    deleteCourse(course._id);
                                }}>
                                Delete
                            </button>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Dashboard;