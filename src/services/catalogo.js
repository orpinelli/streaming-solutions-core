/* eslint-disable import/no-anonymous-default-export */
import { API_BASE, BR } from '../kernel/kernel'

const basicFech = async endpoint => {
  const req = await fetch(`${API_BASE}${endpoint}`)
  const json = await req.json()
  return json
}

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originais',
        titulo: 'Originais da NetFlix',
        item: await basicFech(`/discover/tv?with_netwoork=213&${BR}`)
      },
      {
        slug: 'Trending',
        titulo: 'Recomendados para você',
        item: await basicFech(`/trending/all/week?${BR}`)
      },
      {
        slug: 'troprated',
        titulo: 'Em Alta',
        item: await basicFech(`/movie/top_rated?${BR}`)
      },
      {
        slug: 'action',
        titulo: 'Ação',
        item: await basicFech(`/discover/movie?with_genres=28&${BR}`)
      },
      {
        slug: 'comedy',
        titulo: 'Comedia',
        item: await basicFech(`/discover/movie?with_genres=35&${BR}`)
      },
      {
        slug: 'horror',
        titulo: 'Terror',
        item: await basicFech(`/discover/movie?with_genres=27&${BR}`)
      },
      {
        slug: 'romance',
        titulo: 'Romance',
        item: await basicFech(`/discover/movie?with_genres=10749&${BR}`)
      },
      {
        slug: 'documentary',
        titulo: 'Documentario',
        item: await basicFech(`/discover/movie?with_genres=99&${BR}`)
      }
    ]
  }
}
