import React from 'react'
import Row from './Row'
import { requests } from './requests'
import Banner from './Banner'
import Nav from './Nav'
function Container() {
  
  return (
    <div>
      <Nav/>
      <Banner/>
      <Row title="NETFLIX ORIGINALS" isLargeRow requests = {requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" requests = {requests.fetchTrending}/>
      <Row title="Top Rating" requests = {requests.fetchTopRated}/>
    </div>
  )
}

export default Container