import PropTypes from 'prop-types';
import { changeFilter } from 'redux/contscts/filteredSlice';
import {
  FilterContainer,
  FilterInputStyled,
  FilterLabelStyled,
  FilterSpanStyled,
} from './Filter.styled';
import { useDispatch } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();

  const handleInput = e => {
    const filterNormalize = e.target.value.toLowerCase();
    dispatch(changeFilter(filterNormalize));
  };

  return (
    <>
      <FilterContainer>
        <FilterSpanStyled>Find contacts by name</FilterSpanStyled>
        <FilterLabelStyled htmlFor="filter">
          <FilterInputStyled type="text" onInput={handleInput} />
        </FilterLabelStyled>
      </FilterContainer>
    </>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string,
  handleInput: PropTypes.func,
};
