import React from 'react';

import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';

const DropdownMenuDefaultExample = () => {
  return (
    <DropdownMenu trigger="Priorities">
      <DropdownItemGroup>
        <DropdownItem>Highest</DropdownItem>
        <DropdownItem>High</DropdownItem>
        <DropdownItem>Medium</DropdownItem>
        <DropdownItem>Low</DropdownItem>
        <DropdownItem>Lowest</DropdownItem>
      </DropdownItemGroup>
    </DropdownMenu>
  );
};

export default DropdownMenuDefaultExample;