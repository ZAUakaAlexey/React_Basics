import './employees-list.css';
import EmployeesListItem from "../employees-list-item/employees-list-item";

const EmployeesList = ({data, onDelete, onToggleProp, onSalaryUpdate}) => {
    const elements = data.map(item => {

        const {id, ...itemProps} = item; //деструктуризация по остаточному принципу, в пропс key - передаем значение идентификатора
        return <EmployeesListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                onSalaryUpdate={onSalaryUpdate}
                id={id}
                />

    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;