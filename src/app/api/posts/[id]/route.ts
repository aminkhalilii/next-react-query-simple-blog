import { NextResponse } from 'next/server'

const posts = [
  {
    id: 1,
    title: 'First Blog Post',
    content: 'This is the content of the first blog post.',
    author: 'John Doe',
    date: '2023-09-01',
  },
  {
    id: 2,
    title: 'Second Blog Post',
    content: 'This is the content of the second blog post.',
    author: 'Jane Smith',
    date: '2023-09-05',
  },
  {
    id: 3,
    title: 'Third Blog Post',
    content: 'This is the content of the third blog post.',
    author: 'Mike Johnson',
    date: '2023-09-10',
  },
];

// API route to get a single post by its id
export const GET = async (req: Request, { params }: { params: { id: string } }) => {
  const { id } = params
  const post = posts.find(p => p.id === Number(id))

  if (!post) {
    return NextResponse.json({ message: 'Post not found' }, { status: 404 })
  }

  return NextResponse.json(post)
}
