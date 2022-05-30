import { Box, Flex } from "@chakra-ui/react"
import { colors } from "../../utils/constants"


const Layout = ({children}) => {
	
	return (
		<Flex
			flexDir='column'
			alignItems='center'
			bgColor={colors.bg}
			
		>
			{children}
		</Flex>
	)
}

export default Layout