/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { Fragment, useEffect, useState } from 'react';
import catalogo from '../../services/catalogo'
import * as S from './Categorias.styled' 

export default function Categorias():JSX.Element {
const [movieList, setMovieList] = useState<any>([])

useEffect (()=>{
const loadAll = async () => {
  // lista total
  const list = await catalogo.getHomeList()
  setMovieList(list)

}
loadAll()

},[])

const teste = "https://image.tmdb.org/t/p/w300/ooBR3qulC40ws0QkYBUAYFKmLRE.jpg"

console.log(teste, 'movieList.item.results.poster_path');
console.log(movieList, 'movieListAAA')




return (
  <S.Container>
    {movieList?.map((list: any, key:any)=>(
    <S.ListArea key={key}>
      <S.Title>{list.title}</S.Title> 
        {list?.item?.results?.length > 0 && list?.item?.results.map((index: any, key:any) => (
          <S.ImageMovie key={key}> 
             <img src={`https://image.tmdb.org/t/p/w300${index?.poster_path}`} /> 
          </S.ImageMovie>
        ))}
    </S.ListArea>
      ))}
</S.Container>
  )
}


