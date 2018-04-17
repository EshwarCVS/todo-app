import React from 'react';
import Dropdown from 'react-simple-dropdown';
var DropdownTrigger = Dropdown.DropdownTrigger;
var DropdownContent = Dropdown.DropdownContent;

export default class sample extends React.Component{
  constructor(props){
    super(props);
    this.state={value: this.props.category};
    this.handleChange=this.handleChange.bind(this);
  }
  handleChange(e){
    this.setState{value: e.target.value});
  }
  addcategory(todo) {
    if (todo.category === active) {
      this.props.addcategory(todo);
      this.setState({value: ''});
    }
  }

    render: function () {
        return (
            <Dropdown className="cty cty-primary" onClick={() => this.addTodo(this.state.value)}>
                <DropdownTrigger>Categories</DropdownTrigger>
                <DropdownContent>
                    <ul>
                        <li>General</li>
                        <li>Personal</li>
                        <li>Private</li>
                        <li>Protected</li>
                    </ul>
                </DropdownContent>
            </Dropdown>
        )
    }
}
