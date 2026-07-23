import { useState } from 'react'
import CustomDropdown from "../components/custom-dropdown/dropdown/CustomDropdown";
import type { dropdownOptionIntf } from "../components/custom-dropdown/option-list/DropdownOptionList.types";
import { DROPDOWN_CONSTANTS } from './DropdownConstants';

function DropdownSelector () {
    const [selectedGame, setSelectedGame] = useState<undefined | string>(undefined);
    console.log(selectedGame);
    
    const checkIsOptionSelected = (optionKey: string) => {
        return selectedGame === optionKey;
    };

    const updateDropdownSelection = (selectedOption: dropdownOptionIntf) => {
        setSelectedGame(selectedOption.key);
    }

    const dropdownOptions = (DROPDOWN_CONSTANTS.initialOptions || []).map((originalOption: dropdownOptionIntf) => {
        return {
            ...originalOption,
            selected: checkIsOptionSelected(originalOption.key)
        }
    });

    return (
    <>
      <section id="center">
        <CustomDropdown
          placeholder="Select a Game"
          dropdownOptions={dropdownOptions}
          updateDropdownSelection={updateDropdownSelection}
        />
      </section>
    </>
  ); 
}

export default DropdownSelector;