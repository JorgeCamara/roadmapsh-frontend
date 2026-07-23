export interface dropdownOptionIntf {
    key: string,
    selected?: boolean,
    name: string,
    value: string | number,
};

export interface DropdownOptionListIntf {
    optionList: dropdownOptionIntf[],
    onOptionSelected: (selection: dropdownOptionIntf) => void,
};

export interface CustomDropdownProps {
    placeholder: string,
    dropdownOptions?: dropdownOptionIntf[],
    updateDropdownSelection?: (option: dropdownOptionIntf) => void,
}