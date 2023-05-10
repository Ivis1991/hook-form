import { useForm } from 'react-hook-form';
import { yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './Formulario.css';


export default function Formulario() {

const schema = yup.object().shape({
 fullName:yup.string().required('You should type your Full Name'),
 email:yup.string().email().required("Please enter a valid email address"),
 age:yup.number().positive().integer().min(18).required("You should have more than 18 to register"),
 password:yup.string().min(4).required('You should comply the minumum security, more than 4 caracter required'),
 confirmppass:yup.string().oneOf([yup.ref('password'),null]).required('The confirm password do not match'),

})

const { register, handleSubmit, formState:{errors}} = useForm({
  resolver : yupResolver(schema),
});

const onSubmit = (data) => {
  console.log(data);
}

  return (
    <div className='loginf'>
       <form onSubmit = {handleSubmit(onSubmit)}>
      <input type='text' placeholder='Full Name' {...register("fullName")}/>
          <p>{errors.fullName?.message}</p>
      <input type='text' placeholder='Email' {...register("email")}/>
          <p>{errors.email?.message}</p>
      <input type='number' placeholder='Age' {...register("age")}/>
          <p>{errors.age?.message}</p>
      <input type='text' placeholder='Password' {...register("password")}/>
          <p>{errors.password?.message}</p>
      <input type='text' placeholder='Confirm Password' {...register("confirmp")}/>
         <p>{errors.confirmp?.message}</p>
      <input type='submit'/>
    </form>
    </div>

  );
}