import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
  input: {
    flex: 1,
    marginRight: 0,
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(1),
      marginBottom: 0,
    },
  },
  button: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
}));

const CustomInput = ({ onSubmit }) => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <div className={classes.root}>
      <TextField
        className={classes.input}
        label="Enter something"
        variant="outlined"
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </div>
  );
};

export default CustomInput;


