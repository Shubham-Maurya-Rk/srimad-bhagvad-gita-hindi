'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import parse from "html-react-parser"
import { useFontSize } from "@/store/useFontSize";
import Loading from "@/utils/Loading";

// app/[chapter]/[verse]/page.jsx


const Content = ({ show, chapter, loading, data, fontSize, showImp }) => {
    if (loading) return <Loading />
    else if (!data.length) return <div className="flex flex-col items-center gap-8 py-10 px-3 text-lg">Shloka will be added soon</div>
    return (<>{
        data.map((d) => {
            if(showImp && !d.isImportant) return <span key={d._id}></span>
            return (
                <Link href={`/${chapter}/${d.verse}`} key={d._id} className="list-row flex flex-col gap-2">
                    <div className="flex justify-between">
                        <div style={{ fontSize: fontSize - 4 }}>
                            <div>{chapter}.{d.verse}</div>
                            <div className="uppercase font-semibold opacity-60">{show === "translation" ? "भावार्थ" : "श्लोक"}</div>
                        </div>
                        <div className="btn btn-circle btn-ghost">
                            <i className={`ri-star-${d.isImportant ? 'fill' : 'line'} text-lg text-warning`}></i>
                        </div>
                    </div>
                    <p className="w-full" style={{ fontSize }}>
                        {parse(d[show])}
                    </p>
                </Link>
            )
        })
    }
    </>)
}




export default function Chapter({ chapter }) {
    const [data, setdata] = useState([])
    const [show, setshow] = useState("translation")
    const [loading, setloading] = useState(false)
    const [showImp, setshowImp] = useState(false)
    const fontSize = useFontSize((state) => state.fontSize)
    const collapseData = [
        {
            title: "कुरुक्षेत्र के युद्धस्थल में सैन्यनिरीक्षण",
            summary: "शक्तिशाली योद्धा अर्जुन युद्धभिमुख विपक्षी सेनाओं में अपने निकट संबंधियों ,शिक्षकों  तथा मित्रों को युद्ध में अपना-अपना जीवन उत्सर्ग करने के लिए उध्यत देखता है । वह शोक तथा करुणा से अभीभूत होकर अपनी शक्ति खो देता है, उसका मन मोहग्रस्त हो जाता है और वाह युद्ध करने के लिए अपने संकल्प को त्याग देता है।",
            images: ['1_1', '1_3', '1_4', '1_14', '1_26', '1_33', '0_1']
        },
        {
            title: "गीता का सार",
            summary: " अर्जुन शिष्य-रूप में कृष्ण की शरण ग्रहण करता है और कृष्ण उससे नश्वर भौतिक शरीर तथा नित्य आत्मा के मूलभूत अंतर की व्याख्या करते हुए अपना उपदेश प्रारम्भ करते हैं । भगवान उसे देहांतरण की प्रक्रिया, परमेश्वर की निष्काम सेवा तथा स्वरूपसिद्ध व्यक्ति के गुणों से अवगत करते हैं ।",
            images: ['2_11', '2_13', '2_14', '2_22', '2_62', '0_2']
        },
        {
            title: "कर्मयोग",
            summary: "इस भौतिक जगत में हर व्यक्ति को किसी ना किसी प्रकार के कर्म में प्रवृत्त होना पड़ता है । किंतु ये ही कर्म उसे इस जगत में। बांधते या मुक्त कराते हैं । निष्काम भाव से परमेश्वर की प्रसन्नता के लिए कर्म करने से मनुष्य कर्म से नियम से छूट सकता है और आत्मा तथा परमेश्वर विषयक दिव्य ज्ञान प्राप्त कर सकता है ।",
            images: ['3_10', '3_12', '3_37', '0_3']
        },
        {
            title: "दिव्य ज्ञान",
            summary: "आत्मा, ईश्वर तथा इन दोनों से सम्बन्धित दिव्य ज्ञान शुद्ध करने, तथा मोक्ष प्रदान करने वाला है। ऐसा ज्ञान कर्मयोग का फल है। भगवान् गीता के प्राचीन इतिहास, इस भौतिक जगत में बारम्बार अपने अवतरण की महत्ता तथा गुरु के पास जाने की आवश्यकता का उपदेश देते हैं।",
            images: ['4_1', '4_7', '4_8', '4_11', '0_1']
        },
        {
            title: "कर्मयोग - कृष्णभावनाभावित कर्म",
            summary: "ज्ञानी पुरुष दिव्य ज्ञान की अग्नि से शुद्ध होकर बाह्यतः सारे कर्म करता है, किन्तु अन्तर उन कमों के फल का परित्याग करता हुआ शान्ति, विरक्ति, सहिष्णुता, आध्यात्मिक दृष्टिया आनन्द की प्राप्ति करता है।",
            images: ['5_4', '5_18', '0_2']
        },
        {
            title: "ध्यानयोग",
            summary: "अष्टांगयोग मन तथा इन्द्रियों को नियन्त्रित करता है और ध्यान को परमात्मा पर केन्द्रित करता है। इस विधि की परिणति समाधि में होती है।",
            images: ['6_11', '6_24', '6_34', '6_47', '0_3']
        },
        {
            title: "भगवद्ज्ञान",
            summary: "भगवान् कृष्ण समस्त कारणों के कारण, परम सत्य हैं। महात्मागण भक्तिपूर्वक उनकी शरण ग्रहण करते हैं, किन्तु अपवित्र जन पूजा के अन्य विषयों की ओर अपने मन को मोड़ देते",
            images: ['7_4', '7_15', '0_1']
        },
        {
            title: "भगवत्प्राप्ति",
            summary: "भक्तिपूर्वक भगवान् कृष्ण का आजीवन स्मरण करते रहने से और विशेषतया मृत्यु के समय ऐसा करने से मनुष्य परम धाम को प्राप्त कर सकता है।",
            images: ['8_21', '0_2']
        },
        {
            title: "परम गुह्य ज्ञान",
            summary: "भगवान् श्रीकृष्ण परमेश्वर हैं और पूज्य हैं। भक्ति के माध्यम से जीव उनसे शाश्चत सम्बद्ध है। शुद्ध भक्ति को जागृत करके मनुष्य कृष्ण के धाम को वापस जाता है।",
            images: ['9_11', '0_3']
        },
        {
            title: "श्रीभगवान् का ऐश्वर्य",
            summary: `बल, सौन्दर्य, ऐश्वर्य या उत्कृष्टता प्रदर्शित करने वाली समस्त अद्भुत घटनाएँ, चाहे वे इस
                    लोक में हों या आध्यात्मिक जगत में, कृष्ण की दैवी शक्तियों एवं ऐश्वयों की आंशिक अभिव्यक्तियाँ हैं। समस्त कारणों के कारण-स्वरूप तथा सर्वस्वरूप कृष्ण समस्त जीवों के परम पूजनीय हैं।`,
            images: ['10_12', '10_41', '0_1']
        },
        {
            title: "विराट रूप",
            summary: "भगवान् कृष्ण अर्जुन को दिव्य दृष्टि प्रदान करते हैं और विश्व-रूप में अपना अद्भुत असीम रूप प्रकट करते हैं। इस प्रकार वे अपनी दिव्यता स्थापित करते हैं। कृष्ण बतलाते हैं कि उनका सर्व आकर्षक मानव-रूप ही ईश्वर का आदि रूप है। मनुष्य शुद्ध भक्ति के द्वारा ही इस रूप का दर्शन कर सकता है।",
            images: ['11_13', '11_50', '0_2']
        },
        {
            title: "भक्तियोग",
            summary: "कृष्ण के शुद्ध प्रेम को प्राप्त करने का सबसे सुगम एवं सर्वोच्च साधन भक्तियोग है। इस परम पथ का अनुसरण करने वालों में दिव्य गुण उत्पन्न होते हैं।",
            images: ['12_6', '0_3']
        },
        {
            title: "प्रकृति, पुरुष तथा चेतना",
            summary: "जो व्यक्ति शरीर, आत्मा तथा इनसे भी परे परमात्मा के अन्तर को समझ लेता है, उसे इस भौतिक जगत से मोक्ष प्राप्त होता है।",
            images: ['10_12', '0_1']
        },
        {
            title: "प्रकृति के तीन गुण",
            summary: "सारे देहधारी जीव भौतिक प्रकृति के तीन गुणों के अधीन हैं-ये हैं सतोगुण, रजोगुण तथा तमोगुण। कृष्ण बतलाते हैं कि ये गुण क्या हैं? ये हम पर किस प्रकार क्रिया करते हैं? कोई इनको कैसे पार कर सकता है? और दिव्य पद को प्राप्त व्यक्ति के कौन-कौन से लक्षण हैं?",
            images: ['14_14', '0_2']
        },
        {
            title: "पुरुषोत्तम योग",
            summary: "वैदिक ज्ञान का चरम लक्ष्य अपने आपको भौतिक जगत के पाश से विलग करना तथा कृष्ण को भगवान् मानना है। जो कृष्ण के परम स्वरूप को समझ लेता है, वह उनकी शरण ग्रहण करके उनकी भक्ति में लग जाता है।",
            images: ['15_1', '15_6', '15_8', '0_3']
        },
        {
            title: "दैवी और आसुरी स्वभाव",
            summary: "शास्त्रों के नियमों का पालन न करके मनमाने ढंग से जीवन व्यतीत करने वाले तयारी गुणों वाले व्यक्ति अधम योनियों को प्राप्त होते हैं और आगे भी भवबन्धन में पड़े रहते हैं। किन्तु दैवी गुणों से सम्पन्न तथा शास्त्रों को आधार मानकर नियमित जीवन बिताने वाले आध्यात्मिक सिद्धि प्राप्त करते हैं।",
            images: ['16_5', '16_10', '0_1']
        },
        {
            title: "श्रद्धा के विभाग",
            summary: "भौतिक प्रकृति के तीन गुणों से तीन प्रकार की श्रद्धा उत्पन्न होती है। रजोगुण तथा तमोगुण में श्रद्धापूर्वक किये गये कमों से अस्थायी फल प्राप्त होते हैं, जबकि शास्त्र-सम्मत विधि से सतोगुण में रहकर सम्पन्न कर्म हृदय को शब्द करते हैं। ये भगवान कृष्ण के प्रति शुद्ध श्रदा तथा भक्ति उत्पन्न करने वाले होते हैं।",
            images: ['17_4', '0_2']
        },
        {
            title: "उपसंहार - संन्यास की सिद्धि",
            summary: "कृष्ण वैराग्य का अर्थ और मानवीय चेतना तथा कर्म पर प्रकृति के गुणों का प्रभाव समझाते हैं। वे ब्रह्म-अनुभूति, भगवद्‌गीता की महिमा तथा भगवद्गीता के चरम निष्कर्ष को समझाते हैं। यह चरम निष्कर्ष यह है कि धर्म का सर्वोच्च मार्ग भगवान् कृष्ण की परम शरणागति है जो पूर्ण प्रकाश प्रदान करने वाली है और मनुष्य को कृष्ण के नित्य धाम को वापस जाने में समर्थ बनाती है।",
            images: ['18_14', '18_41', '18_65', '18_78', '0_3']
        },
    ]

    useEffect(() => {
        const getData = async () => {
            try {
                setloading(true)
                const res = await fetch(`/api/${chapter}`);
                const resData = await res.json();
                setdata(resData)
            } catch (error) {
                console.log(error);
            } finally {
                setloading(false)
            }
        }
        getData();
    }, [])

    return (<div>
        <div className="carousel carousel-center bg-transparent rounded-box max-w-md space-x-4 p-4">
            {
                collapseData[chapter - 1].images.map((image) => {
                    console.log(image)
                    return (
                        <div key={image} className="carousel-item h-60">
                            <img
                                src={`/shloka/${image}.jpg`}
                                className="rounded-box" />
                        </div>
                    )
                })
            }
        </div>
        <ul className="list bg-base-100 rounded-box shadow-md">
            <li>
                <ul className="menu menu-horizontal bg-base-200 rounded-box float-right mr-4">
                    <li>
                        <button onClick={() => setshowImp(i=>!i)} className={`tooltip btn`} data-tip="Imp 108 shloka">
                            <span className="text-md font-extrabold">
                                <i className={`ri-star-${showImp? 'fill' : 'line'}`}></i>
                            </span>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setshow("shloka")} className={`tooltip btn ${show === 'shloka' && 'btn-active'}`} data-tip="Shloka">
                            <span className="text-lg font-extrabold">अ</span>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setshow("devnagri")} className={`tooltip btn ${show === 'devnagri' && 'btn-active'}`} data-tip="Devnagri">
                            <span className="text-lg font-extrabold">ā</span>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setshow("translation")} className={`tooltip btn ${show === 'translation' && 'btn-active'}`} data-tip="Translation">
                            <span className="text-md font-extrabold">Tr</span>
                        </button>
                    </li>
                </ul>
            </li>
            <li className="p-4 pb-2 tracking-wide">
                <details className="collapse bg-base-100 border-base-300 border">
                    <summary className="collapse-title font-semibold">
                        <div>
                            <div style={{ fontSize: fontSize - 4 }} className="uppercase font-semibold opacity-60">अध्याय {chapter}</div>
                            <div style={{ fontSize: fontSize + 4 }} className="font-bold">{collapseData[chapter - 1].title}</div>
                        </div>
                    </summary>
                    <div style={{ fontSize: fontSize }} className="collapse-content">
                        {collapseData[chapter].summary}
                    </div>
                </details>
            </li>
            <Content showImp={showImp} show={show} chapter={chapter} loading={loading} data={data} fontSize={fontSize} />
        </ul>
    </div>
    );
}
