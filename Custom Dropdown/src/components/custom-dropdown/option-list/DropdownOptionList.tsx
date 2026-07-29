import type { DropdownOptionListIntf, dropdownOptionIntf } from "@components/custom-dropdown/CustomDropdown.types";
import ListItem from '@/components/custom-dropdown/option-item/ListItem';
import styles from '@components/custom-dropdown/option-list/DropdownOptionList.module.css';

function DropdownOptionList (props: DropdownOptionListIntf) {
    const { optionList, selectedOption } = props;
    const onItemClick = (option: dropdownOptionIntf) => {
        return props.onOptionSelected(option);
    }

    return (
        <div
            className={styles.optionListContainer}
            style={{ maxWidth: props.maxWidth }}
        >
            <ul className={styles.optionListContent}>
                {(optionList || []).map((item: dropdownOptionIntf) => {
                    return (
                        <ListItem
                            key={item.key}
                            option={item}
                            onItemClicked={(clickedOption: dropdownOptionIntf) => onItemClick(clickedOption)}
                            isSelected={selectedOption && selectedOption.key === item.key}
                        />
                    )
                }
                )}
            </ul>
        </div>
    )
}

export default DropdownOptionList;
