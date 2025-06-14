import Chapter from "./Chapter";

// app/[chapter]/[verse]/page.jsx
export default async function ChapterPage({ params }) {
  const { chapter } = await params;

  return (
    <Chapter chapter={chapter} />
  );
}
