import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Products',
    description: 'Explore our full collection of timeless fashion for Men, Women, and Kids. Find your perfect style at Shapora.',
    openGraph: {
        title: 'Our Products | Shapora',
        description: 'Explore our full collection of timeless fashion for Men, Women, and Kids.',
    },
};

export default function ProductsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
