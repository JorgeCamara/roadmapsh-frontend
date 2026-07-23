import type { DropdownOptionListIntf, dropdownOptionIntf } from "./DropdownOptionList.types";
import styles from './CustomDropdown.module.css';

function DropdownOptionList (props: DropdownOptionListIntf) {
    return (
        <div>
            <ul className={`${styles.customDropdownOptionList}`}>
                {(props.optionList || []).map((option: dropdownOptionIntf) => 
                    <li key={option.key} onClick={() => props.onOptionSelected(option)}>
                        {option.name}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default DropdownOptionList;