import { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term : ''
        }
    }

    onSearch = (e) => {
        const searchString = e.target.value;
        this.setState({
            term : searchString
        });
        this.props.onUpdateSearch(searchString);
    }
    
    render(){
        return (
            <input 
                type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                onChange={this.onSearch}
                value={this.state.term} />
        )
    }
    
}

export default SearchPanel;