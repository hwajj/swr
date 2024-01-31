'use client'
import Link from 'next/link'

import useSWR from 'swr'
import fetcher from '../../../libs/fetch'

export default function Repo({ params }: { params: { user: string, repo: string } }) {
  const id_ = params.user + '/' + params.repo

  const { data, isLoading, error } = useSWR<{
    forks_count: number
    stargazers_count: number
    watchers: number
  }>('/api/data?id=' + id_, fetcher)
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{id_}</h1>
      {!isLoading && data ? (
        <div>
          <p>forks: {data.forks_count}</p>
          <p>stars: {data.stargazers_count}</p>
          <p>watchers: {data.watchers}</p>
        </div>
      ) : (
        'loading...'
      )}
      <br />
      <br />
      <Link href='/'>Back</Link>
    </div>
  )
}
