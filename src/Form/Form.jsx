import React,{useState} from 'react'
import SignUp from './SignUp'
import Login from './Login'


function Form() {

    const [flag, setFlag] = useState(true)

    return (
        <div>
            {flag ? <SignUp setFlag={setFlag} /> : <Login setFlag={setFlag} />}
        </div>
    )
}

export default Form
