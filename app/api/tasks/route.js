import { connectMongoDB } from '$lib/mongo';
import Task from '$lib/models/Task';
import { NextResponse } from 'next/server';
import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

export async function POST(request) {
    const { title } = await request.json();
    // Log the result of connectMongoDB call
    console.log("MongoDB Connection Result:", await connectMongoDB());
    // Connect to MongoDB (database)
    await connectMongoDB();
    await Task.create({ title });
    return NextResponse.json({ message: 'Task created successfully' }, { status: 201 });
}