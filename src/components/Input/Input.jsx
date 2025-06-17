import { React, useState, forwardRef } from 'react';
import './input.css';
import eye from '../../assets/eye.png';
import validationTick from '../../assets/success.png';

const Input = forwardRef(function Input({ label, type, inputGroup, inputRow, name, id, onChange, onBlur, value, tick }, ref) {
    const [showPassword, setShowPassword] = useState('password');

    if (type === 'password') {
        type = showPassword;
    }

    const togglePassword = () => {
        setShowPassword(type === 'password' ? 'text' : 'password');
    }

    const displayEye = label === 'Password' || label === "Confirm Password";
    const validateBtn = inputRow === 'channel';

    return (
        <div className={`input-group ${inputGroup}`}>
            <label htmlFor="">{label}</label>
            <div className={`input-row ${inputRow}`}>
                <input type={type} name={name} id={id} onChange={onChange} onBlur={onBlur} value={value} ref={ref} />

                {displayEye && <img src={eye} alt="" onClick={togglePassword} />}
                {tick && <img src={validationTick} />}
                {validateBtn && 
                    <div className="validate-btn">
                        <p>VALIDATE</p>
                    </div>
                }
            </div>
        </div>
    )
})

export default Input;