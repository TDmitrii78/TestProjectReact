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
                {name: "John Smith", salary: 1000, increase: true, rise: false, id: "1"},
                {name: "Ivan Ivanov", salary: 1500, increase: true, rise: false, id: "2"},
                {name: "Vasiliy V", salary: 700, increase: false, rise: false, id: "3"}
            ],
            searchName: ""
        }
        this.newId = 4;
        this.increase = () => {return this.state.data.filter(el => el.increase === true).length}
        
    }

    searchEmployers = (searchName) => {
        this.setState(() => ({
            searchName: searchName
        }))
    }

    onToggleIncrease = (id) => {
        this.setState(({data}) => {
            return  {
                data: data.map(el => {
                            if (el.id === id) {
                                return {...el, increase: !el.increase}
                            }
                            return el;
                        })}
        })
    }

    onToggleRise = (id) => {
        this.setState(({data}) => {
            return {
                data: data.map(el => {
                        if (el.id === id) {
                            return {...el, rise: !el.rise}
                        }
                        return el;
                    })
            }
        })   
    }

    deleteItem = (id) => {
            this.setState(({data}) => ({
            data: data.filter((el) => el.id !== id)
        }));
    }

    addEmployers = (name, salary) => {
        const newEmployers = {name: `${name}`, salary: salary, increase: false, rise: false, id: this.newId++};
        this.setState(({data}) => ({
           data: data.concat(newEmployers)
        }));
    }

    filterListEmployers = (data, searchName) => {
        if (!searchName) {
            return data;
        }
        return data.filter(el => el.name.includes(searchName));
    }

    render() {
        const {data, searchName} = this.state;
        const visible = this.filterListEmployers(data, searchName);
        console.log(visible);
        return (
            <div className="app">
                <AppInfo increase={this.increase()} quantity={data.length}/>
                <div className="search-panel">
                    <SearchPanel searchEmployers={(searchName) => this.searchEmployers(searchName)}/>
                    <AppFilter/>
                </div>
                <EmployersList 
                    data={visible} 
                    onToggleIncrease={(id) => this.onToggleIncrease(id)}
                    onToggleRise={(id) => this.onToggleRise(id)}
                    onDelete={(id) => this.deleteItem(id)} />
                <EmployersAddForm 
                    onAdd={(name, salary) => this.addEmployers(name, salary)}/>
            </div>
        );
    }
}

export default App;