import { Component } from 'react';

import './employees-list-item.css';

class EmployeesListItem extends Component {

    changeSalary = (e) => {
        const {id, onSalaryUpdate} = this.props;
        const newSalary = e.target.value;
        onSalaryUpdate(id, newSalary);
    }

    render(){
        const {name, salary, onDelete, onToggleProp, increase, rise} = this.props;

        let classNames = "list-group-item d-flex justify-content-between";
        
        if (increase) {
            classNames += " increase"
        }
    
        if (rise) {
            classNames += " like"
        }
        
        return (
            <li className={classNames}>
                <span onClick={onToggleProp} 
                    data-toggle="rise"
                    className="list-group-item-label">{name} 
                    </span>
    
                <input type="text" 
                        className="list-group-item-input" 
                        value={salary}
                        onChange={this.changeSalary}
                />
                        
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        onClick={onToggleProp}
                        data-toggle="increase"
                        className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
   
}


export default EmployeesListItem;