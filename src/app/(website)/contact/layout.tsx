import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Get in touch with the Shapora team. We are here to help with your fashion needs and questions.',
    openGraph: {
        title: 'Contact Us | Shapora',
        description: 'Get in touch with the Shapora team.',
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
