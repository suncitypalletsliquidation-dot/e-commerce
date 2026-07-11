import BlogDetailsWithSidebar from '@/components/BlogDetailsWithSidebar';
import { getPost } from '@/sanity/sanity-blog-utils';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Blog Details Page | NextMerce | Next.js E-commerce Boilerplate',
  description: 'This is Blog Details Page for NextMerce Template',
  // other metadata
};

const BlogDetailsWithSidebarPage = async () => {
  const slug = 'cooking-masterclass-creating-delicious-italian-pasta';

  const blogData = await getPost(slug);

  if (!blogData) {
    notFound();
  }

  return (
    <main>
      <BlogDetailsWithSidebar blogData={blogData} />
    </main>
  );
};

export default BlogDetailsWithSidebarPage;
