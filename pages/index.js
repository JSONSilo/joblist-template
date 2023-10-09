import ListJob from "@/components/listjob"
import SearchJob from "@/components/searchjob"
import axios from "axios"
import { useEffect, useState } from "react"


export default function Home() {
  const [isLoading, setLoading] = useState(false)
  const [data, setData] = useState()

  const handleJobList = async () => {
    setLoading(true)
    axios.get("https://api.jsonsilo.com/public/e768587a-40e5-4477-8cd3-58c301c27da0").then((res)=> {
      setData(res.data)
      setLoading(false)
    }).catch((err)=> {
      alert(err);
      setLoading(false)
    })
  }

  useEffect(() => {
    handleJobList()
  },[]);

  return (
    <>
      <SearchJob />
      {isLoading ? (
        <div className="flex items-center justify-center py-10">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      ): <ListJob data={data}/>}
    </>
  )
}
