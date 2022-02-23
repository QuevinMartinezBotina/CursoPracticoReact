import React from 'react';
import { children } from 'react/cjs/react.production.min';

const Layout = ({children}) => {
    return (
        <div className="Layout">
            {children}
        </div>
    );
}

export default Layout;