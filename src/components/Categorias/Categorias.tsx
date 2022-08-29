
import React, { useEffect, useState } from 'react';
import catalogo from '../../services/catalogo'
import * as S from './Categorias.styled' 

export default function Categorias():JSX.Element {
const [movieList, setMovieList] = useState<any>([])

useEffect (()=>{
const loadAll = async () => {
  // lista total
  let list = await catalogo.getHomeList()
  setMovieList(list)

}
loadAll()

},[])

return (
<S.Container>
  {movieList.map((item: any)=>(
      <div>
        {item.titulo}
      </div>
  ))}
</S.Container>
  )
}


