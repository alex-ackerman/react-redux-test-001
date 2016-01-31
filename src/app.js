import React from 'react';
import NameList from './components/NameList';

class App extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        let names = ['name 1', 'name 2'];
        return (
            <div>
                <NameList names={names} />
            </div>
        );
    }
    
}

ReactDOM.render(document.querySelector('body'), <App />);