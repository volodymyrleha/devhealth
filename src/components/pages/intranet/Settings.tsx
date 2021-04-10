import * as React from 'react';
import { Flex, Input, Button, SearchIcon, useCSS } from '@fluentui/react-northstar';
import { FullscreenPage, PageSidebar, PageContent, PageSection } from '../../content';
import { DialogAddNode } from './DialogAddNode';
import { MenuTree } from './MenuTree';

export default function Settings() {
    const searchClass = useCSS(() => ({
        marginBottom: '16px',
        width: '320px',
        'input': {
            width: '100%'
        }
    }));

    const bottomButtonsClass = useCSS(() => ({
        position: 'absolute',
        bottom: '40px',
        right: '40px'
    }));

    const sidebar = [{        
        divider: 1,
        content: 'Settings'
    }, {
        content: 'Step 1'
    }, {
        content: 'Step 2'
    }, {
        content: 'Step 3'
    }, {
        divider: 2,
        content: 'Administration'
    }, {
        content: 'Licensing'
    }, {
        content: 'Administration'
    }];

    const header1 = {
        main: 'Configure Navigation',
        sub: 'The Mega Menu can be configured here'
    };
    
    const header2 = {
        main: 'Add Navigation entries',
        sub: 'Here\'s an example of how section can be used to group inputs'
    };    

    return (
        <FullscreenPage>
            <PageSidebar header='Settings' data={ sidebar } />
            <PageContent>
                <PageSection headerType="h1" header={ header1.main } subheader={ header1.sub } /> 
                <PageSection headerType="h3" header={ header2.main } subheader={ header2.sub } >
                    <DialogAddNode />
                    <Input className={ searchClass } placeholder="Search for a navigation entry..." icon={ <SearchIcon /> } />
                    <MenuTree />
                </PageSection>
                <Flex className={ bottomButtonsClass } gap="gap.medium">
                    <Button content="Discard" />
                    <Button content="Save" primary />
                </Flex>
            </PageContent>
        </FullscreenPage>
    );
}