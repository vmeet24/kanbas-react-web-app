import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Databases";


function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId);


    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div class="col-lg-6">
            <h2>Assignment Name</h2>
            <input value={assignment.title}
                className="form-control mb-2" />
            <select>
                <option value="VAL1">Value 1</option>
                <option value="VAL2" selected>
                    SpeedGrader
                </option>
                <option value="VAL3">Value 3</option>
            </select>
            <hr />
            <div >
                <form action="/Kanbas/Courses/Assignments/screen.html">
                    <label for="assignment-name" class="form-label">Assignment Name</label>
                    <input
                        id="assignment-name"
                        type="text"
                        class="form-control"
                        value="A1 - ENV + HTML"
                    />
                    <textarea
                        name="description"
                        id=""
                        cols="30"
                        rows="2"
                        class="form-control"
                    >This is the assignment description.</textarea>
                    <label for="points" class="form-label">Points</label>
                    <input
                        id="points"
                        type="text"
                        class="form-control"
                        value="100"
                    />
                    <label for="assignment-group" class="form-label">Assignment Group</label>
                    <select id="assignment-group" class="form-select">
                        <option value="VAL1">Value 1</option>
                        <option value="VAL2" selected>
                            ASSIGNMENTS
                        </option>
                        <option value="VAL3">Value 3</option>
                    </select>
                    <label for="display-grade" class="form-label">Display Grade as</label>
                    <select id="display-grade" class="form-select">
                        <option value="VAL1">Value 1</option>
                        <option value="VAL2" selected>
                            Percentage
                        </option>
                        <option value="VAL3">Value 3</option>
                    </select>
                    <div>
                        <label for="submission-type" class="form-label">Submission Type</label>
                        <select id="submission-type" class="form-select">
                            <option value="VAL1">Value 1</option>
                            <option value="VAL2" selected>
                                Online
                            </option>
                            <option value="VAL3">Value 3</option>
                        </select>
                        <br />
                        <label for="submission-type" class="form-label"> Online Entry Options</label>
                        <br />
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value="Text Entry"
                            name="checkbox-entry-options"
                            id="checkbox-text-entry"
                        />
                        <label for="checkbox-text-entry" class="form-label">Text Entry</label>
                        <br />
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value="Website URL"
                            name="checkbox-entry-options"
                            id="checkbox-website-url"
                        />
                        <label for="checkbox-website-url" class="form-label">Website URL</label>
                        <br />
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value="Media Recordings"
                            name="checkbox-entry-options"
                            id="checkbox-media-recordings"
                            checked
                        />
                        <label for="checkbox-media-recordings" class="form-label">Media Recordings</label>
                        <br />
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value="Student Annotations"
                            name="checkbox-entry-options"
                            id="checkbox-student-annotations"
                        />
                        <label for="checkbox-student-annotations" class="form-label">Student Annotations</label>
                        <br />
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value="File Uploads"
                            name="checkbox-entry-options"
                            id="checkbox-file-uploads"
                        />
                        <label for="checkbox-file-uploads" class="form-label">File Uploads</label>
                    </div>
                    <label for="submission-attempts" class="form-label">Submission Attempts</label>
                    <select class="form-select" id="submission-attempts">
                        <option value="VAL1">Value 1</option>
                        <option value="VAL2" selected>
                            Unlimited
                        </option>
                        <option value="VAL3">Value 3</option>
                    </select>
                    <label for="plagiarism-review" class="form-label">Plagiarism Review</label>
                    <select class="form-select" id="plagiarism-review">
                        <option value="VAL1">Value 1</option>
                        <option value="VAL2" selected>
                            None
                        </option>
                        <option value="VAL3">Value 3</option>
                    </select>
                    <label for="group-assignment" class="form-label">Group Assignment</label>
                    <br />
                    <input
                        class="form-check-input"
                        type="checkbox"
                        value="This is a group assignment"
                        name="checkbox-group-assignment"
                        id="checkbox-group-assignment"
                    />
                    <label for="checkbox-group-assignment" class="form-label">This is a group assignment</label>
                    <label for="peer-reviews" class="form-label">Peer Reviews</label>
                    <br />
                    <input
                        class="form-check-input"
                        type="checkbox"
                        value="Require Peer Reviews"
                        name="checkbox-require-peer-review"
                        id="checkbox-require-peer-review"
                    />
                    <label for="checkbox-require-peer-review" class="form-label">Require Peer Reviews</label>
                    <div class="col-lg-10">
                        <div class="col-lg-6">
                            <label for="assign-to" class="form-label">Assign to</label>
                            <input
                                id="assign-to"
                                type="text"
                                class="form-control"
                                value="Everyone"
                            />
                        </div>
                        <div class="col-lg-6">
                            <label for="fields-due" class="form-label">
                                Due
                            </label>
                            <input
                                type="date"
                                id="fields-due"
                                class="form-control"
                                value="2021-01-01"
                            />
                        </div>
                        <div class="row">
                            <div class="col-lg-3">
                                <label for="available-from" class="form-label">
                                    Available from
                                </label>
                                <input
                                    type="date"
                                    id="available-from"
                                    class="form-control"
                                    value="2021-01-01"
                                />
                            </div>
                            <div class="col-lg-3">
                                <label for="text-fields-until" class="form-label">
                                    Until
                                </label>
                                <input
                                    type="date"
                                    id="text-fields-until"
                                    class="form-control"
                                    value="2021-01-01"
                                />
                            </div>
                        </div>
                    </div>
                    <br />
                    <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                        className="btn btn-danger">
                        Cancel
                    </Link>

                    <button onClick={handleSave} className="btn btn-success me-2">
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
}


export default AssignmentEditor;