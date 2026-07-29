import type { CSSProperties } from 'react';

export interface dropdownOptionIntf {
    key: string,
    name: string,
    value: string | number,
};

export interface DropdownOptionListIntf {
    optionList: dropdownOptionIntf[],
    onOptionSelected: (selection: dropdownOptionIntf) => void,
    selectedOption: dropdownOptionIntf | undefined,
    maxWidth?: CSSProperties['maxWidth'],
};

export interface CustomDropdownProps {
    placeholder: string,
    dropdownOptions?: dropdownOptionIntf[],
    updateDropdownSelection?: (option: dropdownOptionIntf) => void,
    selectedOption: dropdownOptionIntf | undefined,
    optionListMaxWidth?: CSSProperties['maxWidth'],
}
