import { NextResponse } from "next/server";
import blogs from "../data";

export async function GET() {
    return NextResponse.json(blogs);
}

export async function POST(request) {
    const { title, content, date } = await request.json();
    const newBlog = {
        id: String(blogs.length + 1),
        title,
        content,
        date: date || new Date().toISOString().slice(0, 10),
    };
    blogs.push(newBlog);
    return NextResponse.json(newBlog, { status: 201 });
}


