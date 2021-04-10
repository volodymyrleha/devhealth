import * as React from 'react';
import { Dialog, Input, Dropdown, Button, useCSS } from '@fluentui/react-northstar';
import { MenuContext } from '../../../context/MenuContext';

export const DialogAddNode: React.FC = () => {
    const buttonClass = useCSS(() => ({
        margin: '0px 16px 16px 0px'
    }));

    const inputClass = useCSS(() => ({
        marginBottom: '24px'
    }));

    const { menu, addMenu } = React.useContext(MenuContext);
    const [ inputData, setInputData ] = React.useState('');
    const [ dropdownData, setDropdownData ] = React.useState(null);

    const dropdownItems = ['root'];

    for (const menuItem of menu) {
        dropdownItems.push(menuItem.menu);

        for (const submenu of menuItem.submenu) {
            dropdownItems.push(menuItem.menu + '\\' + submenu.menu);

            for (const subsubmenu of submenu.submenu)
                dropdownItems.push(menuItem.menu + '\\' + submenu.menu + '\\' + subsubmenu.header);
        }
    }

    const onConfirm = () => {
        if (!dropdownData || !inputData)
            alert('Root field and title is required, inserting aborted');
        else
            addMenu(dropdownData, inputData);
    }

    return (
        <Dialog
            cancelButton="Cancel"
            confirmButton="Add Item"
            header="Add New Menu Item"
            content={
                <>
                    <Input onChange={ (e, data: any) => { setInputData(data.value); }} className={ inputClass } placeholder="Title..." />
                    <Dropdown onChange={ (e, data: any) => { setDropdownData(data.value) } } placeholder="Select Node" items={ dropdownItems } />
                </>
            }
            onConfirm={ onConfirm }
            trigger={<Button className={ buttonClass } content="+ Add Entry" primary />}
        />
    );
}