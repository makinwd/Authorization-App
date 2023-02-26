import React, { FC } from 'react';
import Typography from '@mui/material/Typography/Typography';
import styles from './authParagraph.module.css'

export const AuthParagraph: FC = () => {
  return (
    <div className={styles.authParagraph}>
      <Typography variant="h4" component="div">
        Войдите
      </Typography>
      <Typography
        variant="subtitle1"
        component="div"
        gutterBottom={true}
        className={styles.authParagraph__subtitle}
      >
        Если ранее регистрировались
      </Typography>
    </div>
  );
};
