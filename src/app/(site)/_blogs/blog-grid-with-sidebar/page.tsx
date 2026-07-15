import BlogGridWithSidebar from '@/components/BlogGridWithSidebar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog Grid | Suncity Pallets Liquidation Store',
  description: 'Read the latest guides and updates from Suncity Pallets Liquidation Store.',
};

const BlogGridWithSidebarPage = () => {
  return (
    <>
      <BlogGridWithSidebar />
    </>
  );
};

export default BlogGridWithSidebarPage;
