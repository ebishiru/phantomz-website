import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://phantomz-website.vercel.app/",
            lastModified: new Date(),
        },
        {
            url: "https://phantomz-website.vercel.app/about",
            lastModified: new Date(),
        },
        {
            url: "https://phantomz-website.vercel.app/contact",
            lastModified: new Date(),
        },
        {
            url: "https://phantomz-website.vercel.app/privacypolicy",
            lastModified: new Date(),
        },
    ]
}