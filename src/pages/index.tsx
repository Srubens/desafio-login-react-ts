import React from 'react'
import {Input} from '@/components'
import { defaultValues, IFormLogin } from './types'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  email:yup.string().email("E-mail invalidos, preencha corretamente").required("Campo obrigatorio"),
  password:yup.string().min(6,"A senha tem que ter no mínimo 6").required("Campo obrigatorio")
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
          <div className="card p-3 col-12 col-md-5">
            <header>
              <h1>Login</h1>
            </header>
            <Input className='form-control' placeholder="E-mail" control={control} type="email" name="email" errorMessage={errors?.email?.message} />
            <br/>
            <Input className='form-control' placeholder="Senha" control={control} name="password" type="password" errorMessage={errors?.password?.message} />
            <br/>
            <div className="d-flex justify-content-center align-items-center">

              { isValid !== true ? ( <div className={`btn btn-success disabled col-12 col-md-4`} >botao</div> ) : ( <div className="btn btn-success col-12 col-md-4" >botao</div> ) }
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Home