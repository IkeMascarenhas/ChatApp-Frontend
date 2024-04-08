type InputHomeProps = {
    InputValue:string,
    setInputValue:React.Dispatch<React.SetStateAction<string>>,
    d:string,
    placeholder:string,
}

const InputHome = ({InputValue, setInputValue, d, placeholder}:InputHomeProps) => {
  return (
    <label className="input input-bordered flex items-center gap-2 input-primary">
    <svg xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d={d} /></svg>

    <input type="text" className="grow" placeholder={placeholder} 
    value={InputValue}
    onChange={e => {setInputValue(e.target.value)}}
    />
</label>
  )
}

export default InputHome