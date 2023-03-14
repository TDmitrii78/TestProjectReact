import { Component } from "react";

import "./search-panel.css";

class SearchPanel extends Component{
    constructor(props) {
        super(props);
        this.state = {
            searchName: ""
        }
    }

    onValueChange = (event) => {
        const searchName = event.target.value;
        this.setState(() => ({
            searchName: searchName
        }))
        this.props.searchEmployers(searchName);
    }

    render() {
        return (
            <input type="text"
            value={this.state.name}
            onChange={this.onValueChange}
            placeholder="Найти сотрудника"
            className="search-input form-control"
            />
        );
    }
}

export default SearchPanel;