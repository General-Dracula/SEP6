import { Box, Flex, Image, Text } from "@chakra-ui/react"
import { colors } from "../../utils/constants"


const ActorCard = ({actor}) => {
	return (
		<Flex
			w='10rem'
			h='15rem'
			pos='relative'
			justifyContent='center'
			
		>
			{actor.profile_path ?
				
				<Image
					src={`https://image.tmdb.org/t/p/w185/${actor.profile_path}`}
					alt={actor.name}
					borderRadius='0.5rem'
					overflow='hidden'
				/>
			:
				<Image
				src={`https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png`}
				alt={actor.name}
				objectFit='cover'
				overflow='hidden'
				borderRadius='0.5rem'
			/>
			}
			<Flex
				pos='absolute'
				bottom='0'
				justifyContent='center'
				minW='9.4rem'
				bgColor={colors.card}
				p='0.3rem'
				borderBottomRadius='0.5rem'
				
			>
				<Text
					m='0'
					fontSize='1rem'
				>

				{actor.name}
				</Text>
			</Flex>
			
		</Flex>
	)
}

export default ActorCard