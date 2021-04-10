import React, { FunctionComponent } from 'react'
import { Header, Text, useCSS } from '@fluentui/react-northstar';

type PageSectionProps = {
    headerType: any,
    header: string,
    subheader: string
}

export const PageSection: FunctionComponent<PageSectionProps> = ({ headerType, header, subheader, children }) => {
    const headerClass = useCSS(() => ({
        marginBottom: '8px'
    }));

    const textClass = useCSS(() => ({
        display: 'block',
        marginBottom: '20px'
    }));

    return (
        <>
            <Header className={ headerClass } as={ headerType } content={ header } />
            <Text className={ textClass } content={ subheader } />
            { children }
        </>
    );
}