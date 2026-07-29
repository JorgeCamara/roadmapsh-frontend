import { useState } from "react";
import DropdownOptionList from '@components/custom-dropdown/option-list/DropdownOptionList';
import IconContainer from "@/containers/icon/IconContainer";
import { ICON_SIZES, ICONS, getIconSize } from "@/containers/icon/Icon";
import type { dropdownOptionIntf, CustomDropdownProps } from '@components/custom-dropdown/option-list/DropdownOptionList.types';
import DROPDOWN_CONSTANTS from '@components/custom-dropdown/dropdown/DropdownConstants';
import styles from '@components/custom-dropdown/dropdown/CustomDropdown.module.css';

function CustomDropdown (props: CustomDropdownProps) {
    const { selectedOption } = props;
    const [isOpen, setIsOpen] = useState(false);

    const onOptionSelection = (selectedOption: dropdownOptionIntf) => {
        setIsOpen(false);
        props.updateDropdownSelection?.(selectedOption);
    };
    const stateIconName = isOpen ? ICONS.chevronUp : ICONS.chevronDown;

    return (
        <div className={styles.customDropdown}>
            <button
                className={styles.dropdownSelectorContainer}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={styles.dropdownContent}>
                    <span className={styles.dropdownLabel}>{props.placeholder || DROPDOWN_CONSTANTS.defaultPlaceholder}</span>
                    <IconContainer iconName={stateIconName} iconSize={getIconSize(ICON_SIZES.SMALL)}/>           
                </span>
            </button>
            {isOpen &&
                (<DropdownOptionList
                    optionList={props.dropdownOptions ?? []}
                    onOptionSelected={onOptionSelection}
                    selectedOption={selectedOption}
                    maxWidth={props.optionListMaxWidth}
                />
                )
            }
        </div>
    );
}

export default CustomDropdown;
