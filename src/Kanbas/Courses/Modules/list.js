import React from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { findModulesForCourse, createModule, deleteModule, updateModule } from "./client";
import {
    addModule,
    setModule,
    setModules,
} from "./reducer";
function ModuleList() {

    const handleUpdateModule = async () => {
        updateModule(module).then((status) => {
            console.log(module);
            dispatch(updateModule(module));
        });

    };


    const handleDeleteModule = (moduleId) => {
        deleteModule(moduleId).then((status) => {
            dispatch(deleteModule(moduleId));
        });
    };

    const { courseId } = useParams();
    useEffect(() => {
        findModulesForCourse(courseId)
            .then((modules) =>
                dispatch(setModules(modules))
            );
    }, [courseId]);


    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

    const handleAddModule = () => {
        createModule(courseId, module).then((module) => {
            dispatch(addModule(module));
        });
    };

    return (
        <ul className="list-group wd-module-list">
            <li className="list-group-item">
                <button
                    onClick={handleAddModule}>
                    Add
                </button>
                <button
                    onClick={handleUpdateModule}>
                    Update
                </button>
                <input
                    value={module.name}
                    onChange={(e) =>
                        dispatch(setModule({ ...module, name: e.target.value }))
                    } />
                <textarea
                    value={module.description}
                    onChange={(e) =>
                        dispatch(setModule({ ...module, description: e.target.value }))
                    } />
            </li>

            {
                modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index} className="list-group-item">
                            <button
                                onClick={() => dispatch(setModule(module))}>
                                Edit
                            </button>

                            <button
                                onClick={handleDeleteModule}>
                                Delete
                            </button>
                            <h3>{module.name}</h3>
                            <p>{module.description}</p>
                        </li>
                    ))
            }
        </ul>
    );
}
export default ModuleList;