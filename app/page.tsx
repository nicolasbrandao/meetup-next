import Image from "next/image"
import Llama from "@/public/lhama_podcodar.jpg"

export default function Home() {
  return (
    <main className="flex min-h-full flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-center h-[500px] p-4 w-full mt-[180px]">
        <h1 className="font-bold text-4xl mb-10 text-orange-500">Meet Up PodCodar :: Next.js 13</h1>
        <div className="h-max-[500px] w-max-[500px]">
          <Image src={Llama} alt="Llama" height={500} width={500} className="object-contain border-8 rounded-full"/>
        </div>
      </div>
    </main>
  )
}
