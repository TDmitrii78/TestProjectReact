import EmployeesListItem from "../employers-list-item/employers-list-item";
import "./employers-list.css";

const EmployersList = ({data}) => {

    const elements = data.map(el => {
        return (
            <EmployeesListItem key={el.id} name={el.name} salary={el.salary} increase={el.increase}/>
        )    
    });

    return (
        <ul className="app-list list-group">
               {elements}
        </ul>
    );
}

export default EmployersList;