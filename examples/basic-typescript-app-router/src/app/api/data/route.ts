import { NextRequest, NextResponse } from 'next/server'

const projects = [
  'facebook/flipper',
  'vuejs/vuepress',
  'rust-lang/rust',
  'vercel/next.js'
]

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id')
  if (id) {
    const data_ = await fetch(`https://api.github.com/repos/${id}`)
      .then(resp => resp.json())
    return NextResponse.json(data_)
  }
  return NextResponse.json(projects)
}
