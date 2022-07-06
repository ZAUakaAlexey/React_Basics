import './employees-list.css';
import EmployeesListItem from "../employees-list-item/employees-list-item";

const EmployeesList = ({data, onDelete}) => {
    const elements = data.map(item => {

        const {id, ...itemProps} = item; //деструктуризация по остаточному принципу, в пропс key - передаем значение идентификатора
        return <EmployeesListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}/>

    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;