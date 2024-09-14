// app/api/posts/route.ts

import { NextResponse } from 'next/server';

// Mock blog post data
const blogPosts = [
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

// API route handler
export async function GET() {
  return NextResponse.json(blogPosts);
}
