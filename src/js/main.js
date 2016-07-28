import React from 'react';
import { render } from 'react-dom';

import '../assets/styles/global-styles.scss';

class App extends React.Component {
    render () {
        return (
            <div style={{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <h1 style={{color: '#F05A1E'}}> Hello world!</h1>
            </div>
        )
    }
}

const root = window.document.getElementById('react-root');


render(<App />, root);
