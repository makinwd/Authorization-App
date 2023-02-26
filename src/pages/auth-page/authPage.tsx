import React, { FC } from 'react';
import styles from './authPage.module.css';
import { AuthForm } from './authForm'

export const AuthPage: FC = () => {
  return <div className={styles.authPage}>
        <AuthForm />
  </div>;
};
  