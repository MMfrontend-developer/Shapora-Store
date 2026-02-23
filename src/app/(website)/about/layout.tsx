import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about Shapora, our mission to bring timeless fashion to everyone, and the team behind the brand.',
    openGraph: {
        title: 'About Us | Shapora',
        description: 'Learn about Shapora and our mission.',
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
