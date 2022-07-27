import { Button, FormControl, Select } from '@mui/material';
import { useState } from 'react';
import { Option } from '../../types';
import StyledSelectForm from './StyledSelectForm';

interface Props {
  options?: Option[];
  onSubmit: (value: string) => void;
}

const SelectForm = ({ options = [], onSubmit }: Props) => {
  const [selectedOption, setSelectedOption] = useState(''); // Missed type


  const handleSubmit = () => {
    if (selectedOption.length) {
      onSubmit(selectedOption);
    }
  };

  return (
    <StyledSelectForm>
      <FormControl>
        <Select
          value={selectedOption}
          native
          onChange={(event) => setSelectedOption(event.target.value as string)}
        >
          {!selectedOption.length && (
            <option value="" disabled hidden>
              Pick Mode
            </option>
          )}
          {options.map((option, index: number) => (
            <option key={index} value={option.value}>
              {option.name}
            </option>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <Button
          type="submit"
          variant="outlined"
          color="info"
          onClick={(event) => {
          //  I would rather remove this and add onSubmit listener to FormControl component
          //  Also e.preventDefault() call from handleSubmit
            event.preventDefault();
            handleSubmit();
          }}
        >
          START
        </Button>
      </FormControl>
    </StyledSelectForm>
  );
};

export default SelectForm;
