import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props){
        super(props);
        this.state ={
            name : '',
            salary : ''
        }
    }

    onValueChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value // можно указать имя атрибута такое же как имя свойства в state - чтобы использовать один обработчик для двух инпутов
        })
    }
    
    onSubmit = (event) => {
        event.preventDefault();

        const {name, salary} = this.state;

        if (this.state.name.length < 3 || !this.state.salary) return;
        
        this.props.onAdd(name, salary); //метод переданный через props из app

        this.setState({
            name : '',
            salary : ''
        });

    }

    render() {
        const {name, salary} = this.state;
        
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"
                        value={name}
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange}/>
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}



export default EmployeesAddForm;