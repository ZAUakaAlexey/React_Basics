import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';

function App() {

const   employees = [
            {name: "Alex P.", salary: 800, increase : true, id:1},
            {name: "John C.", salary: 2000, increase : true, id:2},
            {name: "Mike W.", salary: 5000, increase : false, id:3},
        ];

    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployeesList data={employees}/>
            <EmployeesAddForm/>
        </div>
    );
};

export default App;