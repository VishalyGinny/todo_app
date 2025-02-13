import { requireSession } from '@clerk/nextjs/server';
import { connectMongoDB } from '$lib/mongo';
import Task from '$lib/models/Task';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    await requireSession(); // This ensures the session is valid

    const { title } = await request.json();
    console.log("Request body:", { title });

    // Log the result of connectMongoDB call
    const mongoResult = await connectMongoDB();
    console.log("MongoDB Connection Result:", mongoResult);

    // Connect to MongoDB (database)
    await connectMongoDB('mongodb://localhost:27017/test');
    
    // Check if connection is successful
    const client = await connectMongoDB();
    console.log("Connected to MongoDB");

    await Task.create({ title });
    return NextResponse.json({ message: 'Task created successfully' }, { status: 201 });
  } catch (error) {
    console.error("Error creating task:", error);
    return NextResponse.json({ error: 'Failed to create task' }, { status: 500 });
  }
}
