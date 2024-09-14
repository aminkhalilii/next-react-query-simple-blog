// src/components/PostList.tsx

'use client'; // Ensure this is a client component

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  body: string;
}

const fetchPost= async (id:string): Promise<Post[]> => {
  const response = await fetch(`/api/posts/${id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export function PostDetail({id}:{id: string}) {
  const { data:post, error, isLoading } = useQuery({
    queryKey: ['post',id],
    queryFn: ()=>fetchPost(id),
    enabled: !!id,
  });

  if (isLoading) return <div className="p-4 text-center text-gray-500">Loading...</div>;
  if (error) return <div className="p-4 text-center text-red-500">An error occurred: {error.message}</div>;

  return (
    <ul className="list-disc pl-5">
        <li key={post.id} className="mb-2 p-4 border rounded shadow">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="text-gray-700">{post.body}</p>
          <Link className='text-blue-500 my-4' href={`/posts/${post.id}`}> more </Link>
        </li>
    </ul>
  );
}
