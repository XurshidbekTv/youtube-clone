import { Box, Stack } from "@mui/material"
import { logo } from "../../constanats"
import { colors } from "../../constanats/colors"
import { Link } from "react-router-dom"
import { SearchBar } from "../indx"
const Navbar = () => {
  return <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} padding={2} sx={{position:'sticky',top:0, zIndex:999, background:colors.primary}}>
    <Link to={'/'}>
    <img src={logo} alt="logo" height={60} width={70}/>
    </Link>
    <SearchBar/>
    <Box/>
  </Stack>
}

export default Navbar