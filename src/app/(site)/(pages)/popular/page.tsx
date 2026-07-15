import Breadcrumb from '@/components/Common/Breadcrumb';
import ShopWithoutSidebar from '@/components/ShopWithoutSidebar';
import { getProductsByFilter } from '@/sanity/sanity-shop-utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Popular Products | Suncity Pallets Liquidation Store',
  description: 'View our most popular and high-demand liquidation pallets at Suncity Pallets Liquidation Store.',
};

type PageProps = {
  searchParams: Promise<{
    sort: string;
  }>;
};

const ShopWithoutSidebarPage = async ({ searchParams }: PageProps) => {
  const { sort } = await searchParams;

  let sortQuery = '| order(length(reviews) desc)';

  if (sort === 'latest') {
    sortQuery = '| order(publishedAt desc)';
  }

  const query = `*[_type == "product"] ${sortQuery}`;
  const data = await getProductsByFilter(query, ['product']);

  return (
    <main>
      <Breadcrumb
        title={'Our Best Products'}
        pages={['shop', '/', 'popular']}
      />
      <ShopWithoutSidebar key={sort} shopData={data} />
    </main>
  );
};

export default ShopWithoutSidebarPage;
