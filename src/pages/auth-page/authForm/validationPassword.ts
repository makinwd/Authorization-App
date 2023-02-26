export const passwordValidation = {
  required: 'Обязательно к заполнению',
  validate: (value: string) => {
    if (value.length < 6) {
      return 'Пароль не может сожержать меньше 6 символов';
    }
    return true;
  },
};
