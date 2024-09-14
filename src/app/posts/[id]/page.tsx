// src/app/posts/[id]/page.tsx

import { PostDetail } from "@/components/PostDetail";

const PostPage = async ({ params: { id } }: { params: { id: string }}) => {
  return (
    <div>
      <PostDetail id={id} />
    </div>
  );
};

export default PostPage;
