import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Grid, IconButton, InputAdornment, TextField} from '@mui/material';

const InputForm = ({half, name, label, type, autoFocus, handleChange, handleShowPassword})=>{
    return(
        <Grid item xs={12} sm={half ?6 :12}>
            <TextField 
                name={name}
                label={label}
                onChange={handleChange} 
                autoFocus ={autoFocus}
                xs={6}
                required
                fullWidth
                type={type}
                InputProps={name === 'password' ? {
                    endAdornment:(
                        <InputAdornment position='end'>
                            <IconButton onClick={handleShowPassword}>
                                {type === 'password' ?<Visibility/> :<VisibilityOff/>}
                            </IconButton>
                        </InputAdornment>
                    ) 
                }:null
             }
             />
            
        </Grid>
    )
}

export default InputForm
