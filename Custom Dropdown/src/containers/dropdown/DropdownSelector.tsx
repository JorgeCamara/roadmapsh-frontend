import { useState } from 'react'
import CustomDropdown from "@components/custom-dropdown/dropdown/CustomDropdown";
import type { dropdownOptionIntf } from "@components/custom-dropdown/option-list/DropdownOptionList.types";
import { DROPDOWN_CONSTANTS } from '@containers/dropdown/DropdownConstants';

function DropdownSelector () {
    const [selectedGame, setSelectedGame] = useState<undefined | dropdownOptionIntf>(undefined);

    const updateDropdownSelection = (selectedOption: dropdownOptionIntf) => {
      setSelectedGame(selectedOption);
    }

    const dropdownOptions = DROPDOWN_CONSTANTS.initialOptions || undefined;

    const getPlaceholderValue = () => {
      return selectedGame ? selectedGame.name : DROPDOWN_CONSTANTS.defaultPlaceholder;
    }

    return (
    <>
      <section>
        <CustomDropdown
          placeholder={getPlaceholderValue()}
          dropdownOptions={dropdownOptions}
          updateDropdownSelection={updateDropdownSelection}
          selectedOption={selectedGame}
        />
      </section>
    </>
  ); 
}

export default DropdownSelector;