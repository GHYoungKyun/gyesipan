import React from 'react';
import { Route, Link } from 'react-router-dom';
import List from './list';

const App = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">LIST</Link>
                </li>
            </ul>
            <hr/>
            <Route path="/" exact={true} component={List}/>
        </div>
    )
}

export default App;
