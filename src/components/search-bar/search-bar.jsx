import React, { useState } from 'react'
import { IconButton, Paper } from '@mui/material'
import { colors } from '../../constanats/colors'
import { Search } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
const SearchBar = () => {
  const [value, setValue]=useState('')
  const navigate=useNavigate()

  const submitHandler=(e)=>{
    e.preventDefault()
    console.log(value)
    if(value){
      navigate(`/search/${value}`)
      setValue('')
    }
  }

  return <Paper 
     component={'form'}
     onSubmit={submitHandler} 
     sx={{border:'1px solid', colors:colors.secondary, pl:2, boxShadow:'none', mr:5}}>
    <input 
    type="text" 
    placeholder='Search...' 
    className='search-bar'
    value={value}
    onChange={e=>setValue(e.target.value)}
    />
    <IconButton type='submit'>
        <Search/> 
    </IconButton>
  </Paper>
}

export default SearchBar