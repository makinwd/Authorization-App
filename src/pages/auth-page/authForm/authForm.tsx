import React, { FC } from 'react';
import Typography from '@mui/material/Typography' 
import styles from './authForm.module.css'

export const AuthForm: FC = () => {
    return (
        <div className={styles.authForm}>
            <Typography variant='h4' component='div'>Войдите</Typography>
        </div>
    )
}