import { useFontSize } from '@/store/useFontSize'

const TextTile = ({ title, subtitle, shlokacount }) => {
    const fontSize = useFontSize((state) => state.fontSize)
    return (
        <>
            <div style={{ fontSize }}>{title} {shlokacount && <div className="badge shadow badge-xs">{shlokacount}</div>}</div>
            <div className="font-semibold opacity-60" style={{ fontSize: fontSize - 7 }}>{subtitle}</div>
        </>
    )
}

export default TextTile
