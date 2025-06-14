import Shloka from '@/msc/models/Shloka';
import { NextResponse } from 'next/server';
import { connectDB } from '@/utils/db';
import toast from 'react-hot-toast';

export async function POST(Request) {
  try {
    await connectDB();
    
    const body = await Request.json();
    const { chapter, verse, shloka, devnagri, synonyms, translation, purport, isImportant } = body;

    if (!chapter || !verse || !shloka || !devnagri || !synonyms || !translation) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const newShloka = await Shloka.create({ chapter, verse, shloka, devnagri, synonyms, translation, purport, isImportant });

    return NextResponse.json({ message: 'Shloka added', shloka: newShloka }, { status: 201 });

  } catch (err) {
    console.error(err);    
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
