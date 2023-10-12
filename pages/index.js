import Bar from "@/components/bar"
import Footer from "@/components/footer"
import ListJob from "@/components/listjob"
import SearchJob from "@/components/searchjob"
import axios from "axios"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"


export default function Home() {
  const searchParams = useSearchParams()
  const [isLoading, setLoading] = useState(false)
  const [rawData, setRawData] = useState()
  
  let data = []
  const q = searchParams.get('search')

  const handleJobList = async () => {
    setLoading(true)
    axios.get(process.env.NEXT_PUBLIC_API_SILO_URL).then((res)=> {
      setRawData(res.data)
      setLoading(false)
    }).catch((err)=> {
      alert(err);
      setLoading(false)
    })
  }


  if (rawData && rawData.length !== 0 && q !== null) {
    data = rawData.filter(job => {
      return job.title.toLowerCase().includes(q.toLowerCase())
    })
  } else {
    data = rawData;
  }

  useEffect(() => {
    handleJobList()
  },[]);

  return (
    <>
      <SearchJob data={data}/>
      <Bar q={q} total={data && data.length}/>
      <div className="pb-40">
      {isLoading ? (
        <div className="flex items-center justify-center py-10">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      ): <ListJob data={data}/>}
      </div>
      <Footer />
    </>
  )
}
