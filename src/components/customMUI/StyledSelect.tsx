import { Select, SelectProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledSelect = styled(Select)<SelectProps>(({ theme }) => ({
  '& .MuiSelect-select': {
    padding: '10px 20px',
  },
}));

export default StyledSelect;
