import Verse from './Verse'

export default async function VersePage({ params }) {
  const {chapter ,verse}=await params
  return <Verse chapter={chapter} verse={verse} />
}
