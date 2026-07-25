import { useState } from 'react'
import CustomDropdown from "@components/custom-dropdown/dropdown/CustomDropdown";
import type { dropdownOptionIntf } from "@components/custom-dropdown/option-list/DropdownOptionList.types";
import { DROPDOWN_CONSTANTS } from '@containers/dropdown/DropdownConstants';

function DropdownSelector () {
    const [selectedGame, setSelectedGame] = useState<undefined | dropdownOptionIntf>(undefined);
    console.log(selectedGame);
    
    const checkIsOptionSelected = (optionKey: string) => {
        return selectedGame?.key === optionKey;
    };

    const updateDropdownSelection = (selectedOption: dropdownOptionIntf) => {
        setSelectedGame(selectedOption);
    }

    const dropdownOptions = (DROPDOWN_CONSTANTS.initialOptions || []).map((originalOption: dropdownOptionIntf) => {
        return {
            ...originalOption,
            selected: checkIsOptionSelected(originalOption.key)
        }
    });

    const getPlaceholderValue = () => {
      return selectedGame ? selectedGame.name : DROPDOWN_CONSTANTS.defaultPlaceholder;
    }

    return (
    <>
      <section id="center">
        <CustomDropdown
          placeholder={getPlaceholderValue()}
          dropdownOptions={dropdownOptions}
          updateDropdownSelection={updateDropdownSelection}
        />
      </section>
    </>
  ); 
}

export default DropdownSelector;