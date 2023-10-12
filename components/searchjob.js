import { useRouter } from "next/router";
import { useRef } from "react";

export default function SearchJob({data, result}) {
  const searchQuery = useRef(null)
  const router = useRouter()

  const handleSearchQuery = async (event) => {
    event.preventDefault()

    router.push(`?search=${searchQuery.current.value}`)
  }

  return (
    <>
      <div className="navbar bg-neutral text-neutral-content">
        <a className="btn btn-ghost normal-case text-xl">Job Board - JSONsilo.com Template</a>
      </div>
      <form className="flex items-center justify-center py-36" onSubmit={handleSearchQuery}>
        <div className="form-control">
          <div className="input-group">
            <input type="text" placeholder="Search…" className="input input-bordered w-96" ref={searchQuery}/>
            <button className="btn btn-square" type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button> 
          </div>
        </div>
      </form>
    </>
  );
}