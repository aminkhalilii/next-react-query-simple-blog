// src/app/page.tsx

'use client'; // Ensure this is a client component

import { PostList } from '@/components/PostList';




export default function Page() {
  return (
    <div>
       <h1 className="text-2xl font-bold mb-4">Posts</h1>
       <PostList />
    </div>
  );
}
