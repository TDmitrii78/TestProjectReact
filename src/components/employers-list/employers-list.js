import { Component } from "react";
import EmployersListItem from "../employers-list-item/employers-list-item";
import "./employers-list.css";

class EmployersList extends Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const {data, onDelete} = this.props;
        const elements = data.map(el => {
            return (
                <EmployersListItem 
                    key={el.id} 
                    name={el.name} 
                    salary={el.salary} 
                    increase={el.increase} 
                    onDelete={() => onDelete(el.id)} />
            )    
        });
    
        return (
            <ul className="app-list list-group">
                   {elements}
            </ul>
        );
    }

}

export default EmployersList;