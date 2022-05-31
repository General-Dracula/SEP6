import { Box, Flex, Heading, Image } from "@chakra-ui/react"
import { useState } from "react"
import { colors } from "../../utils/constants"
import movieApi from '../../utils/movieApi'
import { useSearch } from "../context/SearchProvider"

const CategoryCard = ({category}) => {

	const { searchByGenre } = movieApi
	const { setMovies } = useSearch()
	const [isHovered, setIsHovered] = useState(false)


	const handleClick = async () => {
		setMovies(((await searchByGenre(String(category.id))).results))
		window.scrollTo(0, 0)
	}

	const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)


	return (
		<Flex 
			pos='relative'
			w='20rem'
			justifyContent='center'
			borderRadius='1rem'
			cursor='pointer'
			onClick={handleClick}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<Box
				w='100%'
				pos='relative'
				h='11rem'
				overflow='hidden'
				borderRadius='1rem'
			>
				<Image
					w='100%'
					pos='absolute'
					// h='7rem'
					src={category.imageUrl}
					filter='brightness(0.7)'
					transitionDuration='0.3s'
					_hover={{
						transform: 'scale(1.1)',
						filter: 'brightness(0.3)'
					}}
				/>
			</Box>
			<Heading
				pos='absolute'
				bottom='0.5rem'
				mx='auto'
				transitionDuration='0.3s'
				{...isHovered &&
					{
						color: colors.hoverText
					}				
				}
			>
				{category.title}
			</Heading>
		</Flex>
	)
}

export default CategoryCard