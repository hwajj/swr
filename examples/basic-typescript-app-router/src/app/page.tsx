'use client'
import useSWR from 'swr'
import Link from 'next/link'
import fetcher from '../libs/fetch'
export default function  Page() {
  const { data , error, isLoading } = useSWR<string[]>('api/data', fetcher)

  return <>
    <h1>Trending Projects</h1>
     <div>
       {!isLoading?
         data?.map(project =>
           <p key={project}><Link href='/[user]/[repo]' as={`/${project}`}>{project}</Link></p>
         )
         : <div>loading... </div>
       }
        </div>

  </>
}