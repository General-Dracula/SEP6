import { Flex } from "@chakra-ui/react"
import { colors } from "../../utils/constants"


const Layout = ({children}) => {
	
	return (
		<Flex
			flexDir='column'
			alignItems='center'
			bgColor={colors.bg}
			px='10%'
			pt='1rem'
			pb='3rem'
			gridGap='2rem'
			fontFamily='sans-serif'
			color={colors.text}
		>
			{children}
		</Flex>
	)
}

export default Layout