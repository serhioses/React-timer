import React from 'react';
import Nav from 'Nav';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div>
                    <div>
                        <Nav/>
                        <p>Main.jsx rendered.</p>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}