import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "Alex P.", salary: 800, increase : false, rise: true, id:1},
                {name: "John C.", salary: 2000, increase : true, rise: false, id:2},
                {name: "Mike W.", salary: 5000, increase : false, rise: false, id:3},
            ],
            term: '',
            filter: 'all',
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data : data.filter(item => item.id !== id)
            }
        });
    }

    addNewItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase : false,
            rise: false,
            id : this.maxId++
        }
        
        this.setState(({data}) => {
            const newArr = [...data,newItem]
            return {
                data : newArr
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data : data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item
            })
        }))
    }

    filterEmp = (items, term) => {
        if (items.length === 0) {
            return items
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }
    
    onUpdateSearch = (term) => {
        this.setState({term : term})
    }

    onFilterSelect = (filter) => {
        this.setState({filter : filter})
    }

    onSalaryUpdate = (id, newSalary) => {
        
        const newData = this.state.data.map((item) => {
            if (item.id === id) {
                return {...item, salary : newSalary}
            }
            return item
        });
        
        this.setState({data : newData})
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items
        }
    }

    render() {
        const {data, term, filter} = this.state;

        const companyName = 'new company';
        const numberOfEmployees = data.length;
        const numberofIncreased = data.filter(item => item.increase).length;

        const visibleData = this.filterPost(this.filterEmp(data, term), filter);
        // const visibleData = this.filterPost(this.searchEmp(data, term), filter);
        return (
            <div className="app">
                <AppInfo
                    companyName={companyName}
                    numberOfEmployees={numberOfEmployees}
                    numberofIncreased={numberofIncreased}
                    />
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    onSalaryUpdate={this.onSalaryUpdate}/>
                <EmployeesAddForm
                    onAdd={this.addNewItem}/>
            </div>
        );
    }
    
};

export default App;