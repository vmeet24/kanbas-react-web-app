import ModuleList from "./list";
function Modules() {
    return (
        <div>
            <h2>Modules</h2>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "end" }}>
                <button className="btn btn-secondary" style={{ marginRight: "10px" }}>
                    Collapse All
                </button>
                <button className="btn btn-secondary" style={{ marginRight: "10px" }}>View Progress</button>
                <select style={{ marginRight: "10px" }}>
                    <option>Publish All</option>
                    <option>Publish all items and modules</option>
                    <option>UnPublish</option>
                </select>
                <button className="btn btn-danger" style={{ marginRight: "10px" }}>Module</button>
            </div>
            <ModuleList />
        </div>
    );
}

export default Modules;
