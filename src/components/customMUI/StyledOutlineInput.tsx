import { OutlinedInput, styled } from "@mui/material";

const StyledOutlineInput = styled(OutlinedInput)(({theme}) => ({
  '& .MuiSelect-input': {
    padding: '10px 20px',
  },
}))
export default StyledOutlineInput