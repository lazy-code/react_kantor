import React, { Component, PropTypes } from 'react';

class TestKlimov extends Component {

    static propTypes = {
        //from Container component
        students: PropTypes.array.isRequired
    };

    state = {
      list: this.props.students
    };

    handleClick = (student) => {
        const newList = [].concat(this.state.list);

        newList.splice(
            this.state.list.indexOf(student),
            1
        );

        this.setState({
            list: newList
        });
    };

    render() {

        const studentsList = this.state.list.map(student => <li key={student.phone}>
                {student.name} {student.surname}
                <span onClick={this.handleClick.bind(this, student)}> [X]</span>
            </li>);

        return (
            <div>
                <h3>Student's List</h3>
                <ul>
                    {studentsList}
                </ul>
            </div>
        );
    }
}

export default TestKlimov;

