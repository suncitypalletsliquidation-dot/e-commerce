import { structuredAlgoliaHtmlData } from '@/algolia/crawlIndex';
import BlogDetails from '@/components/BlogDetails';
import JsonLd from '@/components/Common/JsonLd';
import { buildArticleJsonLd } from '@/lib/structuredData';
import { buildPageMetadata } from '@/lib/seo';
import { getPost, getPosts } from '@/sanity/sanity-blog-utils';
import { imageBuilder } from '@/sanity/sanity-shop-utils';
import { notFound } from 'next/navigation';

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: 'Not Found',
      description: 'No blog article has been found',
    };
  }

  const resolvedTitle =
    post.seo?.metaTitle ||
    `${post.title || 'Single Post Page'} | Suncity Pallets Liquidation Store`;
  const resolvedDescription =
    post.seo?.metaDescription || `${post.metadata?.slice(0, 136)}...`;
  const resolvedOgImage = post.seo?.ogImage
    ? imageBuilder(post.seo.ogImage).url()
    : imageBuilder(post.mainImage).url();

  return buildPageMetadata({
    title: resolvedTitle,
    description: resolvedDescription,
    path: `/blogs/${post?.slug?.current}`,
    image: resolvedOgImage,
    type: 'article',
  });
}

const BlogDetailsPage = async ({ params }: Params) => {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  await structuredAlgoliaHtmlData({
    type: 'blogs',
    title: post?.title || '',
    htmlString: post?.metadata || '',
    pageUrl: `${process.env.SITE_URL}/blogs/${post?.slug?.current}`,
    imageURL: imageBuilder(post?.mainImage).url() as string,
  });

  const siteURL = process.env.NEXT_PUBLIC_SITE_URL || '';
  const articleJsonLd = buildArticleJsonLd({ post, siteUrl: siteURL });

  return (
    <main>
      <JsonLd data={articleJsonLd} />
      <BlogDetails blogData={post} />
    </main>
  );
};

export default BlogDetailsPage;
