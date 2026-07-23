import { useState } from "react";
import DropdownOptionList from '../option-list/DropdownOptionList';
import type { dropdownOptionIntf, CustomDropdownProps } from '../option-list/DropdownOptionList.types';
import styles from './CustomDropdown.module.css';

const DEFAULT_PLACEHOLDER = "Choose your option";

function CustomDropdown (props: CustomDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    const onOptionSelection = (selectedOption: dropdownOptionIntf) => {
        setIsOpen(false);
        props.updateDropdownSelection?.(selectedOption);
    };

    return (
        <>
            <button
                className={styles.dropdownSelectorContainer}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={styles.dropdownLabel}>{props.placeholder || DEFAULT_PLACEHOLDER}</span>                
            </button>
            {isOpen &&
                (<DropdownOptionList
                    optionList={props.dropdownOptions ?? []}
                    onOptionSelected={onOptionSelection}
                />
                )
            }
        </>
    );
}

export default CustomDropdown;