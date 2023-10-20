import './index.css'

function CourseStatus() {
    return (
        <div className="course-info">
            <div id="control-course" className="panel">
                <div className="panel-title">
                    <h3>Course Status</h3>
                </div>
                <div>
                    <ul className="nav">
                        <li>
                            <div className="parallel-buttons">
                                <button className="btn btn-secondary btn-default">
                                    <i className="fa-solid fa-ban" style={{ color: "#000000" }}></i>
                                    Unpublish
                                </button>
                                <button className="btn btn-secondary" style={{ backgroundColor: "#198754" }}>
                                    <i className="fa-solid fa-circle-check" style={{ color: "#ffffff" }}></i>
                                    Published
                                </button>
                            </div>
                        </li>
                        <li>
                            <button className="btn btn-secondary btn-default">
                                Import Existing Content
                            </button>
                        </li>
                        <li>
                            <button className="btn btn-secondary btn-default">
                                Import from Commons
                            </button>
                        </li>
                        <li>
                            <button className="btn btn-secondary btn-default">
                                Choose Home Page
                            </button>
                        </li>
                        <li>
                            <button className="btn btn-secondary btn-default">
                                View Course Stream
                            </button>
                        </li>
                        <li>
                            <button className="btn btn-secondary btn-default">
                                New Announcement
                            </button>
                        </li>
                        <li>
                            <button className="btn btn-secondary btn-default">
                                New Analytics
                            </button>
                        </li>
                        <li>
                            <button className="btn btn-secondary btn-default">
                                View Course Notifications
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CourseStatus;