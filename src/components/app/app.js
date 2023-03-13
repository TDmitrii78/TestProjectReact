import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";

import "./app.css";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "John Smith", salary: 1000, increase: false, id: "1"},
                {name: "Ivan Ivanov", salary: 1500, increase: true, id: "2"},
                {name: "Vasiliy V", salary: 700, increase: false, id: "3"}
            ]
        }
        this.newId = 4;
    }



    deleteItem = (id) => {
            this.setState(({data}) => ({
            data: data.filter((el) => el.id !== id)
        }));
    }

    addEmployers = (name, salary) => {
        const newEmployers = {name: `${name}`, salary: salary, increase: false, id: this.newId++};
        this.setState(({data}) => ({
           data: data.concat(newEmployers)
        }));
    }

    render() {
        const {data} = this.state;
        return (
            <div className="app">
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployersList 
                    data={data} 
                    onDelete={(id) => this.deleteItem(id)} />
                <EmployersAddForm 
                    onAdd={(name, salary) => this.addEmployers(name, salary)}/>
            </div>
        );
    }
}

export default App;