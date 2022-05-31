import { Flex, Heading } from "@chakra-ui/react"
import { categories } from "../../utils/constants"
import CategoryCard from "./CategoryCard"
import movieApi from '../../utils/movieApi'
import { useEffect, useState } from "react"

const CategoryContainer = () => {

  return (
		<Flex flexDir='column' alignItems='center' maxW='100%' gridGap='2rem'>
			<Heading as='h1'>
				Categories
			</Heading>
			<Flex flexWrap='wrap' gridGap='2.5rem'>
				{categories.map(category => (
					<CategoryCard category={category} />
				))}
			</Flex>
		</Flex>
	)
}

export default CategoryContainer