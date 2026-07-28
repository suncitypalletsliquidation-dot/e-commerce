import { structuredAlgoliaHtmlData } from '@/algolia/crawlIndex';
import BlogDetails from '@/components/BlogDetails';
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
  const siteURL = process.env.NEXT_PUBLIC_SITE_URL;

  if (post) {
    const resolvedTitle =
      post.seo?.metaTitle ||
      `${post.title || 'Single Post Page'} | Suncity Pallets Liquidation Store`;
    const resolvedDescription =
      post.seo?.metaDescription || `${post.metadata?.slice(0, 136)}...`;
    const resolvedOgImage = post.seo?.ogImage
      ? imageBuilder(post.seo.ogImage).url()
      : imageBuilder(post.mainImage).url();
    const canonicalUrl = `${siteURL}/blogs/${post?.slug?.current}`;

    return {
      title: resolvedTitle,
      description: resolvedDescription,
      author: 'Suncity Pallets Liquidation Store',
      alternates: {
        canonical: canonicalUrl,
        languages: {
          'en-US': '/en-US',
          'de-DE': '/de-DE',
        },
      },

      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: false,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },

      openGraph: {
        title: resolvedTitle,
        description: resolvedDescription,
        url: canonicalUrl,
        siteName: 'Suncity Pallets Liquidation Store',
        images: [
          {
            url: resolvedOgImage,
            width: 1800,
            height: 1600,
            alt: post.title,
          },
        ],
        locale: 'en_US',
        type: 'article',
      },

      twitter: {
        card: 'summary_large_image',
        title: resolvedTitle,
        description: resolvedDescription,
        creator: 'Suncity Pallets Liquidation Store',
        site: 'Suncity Pallets Liquidation Store',
        images: [resolvedOgImage],
        url: canonicalUrl,
      },
    };
  } else {
    return {
      title: 'Not Found',
      description: 'No blog article has been found',
    };
  }
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

  return (
    <main>
      <BlogDetails blogData={post} />
    </main>
  );
};

export default BlogDetailsPage;
