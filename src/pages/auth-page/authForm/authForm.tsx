import React, { FC } from 'react';
import { AuthParagraph } from './authParagraph/authParagraph';
import Button from '@mui/material/Button';
import styles from './authForm.module.css';
import { TextField } from '@mui/material';
import { loginValidation } from './validationLogin';
import { passwordValidation } from './validationPassword';
import {
  Controller,
  SubmitHandler,
  useForm,
  useFormState,
} from 'react-hook-form';

interface ISignForm {
  login: string;
  password: string;
}

export const AuthForm: FC = () => {
  const { handleSubmit, control } = useForm<ISignForm>();
  const { errors } = useFormState({ control });

  const onSubmit: SubmitHandler<ISignForm> = (data) => 
  localStorage.setItem('auth', JSON.stringify(data));

  return (
    <div className={styles.authForm}>
      <AuthParagraph />
      <form className={styles.authForm__form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="login"
          rules={loginValidation}
          render={({ field }) => (
            <TextField
              label="Логин"
              size="small"
              margin="normal"
              className="authForm__input"
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value}
              error={!!errors.login?.message}
              helperText={errors.login?.message}
            />
          )}
        />
        <Controller
          control={control}
          rules={passwordValidation}
          name="password"
          render={({ field }) => (
            <TextField
              type='password'
              label="Пароль"
              size="small"
              margin="normal"
              className="authForm__input"
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value}
              error={!!errors.password?.message}
              helperText={errors.password?.message}
            />
          )}
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
