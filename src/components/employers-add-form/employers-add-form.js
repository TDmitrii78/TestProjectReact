import { Component } from "react";

import "./employers-add-form.css";

class EmployersAddForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            salary: ""
        }
    }

    onValueChange = (event) => {
        this.setState(({name}) => ({
            [event.target.name]: event.target.value
        }))
    }

    onSubmit =(event) => {
        event.preventDefault();
        if ((this.state.name) && (this.state.salary)) {
            this.props.onAdd(this.state.name, this.state.salary);
        }    
        this.setState(({name, salary}) => ({
        name: "",
        salary: ""
        }))
    }

    render() {
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавить нового сотрудника</h3>
                <form className="add-form d-flex" onSubmit={this.onSubmit}>
                    <input type="text" 
                        onChange={this.onValueChange}
                        name="name"
                        value={name}
                        placeholder="Имя сотрудника"
                        className="form-control new-post-label"/>
            
                    <input type="number" 
                        onChange={this.onValueChange}
                        name="salary"
                        value={salary}
                        placeholder="З/П в $"
                        className="form-control new-post-label"/>
           
                    <button type="submit" 
                        className="btn btn-outline-light">
                        Добавить
                    </button>
                </form>
            </div>
        )
    }
}

export default EmployersAddForm;