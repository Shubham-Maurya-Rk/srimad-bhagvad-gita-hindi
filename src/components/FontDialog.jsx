'use client'
import { useFontSize } from "@/store/useFontSize"
import { useEffect } from "react"

const FontDialog = () => {
  const initFontSize = useFontSize((state) => state.initFontSize)
  useEffect(() => {
    initFontSize();
  },[])
  const fontSize = useFontSize((state) => state.fontSize)
  const setFontSize = useFontSize((state) => state.setFontSize)
  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold" style={{ fontSize }}>Font Size!</h3>
        <div className="join mt-5 flex justify-between">
          <button onClick={() => setFontSize(fontSize - 1)} className="join-item btn w-1/3 py-10 text-3xl">-</button>
          <div className="join-item btn w-1/3 py-10 text-xl">{fontSize}</div>
          <button onClick={() => setFontSize(fontSize + 1)} className="join-item btn w-1/3 py-10 text-3xl">+ </button>
        </div>
        <div className="mt-2">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn w-full">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  )
}

export default FontDialog