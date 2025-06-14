'use client'
import { useFontSize } from "@/store/useFontSize";
import Link from "next/link";
import TextTile from "./TextTile";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Home() {
  const fontSize = useFontSize((state) => state.fontSize)
  const router=useRouter()
  const resumeReading = () => {
    const lastRead = localStorage.getItem("lastRead");
    if (!lastRead) return toast.error("No last read found");
    const { chapter, verse } = JSON.parse(lastRead);
    router.push(`/${chapter}/${verse}`)
  }
  return (
    <main>
      <div className="flex items-center p-5 gap-3">
        <img src="/images/bg.png" alt="bg" className="h-50 rounded-3xl" />
        <div>
          <h1 className="text-md mt-2">अनुवाद एवं तात्पर्य</h1>
          <p className="text-xl font-bold">श्रील ए.सी भक्तिवेदांत स्वामी प्रभुपाद </p>
          <button onClick={resumeReading} className="btn text-xs btn-success mt-2">Resume Reading</button>
        </div>
      </div>
      <ul className="list bg-base-100 rounded-box shadow-md">
        <Link href={'/zero/0'} className="list-row">
          <div className="text-4xl font-thin opacity-50 tabular-nums">..1</div>
          <div className="list-col-grow">
            <TextTile title="पृष्ठभूमि" subtitle="Setting the scene" />
          </div>
          <div className="text-xs font-thin tabular-nums">2 pgs</div>
        </Link>
        <Link href={'/zero/1'} className="list-row">
          <div className="text-4xl font-thin opacity-50 tabular-nums">..2</div>
          <div className="list-col-grow">
            <TextTile title="आमुख" subtitle="Preface" />
          </div>
          <div className="text-xs font-thin tabular-nums">3 pgs</div>
        </Link>
        <Link href={'/zero/2'} className="list-row">
          <div className="text-4xl font-thin opacity-50 tabular-nums">..3</div>
          <div className="list-col-grow">
            <TextTile title={"भूमिका"} subtitle="Introduction" />
          </div>
          <div className="text-xs font-thin tabular-nums">27 pgs</div>
        </Link>
        <Link href={'/zero/3'} className="list-row">
          <div className="text-4xl font-thin opacity-50 tabular-nums">..4</div>
          <div className="list-col-grow">
            <TextTile title={"गुरु परंपरा"} subtitle="Guru Tradition" />
          </div>
          <div className="text-xs font-thin tabular-nums">1 pgs</div>
        </Link>
        <Link href={'/art-gallery'} className="list-row">
          <div className="text-4xl font-thin opacity-50 tabular-nums">..5</div>
          <div className="list-col-grow">
            <TextTile title={"आर्ट गैलरी"} subtitle="Art Gallery" />
          </div>
          <div className="text-xs font-thin tabular-nums">22 pgs</div>
        </Link>
        <Link href={'/1'} className="list-row">
          <div className="text-4xl font-thin opacity-50 tabular-nums">01</div>
          <div className="list-col-grow">
            <TextTile title="कुरुक्षेत्र के युद्ध स्थल में सैन्य निरीक्षण" subtitle={"Observing the Armies on the Battlefield of Kurukṣetra"} shlokacount={46}/>
          </div>
          <div className="text-xs text-right font-thin tabular-nums">
            <p>23 pgs</p>
            <p>01h:35m</p>
          </div>
        </Link>
        <Link href={'/2'} className="list-row">
          <div className="text-4xl font-thin opacity-50 tabular-nums">02</div>
          <div className="list-col-grow">
            <TextTile title={"गीता का सार"} subtitle={"Contents of the Gītā Summarized"} shlokacount={72}/>
          </div>
          <div className="text-xs text-right font-thin tabular-nums">
            <p>76 pgs</p>
            <p>04h:22m</p>
          </div>
        </Link>
        <Link href={'/3'} className="list-row">
          <div className="text-4xl font-thin opacity-50 tabular-nums">03</div>
          <div className="list-col-grow">
            <TextTile title={"कर्मयोग"} subtitle={"Karma-yoga"} shlokacount={43}/>
          </div>
          <div className="text-xs text-right font-thin tabular-nums">
            <p>42 pgs</p>
            <p>02h:23m</p>
          </div>
        </Link>
        <Link href={'/4'} className="list-row">
          <div className="text-4xl font-thin opacity-50 tabular-nums">04</div>
          <div className="list-col-grow">
            <TextTile title={"दिव्य ज्ञान"} subtitle={"Transcendental Knowledge"} shlokacount={42}/>
          </div>
          <div className="text-xs text-right font-thin tabular-nums">
            <p>53 pgs</p>
            <p>02h:52m</p>
          </div>
        </Link>
        <Link href={'/5'} className="list-row">
          <div className="text-4xl font-thin opacity-50 tabular-nums">05</div>
          <div className="list-col-grow">
            <TextTile title={"कर्मयोग-कृष्णभावनाभावित कर्म"} subtitle={"Karma-yoga - Action in Kṛṣṇa Consciousness"} shlokacount={29}/>
          </div>
          <div className="text-xs text-right font-thin tabular-nums">
            <p>28 pgs</p>
            <p>01h:36m</p>
          </div>
          
        </Link>
        <Link href={'/6'} className="list-row">
          <div className="text-4xl font-thin opacity-50 tabular-nums">06</div>
          <div className="list-col-grow">
            <TextTile title={"ध्यानयोग"} subtitle={"Dhyāna-yoga"} shlokacount={47}/>
          </div>
          <div className="text-xs text-right font-thin tabular-nums">
            <p>46 pgs</p>
            <p>02h:34m</p>
          </div>
          
        </Link>
        <Link href={'/7'} className="list-row">
          <div className="text-4xl font-thin opacity-50 tabular-nums">07</div>
          <div className="list-col-grow">
            <TextTile title={"भगवद्ज्ञान"} subtitle={"Knowledge of the Absolute"} shlokacount={30}/>
          </div>
          <div className="text-xs text-right font-thin tabular-nums">
            <p>48 pgs</p>
            <p>02h:30m</p>
          </div>
          
        </Link>
        <Link href={'/8'} className="list-row">
          <div className="text-4xl font-thin opacity-50 tabular-nums">08</div>
          <div className="list-col-grow">
            <TextTile shlokacount={28} subtitle={"Attaining the Supreme"} title={"भगवत्प्राप्ति"} />
          </div>
          <div className="text-xs text-right font-thin tabular-nums">
            <p>27 pgs</p>
            <p>01h:35m</p>
          </div>
          
        </Link>
        <Link href={'/9'} className="list-row">
          <div className="text-4xl font-thin opacity-50 tabular-nums">09</div>
          <div className="list-col-grow">
            <TextTile title={"परम गुह्य ज्ञान"} subtitle={"The Most Confidential Knowledge"} shlokacount={34}/>
          </div>
          <div className="text-xs text-right font-thin tabular-nums">
            <p>53 pgs</p>
            <p>02h:52m</p>
          </div>
        </Link>
        <Link href={'/10'} className="list-row">
          <div className="text-4xl font-thin opacity-50 tabular-nums">10</div>
          <div className="list-col-grow">
            <TextTile title={"श्रीभगवन् का ऐश्वर्य"} subtitle={"The Opulence of the Absolute"} shlokacount={42}/>
          </div>
          <div className="text-xs text-right font-thin tabular-nums">
            <p>41 pgs</p>
            <p>02h:23m</p>
          </div>
        </Link>
        <Link href={'/11'} className="list-row">
          <div className="text-4xl font-thin opacity-50 tabular-nums">11</div>
          <div className="list-col-grow">
            <TextTile shlokacount={55} subtitle={"The Universal Form"} title={"विराट रूप"} />
          </div>
          <div className="text-xs text-right font-thin tabular-nums">
            <p>39 pgs</p>
            <p>02h:30m</p>
          </div>
        </Link>
        <Link href={'/12'} className="list-row">
          <div className="text-4xl font-thin opacity-50 tabular-nums">12</div>
          <div className="list-col-grow">
            <TextTile shlokacount={20} subtitle={"Devotional Service"} title={"भक्तियोग"} />
          </div>
          <div className="text-xs text-right font-thin tabular-nums">
            <p>20 pgs</p>
            <p>01h:11m</p>
          </div>
        </Link>
        <Link href={'/13'} className="list-row">
          <div className="text-4xl font-thin opacity-50 tabular-nums">13</div>
          <div className="list-col-grow">
            <TextTile shlokacount={35} subtitle={"Nature, the Enjoyer and Consciousness"} title={"प्रकृति, पुरुष तथा चेतना"}  />
          </div>
          <div className="text-xs text-right font-thin tabular-nums">
            <p>41 pgs</p>
            <p>02h:17m</p>
          </div>
        </Link>
        <Link href={'/14'} className="list-row">
          <div className="text-4xl font-thin opacity-50 tabular-nums">14</div>
          <div className="list-col-grow">
            <TextTile title={"प्रकृति के तीन गुण"} subtitle={"The Three Modes of Material Nature"} shlokacount={27} />
          </div>
          <div className="text-xs text-right font-thin tabular-nums">
            <p>23 pgs</p>
            <p>01h:24m</p>
          </div>
        </Link>
        <Link href={'/15'} className="list-row">
          <div className="text-4xl font-thin opacity-50 tabular-nums">15</div>
          <div className="list-col-grow">
            <TextTile shlokacount={20} subtitle={"The Yoga of the Supreme Person"} title={"पुरुषोत्तम योग"} />
          </div>
          <div className="text-xs text-right font-thin tabular-nums">
            <p>26 pgs</p>
            <p>01h:27m</p>
          </div>
        </Link>
        <Link href={'/16'} className="list-row">
          <div className="text-4xl font-thin opacity-50 tabular-nums">16</div>
          <div className="list-col-grow">
            <TextTile shlokacount={24} title={"दैवी तथा आसुरी स्वभाव"} subtitle={"The Divine and Demoniac Natures"}/>
          </div>
          <div className="text-xs text-right font-thin tabular-nums">
            <p>26 pgs</p>
            <p>01h:30m</p>
          </div>
        </Link>
        <Link href={'/17'} className="list-row">
          <div className="text-4xl font-thin opacity-50 tabular-nums">17</div>
          <div className="list-col-grow">
            <TextTile shlokacount={28} title={"श्रद्धा के विभाग"} subtitle={"The Divisions of Faith"} />
          </div>
          <div className="text-xs text-right font-thin tabular-nums">
            <p>18 pgs</p>
            <p>01h:08m</p>
          </div>
        </Link>
        <Link href={'/18'} className="list-row">
          <div className="text-4xl font-thin opacity-50 tabular-nums">18</div>
          <div className="list-col-grow">
            <TextTile shlokacount={78} title={"उपसंहार संन्यास की सिद्धि"} subtitle={"Conclusion - The Perfection of Renunciation"} />
          </div>
          <div className="text-xs text-right font-thin tabular-nums">
            <p>49 pgs</p>
            <p>03h:09m</p>
          </div>
        </Link>
        <Link href={'/zero/4'} className="list-row">
          <div className="text-4xl font-thin opacity-50 tabular-nums">..6</div>
          <div className="list-col-grow">
            <TextTile title={"लेखक परिचय"} subtitle={"About Writer"} />
          </div>
          <div className="text-xs text-right font-thin tabular-nums">
            <p>3 pgs</p>
          </div>
        </Link>
      </ul>
    </main>
  );
}
