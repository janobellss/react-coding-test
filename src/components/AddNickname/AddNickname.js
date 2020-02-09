import React, { useState } from 'react';

const AddNickname = (props) => {
    const [nickname, setNickname] = useState('');
    
    const [petname, setPetname] = useState({
        nickname: '',
        petname: ''
    });

    const handleChange = (e) => {
        // console.log(e.target.value);
        // setNickname(e.target.value);

        setPetname({
            ...petname,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        // console.log(nickname);
        e.preventDefault();
        // props.addNickname(nickname);
        // setNickname('');
        props.addNickname(petname.nickname + " " + petname.petname);
        setPetname({
            ...petname,
            nickname: '',
            petname: ''
        });
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type='text' 
                name='nickname' 
                placeholder='Add Nickname'
                // value={nickname}
                value={petname.nickname}
                onChange={handleChange}
                // onChange={(e) => {
                //     console.log(e.target.value);
                //     setNickname(e.target.value)
                // }}
            ></input>
            <input 
                type='text' 
                name='petname'
                placeholder='Add Petname'
                value={petname.petname}
                onChange={handleChange}
            ></input>
            <input 
                type='submit' 
                value='Add Name'
            ></input>
        </form>
    );
}

export default AddNickname;