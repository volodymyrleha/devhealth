import React from 'react';
import { 
	Flex, 
	Menu, 
	ZoomToFitIcon,
	BellIcon,
	ChatIcon,
	ContactGroupIcon,
	CalendarIcon,
	FilesEmptyIcon,
	MoreIcon,
	AppsIcon,
	useCSS
} from '@fluentui/react-northstar';
import { SidebarItem } from './SidebarItem';

export default function Sidebar() {
	const menuItemClass = useCSS(() => ({
		'span': {
			marginRight: '0px'
		},
		textAlign: 'center'
	}));

	const menuClass = useCSS(theme => ({
		backgroundColor: theme.siteVariables.colorScheme.brand.borderDisabled
	}));

    const items = [
		{
			key: 'intranet',
			content: (
				<SidebarItem content="Intranet">
					<ZoomToFitIcon size="large" />
			  	</SidebarItem>	
			),
			className: menuItemClass
		},
		{
			key: 'activity',
			content: (
				<SidebarItem content="Activity">
					<BellIcon size="large" outline />
			  	</SidebarItem>	
			),
			className: menuItemClass
		},
		{
			key: 'chat',
			content: (
				<SidebarItem content="Chat">
					<ChatIcon size="large" outline />
			  	</SidebarItem>	
			),
			className: menuItemClass
		},
		{
			key: 'team',
			content: (
				<SidebarItem content="Team">
					<ContactGroupIcon size="large" outline />
			  	</SidebarItem>	
			),
			className: menuItemClass
		},
		{
			key: 'calendar',
			content: (
				<SidebarItem content="Calendar">
					<CalendarIcon size="large" outline />
			  	</SidebarItem>	
			),
			className: menuItemClass
		},
		{
			key: 'files',
			content: (
				<SidebarItem content="Files">
					<FilesEmptyIcon size="large" outline />
			  	</SidebarItem>	
			),
			className: menuItemClass
		},
		{
			key: 'more',
			content: (
				<SidebarItem content="">
					<MoreIcon size="large" />
			  	</SidebarItem>	
			),
			className: menuItemClass
		},
		{
			key: 'apps',
			content: (
				<SidebarItem content="Apps">
					<AppsIcon size="large" outline />
			  	</SidebarItem>	
			),
			className: menuItemClass
		},
    ];

    return(
		<Flex>
			<Menu className={ menuClass } defaultActiveIndex={0} items={items} vertical pointing="start" />
		</Flex>
    );
}