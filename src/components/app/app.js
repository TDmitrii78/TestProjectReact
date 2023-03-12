import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";
import "./app.css";

const data = [
    {name: "John Smith", salary: 1000, increase: false, id: "1"},
    {name: "Ivan Ivanov", salary: 1500, increase: true, id: "2"},
    {name: "Vasiliy V", salary: 700, increase: false, id: "3"}
];

function App() {
    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployersList data={data}/>
            <EmployersAddForm/>
        </div>
    );
}

export default App;