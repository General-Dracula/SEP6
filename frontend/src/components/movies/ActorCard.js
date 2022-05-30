import { Box, Flex, Image, Text } from "@chakra-ui/react"
import { colors } from "../../utils/constants"


const ActorCard = ({actor}) => {
	return (
		<Flex
			w='5rem'
			h='7.5rem'
			pos='relative'
			justifyContent='center'
		>
			{actor.profile_path ?
				
				<Image
					src={`https://image.tmdb.org/t/p/w185/${actor.profile_path}`}
					alt={actor.name}
				/>
			:
				<Image
				src={`https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png`}
				alt={actor.name}
				objectFit='cover'
				overflow='hidden'
			/>
			}
			<Box
				pos='absolute'
				bottom='0'
				m='0'
				bgColor={colors.card}
			>
				<Text
					m='0'
					
				>

				{actor.name}
				</Text>
			</Box>
			
		</Flex>
	)
}

export default ActorCard