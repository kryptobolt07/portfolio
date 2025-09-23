import Link from "next/link";
import { seo } from "../../data/data";

export const metadata = {
    title: `Blogs | ${seo.title}`,
    description: "Read articles, tutorials, and insights.",
    keywords: "blog, web development, Next.js, programming, tutorials",
};

export default async function Page() {
    const res = await fetch("http://localhost:3000/api/blog", { cache: "no-store" });
    const posts = await res.json();

    return (
        <div className="md:w-[700px] w-[100%] mt-5 p-4">
            <main className="flex flex-col gap-2">
                <h1 className="text-xl font-medium before:content-['>'] before:mr-1">Blogs</h1>
                <div className="flex flex-col gap-4 p-1">
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <div key={post.id} className="flex items-center justify-between gap-5">
                                <Link href={`/blog/${post.id}`}>
                                    <h2 className="cursor-pointer hover:underline">{post.title}</h2>
                                </Link>
                                <p className="text-xs">{post.date}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-center mt-10">No blogs available.</p>
                    )}
                </div>
            </main>
        </div>
    );
}


