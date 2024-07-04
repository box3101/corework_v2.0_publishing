import React, { useState } from 'react';
import { Select, Input } from 'antd';

const CustomSelect = () => {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const options = [
    { value: 'option1', label: 'Select menu item' },
    { value: 'option2', label: 'Select menu item' },
    { value: 'option3', label: 'Select menu item' },
    { value: 'option4', label: 'Select menu item' },
    { value: 'option5', label: 'Select menu item' },
  ];

  const filteredOptions = options.filter((option) => option.label.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <div style={{ width: '100%', position: 'relative' }}>
      <Select
        style={{ width: '100%' }}
        placeholder="Select"
        open={open}
        onDropdownVisibleChange={(visible) => setOpen(visible)}
        dropdownRender={(menu) => (
          <div>
            <Input
              style={{ margin: '4px 8px' }}
              placeholder="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            {menu}
          </div>
        )}
        options={filteredOptions}
      />
    </div>
  );
};

export default CustomSelect;
