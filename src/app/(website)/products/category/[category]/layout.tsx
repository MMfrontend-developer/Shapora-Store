import { Metadata } from 'next';

type Props = {
    params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const category = (await params).category;
    const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);

    return {
        title: `${capitalizedCategory} Collection`,
        description: `Shop our latest ${category} fashion arrivals. Discover premium ${category} clothing at Shapora.`,
        openGraph: {
            title: `${capitalizedCategory} Collection | Shapora`,
            description: `Shop our latest ${category} fashion arrivals.`,
        },
    };
}

export default function CategoryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
