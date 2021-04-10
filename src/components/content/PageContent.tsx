import React, { FunctionComponent } from 'react'


export const PageContent: FunctionComponent= ({ children }) => {
    return (
        <div style={{ padding: '0px 20px' }}>
            { children }
        </div>
    );
}