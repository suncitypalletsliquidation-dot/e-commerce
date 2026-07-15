import BlogDetailsWithSidebar from '@/components/BlogDetailsWithSidebar';
import { getPost } from '@/sanity/sanity-blog-utils';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Blog Details | Suncity Pallets Liquidation Store',
  description: 'Read detailed blog articles and guides on Suncity Pallets Liquidation Store.',
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
