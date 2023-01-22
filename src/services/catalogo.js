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
        title: 'Originais da NetFlix',
        item: await basicFech(`/discover/tv?with_network=213&${BR}`)
      },
      {
        slug: 'Trending',
        title: 'Recomendados para você',
        item: await basicFech(`/trending/all/week?${BR}`)
      },
      {
        slug: 'troprated',
        title: 'Em Alta',
        item: await basicFech(`/movie/top_rated?${BR}`)
      },
      {
        slug: 'action',
        title: 'Ação',
        item: await basicFech(`/discover/movie?with_genres=28&${BR}`)
      },
      {
        slug: 'comedy',
        title: 'Comedia',
        item: await basicFech(`/discover/movie?with_genres=35&${BR}`)
      },
      {
        slug: 'horror',
        title: 'Terror',
        item: await basicFech(`/discover/movie?with_genres=27&${BR}`)
      },
      {
        slug: 'romance',
        title: 'Romance',
        item: await basicFech(`/discover/movie?with_genres=10749&${BR}`)
      },
      {
        slug: 'documentary',
        title: 'Documentario',
        item: await basicFech(`/discover/movie?with_genres=99&${BR}`)
      }
    ]
  }
}
