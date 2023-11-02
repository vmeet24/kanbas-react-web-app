import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FaEllipsisV } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { AiFillCheckCircle } from "react-icons/ai";
import "./index.css";

function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div>
            <h2>Assignments for course {courseId}</h2>
            <div className="list-group">
                <div class="wd-assignment-heading">
                    <div>
                        <FaEllipsisV className="wd-icon drag" />
                        <i class="fas fa-caret-down"></i>
                        <span>
                            <strong>
                                ASSIGNMENTS
                            </strong>
                        </span>
                    </div>
                    <div class="wd-assignment-heading-secondary">
                        <div>
                            <span>40% of Total</span>
                        </div>
                        <div>
                            <i class="fas fa-plus"></i>
                        </div>
                        <div>
                            <i class="fas fa-ellipsis-v"></i>
                        </div>
                    </div>
                </div>
                {courseAssignments.map((assignment) => (
                    <Link
                        key={assignment._id}
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        className="list-group-item">
                        <div className="wd-assignment-item">
                            <div>
                                <FaEllipsisV className="wd-icon drag" />
                                <FiEdit className="wd-icon edit" />
                            </div>
                            <div className="wd-assignment-name">
                                <strong> {assignment.title}</strong>
                                Multiple Modules | Not Available yet
                            </div>
                            <AiFillCheckCircle className="wd-icon check" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default Assignments;