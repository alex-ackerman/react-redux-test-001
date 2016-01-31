import React from 'react';

export default class NameList extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    getNames() {
        return this.props.names.map(name => <li>{name}</li>);
    }
    
    render() {
        let names = this.getNames();
        return (
            <ul>
                {names}
            </ul>
        );
    }
    
}