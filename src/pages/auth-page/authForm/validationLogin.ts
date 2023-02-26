export const loginValidation = {
  required: 'Обязательно к заполнению',
  validate: (value: string) => {
    if (value.match(/[а-яА-Я]/)) {
      return 'Логин не может сожержать русские буквы';
    }
    return true;
  }
};
