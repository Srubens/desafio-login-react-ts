import React from 'react'
import {Input} from '@/components'
import { defaultValues, IFormLogin } from './types'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  email:yup.string().email("email ou senha invalidos").required("Campo obrigatorio"),
  password:yup.string().min(6,"email ou senha invalidos").required("Campo obrigatorio")
})
.required()

const Home = () =>{
  const {control, watch, formState: {errors, isValid}} = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode:"onBlur",
    defaultValues,
    reValidateMode:"onChange"
  })
  
  const form:any = watch()
  console.log(isValid)

  return(
    <>
      <div className="container">
        <div className="d-flex align-items-center flex-column mt-5">
          <header>
            <h1>Login</h1>
          </header>
          <Input placeholder="E-mail" control={control} type="email" name="email" errorMessage={errors?.email?.message} />
          <br/>
          <Input placeholder="Senha" control={control} name="password" type="password" errorMessage={errors?.password?.message} />
          <br/>
          { isValid !== true ? ( <div className={`btn btn-success disabled`} >botao</div> ) : ( <div className="btn btn-success" >botao</div> ) }
          
        </div>
      </div>
    </>
  )
}

export default Home