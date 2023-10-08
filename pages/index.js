import ListJob from "@/components/listjob"
import SearchJob from "@/components/searchjob"
import axios from "axios"


export default function Home() {
  return (
    <>
      {/* search */}
      <SearchJob />
      {/* Job list */}
      <ListJob />

    </>
  )
}
