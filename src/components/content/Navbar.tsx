import React, { FunctionComponent } from 'react';
import { 
    Flex, 
    FlexItem, 
    ZoomToFitIcon, 
    AddIcon,
    MoreIcon, 
    QuestionCircleIcon,
    VideoCameraEmphasisIcon,
    Header, 
    Menu,
    SplitButton,
    useCSS
} from '@fluentui/react-northstar'

type IntranetNavbarProps = {
    tabs: any,
    setActiveTab: any,
    header: string
}

export const Navbar: FunctionComponent<IntranetNavbarProps> = ({ header, tabs, setActiveTab }) => {
    const navbarClass = useCSS(theme => ({
        backgroundColor: theme.siteVariables.colorScheme.brand.backgroundHover1,
        padding: '0px 20px 0px 16px',
        borderBottom: '1px solid #E1DFDD'
    }));

    const iconClass = useCSS(() => ({
        color: 'white',
        padding: '6px',
        backgroundColor: '#45b6fe',
        borderRadius: '8px'
    }));

    const menuClass = useCSS(() => ({
        'li': {
            height: '100%'
        },
        '.fc': {
            fontWeight: 600,
            color: 'black'
        },
        height: '100%',
        borderBottom: 'none'
    }));

    const menuItemClass = useCSS(() => ({
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        fontSize: '16px',
        paddingTop: '8px'
    }));

    const menuHandler = (event: any, index: any) => {        
        setActiveTab(tabs[index.activeIndex]);
    }

    const menuItems = tabs.map((tab) => ({
        key: tab,
        content: tab,
        className: menuItemClass
    }));


    return (
        <Flex className={ navbarClass } gap="gap.medium" vAlign="center">
            <ZoomToFitIcon className={ iconClass } size="larger" />
            <Header as="h1" content={ header } />
            <Menu className={ menuClass } defaultActiveIndex={ 0 } onActiveIndexChange={ menuHandler } items={ menuItems } underlined primary />
            <AddIcon />
            <FlexItem push>
                <MoreIcon />
            </FlexItem> 
            <QuestionCircleIcon outline />
            <SplitButton button={{
                icon: <VideoCameraEmphasisIcon />,
                content: "Meet",
                key: "meet"
            }} />
        </Flex>
    );
}