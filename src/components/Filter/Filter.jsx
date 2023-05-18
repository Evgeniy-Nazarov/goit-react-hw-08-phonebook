import PropTypes from 'prop-types';
import { changeFilter } from 'components/features/filteredSlice';
import { FilterContainer } from './Filter.styled';
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
        <span>Find contacts by name</span>
        <input type="text" onInput={handleInput} />
      </FilterContainer>
    </>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string,
  handleInput: PropTypes.func,
};
