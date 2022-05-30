import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react"
import { colors } from "../../utils/constants"

const MovieDetailItem = ({detailName, detailValue}) => {
	return (
		<Box>
			<Divider
				bgColor={colors.text}
				h='0.05rem'
			/>
			<Flex
				gridGap='0.5rem' 
				alignItems='end'
			>
				<Heading as='h5' size='sm' fontWeight='bold' m='0'>
					{detailName}
				</Heading>
				<Text
					m='0'
					fontSize='0.7rem'
				>
					{detailValue}
				</Text>
			</Flex>
		</Box>
	)
}

export default MovieDetailItem