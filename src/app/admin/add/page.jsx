'use client'
import { set } from 'mongoose';
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';

const Add = () => {
    const [hindiShloka, setHindiShloka] = useState('')
    const [devanagari, setDevanagari] = useState('')
    const [synonyms, setSynonyms] = useState('')
    const [translation, setTranslation] = useState('')
    const [purport, setPurport] = useState('')
    const [loading, setLoading] = useState(false)
    const [chapter, setchapter] = useState(0)
    const [verse, setverse] = useState(0)
    const [isImportant, setisImportant] = useState(false)
    const helpSynonyms = () => {
        const input = synonyms
            .split(';')
            .map(str => str.trim())
            .filter(Boolean)
            .map(str => `<span className="font-semibold italic">${str};`)
            .join('\n');
        setSynonyms(input);
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!chapter || !verse || !hindiShloka || !devanagari || !synonyms || !translation) {
            toast.error('All fields are required');
            return;
        }

        try {
            setLoading(true);
            const res = await fetch('/api/add-shloka', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chapter,
                    verse,
                    shloka: hindiShloka,
                    devnagri: devanagari,
                    synonyms,
                    translation,
                    purport,
                    isImportant
                }),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.error || 'Failed to add shloka');

            toast.success('Shloka added successfully!');
            // Optionally reset fields
            if (!isNaN(verse)) setverse(v => parseInt(v) + 1);
            setHindiShloka('');
            setDevanagari('');
            setSynonyms('');
            setTranslation('');
            setPurport('');
            setisImportant(false);
        } catch (err) {
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='md:w-full'>
            <fieldset className="fieldset mt-10 bg-base-200 border-base-300 w-full rounded-box border p-4">
                <legend className="fieldset-legend text-3xl">ADD SHLOKA</legend>

                <div className='flex gap-3'>
                    <fieldset className="fieldset w-1/2">
                        <legend className="fieldset-legend text-md">Chapter</legend>
                        <input min={1} type="number" value={chapter} required onChange={(e) => setchapter(e.target.value)} className="input w-full text-lg text-black" placeholder="1" />
                    </fieldset>
                    <fieldset className="fieldset w-1/2">
                        <legend className="fieldset-legend text-md">Verse</legend>
                        <input min={1} type="text" value={verse} required onChange={(e) => setverse(e.target.value)} className="input w-full text-lg text-black" placeholder="1" />
                    </fieldset>
                </div>

                <label className="label text-lg">Hindi Shloka <button type="button" onClick={() => navigator.clipboard.writeText("<br/>")} className="btn btn-outline btn-xs">{"<br/> "}<i className="ri-clipboard-line"></i></button></label>
                <textarea
                    required
                    onChange={(e) => setHindiShloka(e.target.value)}
                    value={hindiShloka}
                    rows={4}
                    className="textarea w-full text-lg text-black"
                    placeholder={`धृतराष्ट्र उवाच <br />\nधर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः | <br />\nमामकाः पाण्डवाश्र्चैव किमकुर्वत सञ्जय || १ ||`}
                />

                <label className="label text-lg mt-5">Devanagari <button type="button" onClick={() => navigator.clipboard.writeText("<br/>")} className="btn btn-outline btn-xs">{"<br/> "}<i className="ri-clipboard-line"></i></button></label>
                <textarea
                    required
                    value={devanagari}
                    onChange={(e) => setDevanagari(e.target.value)}
                    rows={6}
                    className="textarea w-full text-lg text-black"
                    placeholder={`dhṛtarāṣṭra uvāca <br />\ndharma-kṣetre kuru-kṣetre <br />\nsamavetā yuyutsavaḥ <br />\nmāmakāḥ pāṇḍavāś caiva <br/>\nkim akurvata sañjaya`}></textarea>

                <label className="label text-lg mt-5">Synonyms
                    <button type="button" onClick={() => navigator.clipboard.writeText('<span className="font-semibold italic">')} className="btn btn-outline btn-xs">{"<span classNa... "}<i className="ri-clipboard-line"></i></button>
                    <button type="button" onClick={() => navigator.clipboard.writeText("</span>")} className="btn btn-outline btn-xs">{"</span>"}<i className="ri-clipboard-line"></i></button>
                    <button type="button" onClick={helpSynonyms} className="btn btn-outline btn-xs">Help</button>
                </label>
                <textarea
                    required
                    value={synonyms}
                    onChange={(e) => setSynonyms(e.target.value)}
                    rows={10}
                    className="textarea w-full text-black text-lg"
                    placeholder={`<span className="font-semibold italic"> धृतराष्ट्र: उवाच</span> - राजा धृतराष्ट्र ने कहा; \n<span className="font-semibold italic">धर्म-क्षेत्रे </span> - धर्मभूमि (तीर्थस्थल) में;\n<span className="font-semibold italic">कुरु-क्षेत्रे </span> -कुरुक्षेत्र नामक स्थान में;\n<span className="font-semibold italic">समवेता: </span> - एकत्र ;\n<span className="font-semibold italic">युयुत्सवः </span> - युद्ध करने की इच्छा से; \n<span className="font-semibold italic">मामकाः </span> -मेरे पक्ष (पुत्रों); \n<span className="font-semibold italic">पाण्डवा: </span> - पाण्डु के पुत्रों ने; \n<span className="font-semibold italic">च  </span>- तथा; \n<span className="font-semibold italic">एव </span> - निश्चय ही; \n<span className="font-semibold italic">किम </span> - क्या; \n<span className="font-semibold italic">अकुर्वत </span> -किया; \n<span className="font-semibold italic">सञ्जय </span> - हे संजय ।`}></textarea>

                <label className="label text-lg mt-5">Translation</label>
                <textarea
                    required
                    value={translation}
                    onChange={(e) => setTranslation(e.target.value)}
                    className="textarea text-lg text-black w-full"
                    placeholder="धृतराष्ट्र ने कहा -- हे संजय! धर्मभूमि कुरुक्षेत्र में युद्ध की इच्छा से एकत्र हुए मेरे तथा पाण्डु के पुत्रों ने क्या किया ?"></textarea>

                <label className="label text-lg mt-5">Purport
                    <button type="button" onClick={() => navigator.clipboard.writeText('<p className="text-center font-semibold italic mb-4"></p>')} className="btn btn-outline btn-xs">{"<p classNa... "}<i className="ri-clipboard-line"></i></button>
                    <button type="button" onClick={() => navigator.clipboard.writeText("<br/>")} className="btn btn-outline btn-xs">{"<br/>"}<i className="ri-clipboard-line"></i></button>
                    <button type="button" onClick={() => navigator.clipboard.writeText("<br/><br/>")} className="btn btn-outline btn-xs">{"<br/><br/>"}<i className="ri-clipboard-line"></i></button>
                </label>
                <textarea
                    value={purport}
                    onChange={(e) => setPurport(e.target.value)}
                    className="textarea w-full h-150 text-black text-lg"
                    placeholder={`महाभारत में वर्णित धृतराष्ट्र तथा संजय की वार्ताएँ इस महान दर्शन के मूल सिद्धान्त का कार्य करती हैं । माना जाता है कि इस दर्शन की प्रस्तुति कुरुक्षेत्र के युद्धस्थल में हुई जो वैदिक युग से पवित्र तीर्थस्थल रहा है । इसका प्रवचन भगवान् द्वारा मानव जाति के पथ-प्रदर्शन हेतु तब किया गया जब वे इस लोक में स्वयं उपस्थित थे । <br /><br />\n\n
<p className='text-center font-semibold italic mb-4'>
    ॐ अज्ञान तिमिरान्धस्य ज्ञानाञ्जनशलाकया ।  <br/>
    चक्षुरुन्मीलितं येन तस्मै श्रीगुरुवे नम : ।। <br/>
    श्री चैतन्यमनोऽभीष्टं स्थापितं येन भूतले । <br/>
    स्वयं रूप: कदा मह्यंददाति स्वपदान्न्तिकम् ।।
</p>`}></textarea>

                <label className="label text-lg">
                    <input type="checkbox" defaultChecked={isImportant} onChange={(e) => setisImportant(e.target.checked)} className="checkbox checkbox-xl" />
                    This is important shloka
                </label>

                <button className="btn btn-success text-xl mt-4 py-8">{loading ? 'Adding...' : 'ADD'}</button>
            </fieldset>
        </form>
    )
}

export default Add

