import { Box, Text } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import { colors } from "../../utils/constants"


const NavItem = ({to, title, ...props}) => {
	return (

		<NavLink to={to} style={{
			textDecoration: 'none', 
			color: colors.text}}
		>
			<Box
				{...props}
			>
				<Text
					m='0'
					fontSize='large'
				>
					{title}
				</Text>
			</Box>
		</NavLink>
	)
}

export default NavItem