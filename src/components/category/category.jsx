import React from 'react'
import {category} from '../../constanats/index'
import {   Stack } from '@mui/material'
import { colors } from '../../constanats/colors'
const Category = ({selectedCategoryHandler, selectedCategory}) => {
  return <Stack direction={'row'} sx={{overflowX:'scroll'}}>
    {category.map(item=>(
      <button key={item.name} className='category-btn' style={{borderRadius:'none', background:item.name===selectedCategory && colors.secondary, color:item.name===selectedCategory && 'white'}} onClick={()=>selectedCategoryHandler(item.name)}>
        <span style={{color:item.name===selectedCategory ? 'white' : colors.secondary, marginRight:'15px'}}>{item.icon}</span>
        <span style={{opacity:'1'}}>{item.name}</span>
      </button>
    ))}
  </Stack>
}

export default Category