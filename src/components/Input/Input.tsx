import { IInputProps } from "./types"
import { Controller } from 'react-hook-form'

const Input = ({ errorMessage, name, control,...rest }:IInputProps) =>{
    return(
        <>
         <Controller
            control={control}
            name={name}
            render={ ( { field: {onChange, onBlur, value, ref}} ) => (
                <input 
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    ref={ref}
                    {...rest} 
                />
            ) }
         />
         { errorMessage ? <div>{errorMessage}</div> : null }
        </>
    )
}

export default Input