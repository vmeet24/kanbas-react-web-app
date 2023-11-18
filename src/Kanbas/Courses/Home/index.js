import CourseStatus from '../CourseStatus';
import ModuleList from '../Modules/list';
import './index.css';
function Home() {
    return (
        <div className='row'>
            <div className='col-10'>
                <h2>Home</h2>
                <ModuleList />
            </div>
            <div className='col-2'>
                <CourseStatus />
            </div>
        </div>
    );
}

export default Home;