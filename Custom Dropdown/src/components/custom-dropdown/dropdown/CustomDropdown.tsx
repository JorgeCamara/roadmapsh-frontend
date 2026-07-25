import { useState } from "react";
import DropdownOptionList from '@components/custom-dropdown/option-list/DropdownOptionList';
import ChevronDown from '@/components/icons/chevron-down/ChevronDown';
import ChevronUp from "@/components/icons/chevron-up/ChevronUp";
import type { dropdownOptionIntf, CustomDropdownProps } from '@components/custom-dropdown/option-list/DropdownOptionList.types';
import DROPDOWN_CONSTANTS from '@components/custom-dropdown/dropdown/DropdownConstants';
import styles from '@components/custom-dropdown/dropdown/CustomDropdown.module.css';

function CustomDropdown (props: CustomDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    const onOptionSelection = (selectedOption: dropdownOptionIntf) => {
        setIsOpen(false);
        props.updateDropdownSelection?.(selectedOption);
    };

    return (
        <div className={styles.customDropdown}>
            <button
                className={styles.dropdownSelectorContainer}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={styles.dropdownContent}>
                    <span className={styles.dropdownLabel}>{props.placeholder || DROPDOWN_CONSTANTS.defaultPlaceholder}</span>
                    {isOpen ? <ChevronUp /> : <ChevronDown />}              
                </span>
            </button>
            {isOpen &&
                (<DropdownOptionList
                    optionList={props.dropdownOptions ?? []}
                    onOptionSelected={onOptionSelection}
                />
                )
            }
        </div>
    );
}

export default CustomDropdown;