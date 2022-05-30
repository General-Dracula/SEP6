import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react"
import { colors } from "../../utils/constants"

const MovieDetailItem = ({detailName, detailValue}) => {
	return (
		<Flex
			flexDir='column'
			gridGap='0.5rem'
			mb='0.5rem'
		>
			<Divider
				bgColor={colors.text}
				h='0.05rem'
				m='0'
			/>
			<Flex
				px='0.5rem'
				gridGap='0.5rem' 
				alignItems='end'
			>
				<Heading as='h4'  fontWeight='bold' m='0'>
					{detailName}:
				</Heading>
				<Text
					m='0'
					fontSize='1rem'
				>
					{detailValue}
				</Text>
			</Flex>
		</Flex>
	)
}

export default MovieDetailItem