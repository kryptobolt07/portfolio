import Link from "next/link";

export default async function BlogPost({ params }) {
    const { blogID } = params;
    const res = await fetch(`http://localhost:3000/api/blog/${blogID}`, { cache: "no-store" });

    if (!res.ok) {
        if (res.status === 404) {
            return <div>Blog post not found.</div>;
        }
        return <div>An error occurred.</div>;
    }

    const post = await res.json();

    return (
        <div className="md:w-[700px] w-[100%] mt-5 p-4">
            <main className="flex flex-col gap-2">
                <h1 className="text-xl font-medium before:content-['>'] before:mr-1">{post.title}</h1>
                <p className="text-xs text-gray-500">{post.date}</p>
                <div className="rounded-lg h-64 overflow-hidden">
                    <img
                        alt="content"
                        className="object-cover object-center h-full w-full"
                        src={`https://picsum.photos/id/${Number(post.id) + 20}/1203/503`}
                    />
                </div>
                <p className="mt-4">{post.content}</p>
                <Link href={`/blog`} className="mt-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg w-fit">Back</Link>
            </main>
        </div>
    );
}


