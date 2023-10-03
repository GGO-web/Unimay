import { Button } from '@components/Button/Button';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface FormCommentProps {
  isAuth: boolean; // whether the User is authorized
  hideButtonCancel?: boolean; // hide the cancel button ?
}

export const FormComment: React.FC<FormCommentProps> = ({
  isAuth,
  hideButtonCancel
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    getValues
  } = useForm<Inputs>({ mode: 'onBlur' });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const createComment = () => {
    const valueNameUser = getValues('nameUser');
    const valueComment = getValues('comment');

    if (valueNameUser && valueComment) {
      console.log('name:', valueNameUser);
      console.log('comment:', valueComment);
    }
  };

  return (
    <form className="form-comment" onSubmit={handleSubmit(onSubmit)}>
      {isAuth && (
        <div className="form-comment__name-user error">
          <input
            className={`${errors.nameUser?.message ? 'error' : ''}`}
            placeholder="Введіть ім’я"
            type="text"
            {...register('nameUser', {
              required: "Обов'язкове поле для заповнення",
              minLength: {
                value: 2,
                message: "Ім'я повинно бути не менше 2 символів"
              },
              maxLength: {
                value: 20,
                message: "Ім'я повинно бути не більш 20 символів"
              }
            })}
          />

          <span className="form-comment__error">
            {errors.nameUser?.message}
          </span>
        </div>
      )}

      <div className="form-comment__comment">
        <textarea
          className={`${errors.comment?.message ? 'error' : ''}`}
          placeholder="Введіть коментар..."
          {...register('comment', {
            required: "Обов'язкове поле для заповнення",
            minLength: {
              value: 5,
              message: 'Коментар повинний бути не менше 5 символів'
            },
            maxLength: {
              value: 500,
              message: 'Коментар повинний бути не більш 500 символів'
            }
          })}
        />

        <span className="form-comment__error">{errors.comment?.message}</span>
      </div>

      <div className="form-comment__btns">
        <button className="button-style" type="submit" onClick={createComment}>
          Відповісти
        </button>
        {hideButtonCancel || (
          <Button className="button-style button-style_stroke">
            Скасувати
          </Button>
        )}
      </div>
    </form>
  );
};
