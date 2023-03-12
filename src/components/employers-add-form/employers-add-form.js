import { Component } from "react";
import "./employers-add-form.css";

class EmployersAddForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            salary: 0
        }
    }

    onValueChange = (event) => {
        this.setState(({name}) => ({
            [event.target.name]: event.target.value
        }))
    }

    render() {
        return (
            <div className="app-add-form">
                <h3>Добавить нового сотрудника</h3>
                <form className="add-form d-flex">
                    <input type="text" 
                        onChange={this.onValueChange}
                        name="name"
                        value={this.state.name}
                        className="form-control new-post-label"/>
            
                    <input type="number" 
                        onChange={this.onValueChange}
                        name="salary"
                        value={this.state.salary}
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