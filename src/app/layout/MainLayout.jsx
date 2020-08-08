import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import {header, menu, footer, content} from "components";



export class MainLayout extends PureComponent {
    static propTypes = {

    }

    render() {
        const { children, title, menu } = this.props;
        return (
            <div>
                <header />
                <menu />
                <content children={children} title={title} />
                <footer />
            </div>
        )
    }
}

export default MainLayout
