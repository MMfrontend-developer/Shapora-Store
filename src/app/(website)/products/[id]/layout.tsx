import { Metadata } from 'next';
import { products } from '../data';

type Props = {
    params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const id = (await params).id;
    const product = products.find((p) => p.id === id);

    if (!product) {
        return {
            title: 'Product Not Found',
        };
    }

    return {
        title: product.name,
        description: product.description,
        openGraph: {
            title: `${product.name} | Shapora`,
            description: product.description,
            images: [
                {
                    url: product.images[0],
                    width: 800,
                    height: 800,
                    alt: product.name,
                },
            ],
        },
    };
}

export default function ProductLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
