import React, { useState } from 'react';
import Input from '../components/input/Input.jsx';
import './userDetails.css';
import Button from '../components/button/Button';

const UserDetails = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [task, setTask] = useState([]);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const apiUrl = "http://localhost:1000";

    const handleSubmit = () => {
        if (name.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
            fetch(apiUrl + '/task', {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            }).then((res) => {
                if (res.ok) {
                    setTask([...task, { name, email, password }]); 
                    setMessage("Item added successfully");
                    setName('');
                    setEmail('');
                    setPassword('');
                } else {
                    setError("Unable to create task");
                }
            }).catch(() => {
                setError("Unable to create task");
                });
        } else {
            setError("All fields are required");
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') {
          setName(value);
        } else if (name === 'email') {
          setEmail(value);
        } else if (name === 'password') {
          setPassword(value);
        }
    };

    return (
        <div>
            <div className="form">
                <h1>User Form</h1>
                {message && <p>{message}</p>}
                <div className="name">
                    <p>Name:</p>
                    <Input placeholder="Enter your name" name="name" className={'input-name'} onChange={handleInputChange} value={name} />
                </div>
                <div className="email">
                    <p>Email:</p>
                    <Input placeholder="Enter email" name="email" className={'input-email'} onChange={handleInputChange} value={email} />
                </div>
                <div className="password">
                    <p>Password:</p>
                    <Input placeholder="Enter password" name="password" className={'input-password'} onChange={handleInputChange} value={password} />
                </div>
                <Button content="Submit" onClick={handleSubmit} />
                {error && <p>{error}</p>}
            </div>
            
            
{/* Submitted Data */}
            {/* <div className="Submiteddata">
                <h1>Submitted Data</h1>
                <>
                    {task.map((item) => (
                        <>
                            <p>Name: {item.name}</p>
                            <p>emai: {item.email}</p>
                            <p>password: {item.password}</p>
                        </>
                    ))}                
                </>
            </div> */}
        </div>
    );
};

export default UserDetails;
