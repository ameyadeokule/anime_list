import { Dispatch } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import styled from 'styled-components'
import { useAppDispatch } from '../../hooks'
import animeService from '../../services/animeService'
import { GetAnimePage } from '../../services/animeService/__generated__/GetAnimePage'
import { setAnimePage } from './homePageSlice'

interface IHomePageProps{
	
}

const Container = styled.div`
	width:100%;
	height:100%;
	display:flex;
	flex-direction:column;
	align-items:center;
`

const actionDispatch = (dispatch: Dispatch)=>({
	setAnimePage:(page: GetAnimePage['Page'])=> dispatch(setAnimePage(page))
})

const HomePage = (props: IHomePageProps) => {
	
	const {setAnimePage} = actionDispatch(useAppDispatch())
	
	const fetchAnimePage = async() =>{
		const animePage = await animeService.getAnimePage(0).catch((err)=>{
			console.error("Error",err)
		})
		console.log(animePage)
		
		if(animePage) setAnimePage(animePage)
	}
	
	useEffect(() => {
		fetchAnimePage()
		console.log('useEffect here')
	}, [])
	
	return (
		<Container>
			<h1>Hot Anime List</h1>
		</Container>
	)
}

export default HomePage
