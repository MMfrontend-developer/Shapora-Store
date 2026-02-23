import { MetadataRoute } from 'next'
import { products } from './(website)/products/data'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://shapora-ecommerce.vercel.app'

    // Static routes
    const routes = ['', '/products', '/about', '/contact', '/faqs'].map(
        (route) => ({
            url: `${baseUrl}${route}`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: route === '' ? 1 : 0.8,
        })
    )

    // Dynamic product routes
    const productRoutes = products.map((product) => ({
        url: `${baseUrl}/products/${product.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }))

    // Dynamic category routes
    const categories = ['men', 'women', 'kids', 'footwear', 'accessories'];
    const categoryRoutes = categories.map((category) => ({
        url: `${baseUrl}/products/category/${category}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }))

    return [...routes, ...productRoutes, ...categoryRoutes]
}
