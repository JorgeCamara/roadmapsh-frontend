import type { DropdownOptionListIntf, dropdownOptionIntf } from "@components/custom-dropdown/option-list/DropdownOptionList.types";
import styles from '@components/custom-dropdown/option-list/DropdownOptionList.module.css';

function DropdownOptionList (props: DropdownOptionListIntf) {
    return (
        <div className={styles.optionListContainer}>
            <ul className={styles.optionListContent}>
                {(props.optionList || []).map((option: dropdownOptionIntf) => 
                    <li
                        key={option.key}
                        onClick={() => props.onOptionSelected(option)}
                        className={styles.optionListItems}
                    >
                        {option.name}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default DropdownOptionList;