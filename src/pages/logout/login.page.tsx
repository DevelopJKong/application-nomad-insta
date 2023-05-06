import AuthLayout from '../../components/auth/auth-layout.component';
import { Input } from '../../components/auth/auth-shared.component';
import AuthButton from '../../components/auth/auth-button.component';
import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';

interface IForm {
   email: string;
   password: string;
   result?: string;
}

const Login = () => {
   const { register, handleSubmit, setValue, getValues } = useForm<IForm>();

   const passwordRef: React.MutableRefObject<any> = useRef(null);
   const onNext = (nextOne: React.MutableRefObject<any>) => {
      nextOne?.current?.focus();
   };

   const onValid = (data: IForm) => {
      console.log(data);
   };

   useEffect(() => {
      register('email');
      register('password');
   }, [register]);

   return (
      <AuthLayout>
         <Input
            placeholder='Email'
            returnKeyType='next'
            autoCapitalize={'none'}
            onSubmitEditing={() => onNext(passwordRef)}
            onChangeText={(text) => setValue('email', text)}
         />
         <Input
            ref={passwordRef}
            placeholder='Password'
            returnKeyType='done'
            secureTextEntry
            onChangeText={(text) => setValue('password', text)}
         />
         <AuthButton text={'Login'} disabled={false} onPress={handleSubmit(onValid)} />
      </AuthLayout>
   );
};

export default Login;
