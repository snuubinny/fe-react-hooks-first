
import React, { useState,useEffect } from 'react'

const Name = () => {

  const[name,setname]=useState('');
  const[nickname,setnickname]=useState('')
  
  const handleName=e=>{
    setname(e.target.value)
  }
  const handlenickname=e=>{
    setnickname(e.target.value)
  }

  return (
    <div className="name">
      <h>Name</h>
      <hr></hr>
      <input name="myName" placeholder="이름을 입력해주세요" 
      type='text'value={name}onChange={handleName}/>
      <input name="nickName" placeholder="닉네임을 입력해주세요"
      type='text'value={nickname}onChange={handlenickname} />
      <p>이름:{name===''? '아직 이름이 없습니다.':name}</p>
      <p>닉네임:{nickname===''? '아직 닉네임이 없습니다.':nickname}</p>
    </div>
  )
}

export default Name
