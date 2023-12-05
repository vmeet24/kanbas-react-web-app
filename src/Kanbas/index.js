import { Route, Routes, Navigate } from "react-router";
import axios from "axios";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
// import Account from "./Account";
import Signin from "./users/signin";
import Signup from "./users/signup";
import Account from "./users/account";
import UserTable from "./users/table";
import Dashboard from "./Dashboard";
import Nav from "../Nav";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
    const [courses, setCourses] = useState([]);
    const API_BASE = "https://kanbas-node-server-app-vu1o.onrender.com/api"
    const URL = `${API_BASE}/courses`;
    const findAllCourses = async () => {
        const response = await axios.get(URL);
        setCourses(response.data);
    };
    useEffect(() => {
        findAllCourses();
    }, []);

    const [course, setCourse] = useState({
        name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
    });
    const addNewCourse = async () => {
        const response = await axios.post(URL, course);
        setCourses([
            response.data,
            ...courses,
        ]);
        setCourse({ name: "" });
    };
    const deleteCourse = async (courseId) => {
        await axios.delete(
            `${URL}/${courseId}`
        );
        setCourses(courses.filter(
            (c) => c._id !== courseId));
    };
    const updateCourse = async () => {
        await axios.put(
            `${URL}/${course._id}`,
            course
        );
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                }
                return c;
            })
        );
        setCourse({ name: "" });
    };


    return (
        <Provider store={store}>
            <div className="d-flex">
                <KanbasNavigation />
                <div>
                    <Nav />
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        {/* <Route path="Account" element={<Account />} /> */}
                        <Route path="Dashboard" element={<Dashboard
                            courses={courses}
                            course={course}
                            setCourse={setCourse}
                            addNewCourse={addNewCourse}
                            deleteCourse={deleteCourse}
                            updateCourse={updateCourse} />
                        } />
                        <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
                        {/* <Route path="Calendar" element={<h1>Calendar</h1>} /> */}
                        <Route path="/SignIn" element={<Signin />} />
                        <Route path="/SignUp" element={<Signup />} />
                        <Route path="/Account" element={<Account />} />
                        <Route path="/Account/:id" element={<Account />} />
                        <Route path="/Account/admin/users" element={<UserTable />} />
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}
export default Kanbas;