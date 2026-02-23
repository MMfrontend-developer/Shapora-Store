import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Frequently Asked Questions',
    description: 'Find answers to common questions about shipping, returns, payment, and our products at Shapora.',
    openGraph: {
        title: 'FAQs | Shapora',
        description: 'Find answers to common questions at Shapora.',
    },
};

export default function FaqsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
