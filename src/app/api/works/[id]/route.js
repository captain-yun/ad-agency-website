import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request, { params }) {
  try {
    const work = await prisma.work.findUnique({
      where: {
        id: params.id
      }
    });
    
    if (!work) {
      return NextResponse.json(
        { error: 'Work not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(work);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch work' },
      { status: 500 }
    );
  }
} 