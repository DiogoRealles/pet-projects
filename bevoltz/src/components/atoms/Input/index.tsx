import { ChangeEvent, useState } from 'react'

import { Text } from '../Text'
import { Select, SelectInputContainer, SelectInputLabel } from './styles'

interface InputSelectProps {
  label: string
  options: Array<string>
}

export const InputSelect: React.FC<InputSelectProps> = ({ label, options }) => {
  const [selectedOption, setSelectedOption] = useState('option1')

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value)
  }

  return (
    <SelectInputContainer>
      <SelectInputLabel htmlFor="selectInput">
        <Text color="gray_300" content={label} size="xsmall" weight="bold" />
      </SelectInputLabel>

      <Select
        id="selectInput"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        {options.map((option) => {
          return (
            <option value="option1" key={option}>
              {option}
            </option>
          )
        })}
      </Select>
    </SelectInputContainer>
  )
}
