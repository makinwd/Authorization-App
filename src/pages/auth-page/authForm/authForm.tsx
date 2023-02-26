import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styles from './authForm.module.css';
import { TextField } from '@mui/material';


export const AuthForm: FC = () => {
  return (
    <div className={styles.authForm}>
      <Typography variant="h4" component="div">
        Войдите
      </Typography>
      <Typography
        variant="subtitle1"
        component="div"
        gutterBottom={true}
        className={styles.authForm__subtitle}
      >
        Если ранее регистрировались
      </Typography>
      <form className={styles.authForm__form}>
        <TextField
          label="Логин"
          size="small"
          margin="normal"
          className={styles.authForm__input}
          fullWidth={true}
        />
        <TextField
          label="Пароль"
          type="password"
          size="small"
          margin="normal"
          className={styles.authForm__input}
          fullWidth={true}
        />
        <Button
          type="submit"
          variant="outlined"
          fullWidth={true}
          disableElevation={true}
          sx={{ marginTop: 2 }}
        >
          Войти
        </Button>
      </form>
    </div>
  );
};
