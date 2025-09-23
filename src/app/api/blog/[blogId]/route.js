import blogs from "../../data";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const blogId = params.blogId;
    const blog = blogs.find((b) => b.id === blogId);
    if (!blog) {
        return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json(blog);
}

export async function PUT(request, { params }) {
    const blogId = params.blogId;
    const blogIndex = blogs.findIndex((b) => b.id === blogId);
    if (blogIndex === -1) {
        return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }
    const { title, content, date } = await request.json();
    const updatedBlog = { ...blogs[blogIndex], title, content, date: date ?? blogs[blogIndex].date };
    blogs[blogIndex] = updatedBlog;
    return NextResponse.json(updatedBlog);
}

export async function DELETE(request, { params }) {
    const blogId = params.blogId;
    const blogIndex = blogs.findIndex((b) => b.id === blogId);
    if (blogIndex === -1) {
        return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }
    blogs.splice(blogIndex, 1);
    return new NextResponse(null, { status: 204 });
}


