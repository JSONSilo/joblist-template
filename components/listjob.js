import Image from "next/image";


export default function ListJob({data}) {
  
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {data && data.map((v,k)=> (
          <>
            <div className="card bg-base-100 border rounded-md" key={k}>
              <div className="card-body">
                <Image src={v.avatar} alt={v.company} width={60} height={60}/>
                <h2 className="card-title font-extrabold">
                  {v.title}
                  {v.is_feature ? (
                      <div className="badge bg-red-500 text-white text-sm">Feature</div>
                  ):''}
                </h2>
                <p className=" font-light">
                  {v.company}
                  <span className="ml-2 text-gray-400 font-light">{v.remote ? "Remote \u2022 ":''}{v.type.charAt(0).toUpperCase() + v.type.slice(1)}</span>
                </p>
                <p>{v.location}</p>
                <p className=" text-green-600 font-light">{v.salary}</p>
                <div className="card-actions justify-end">
                  <button href="#" className="btn btn-mb btn-neutral" onClick={()=>document.getElementById(k).showModal()}>Apply</button>
                </div>
              </div>
            </div>
            <dialog id={k} className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg">{v.title}</h3>
                <p className="py-4">{v.description}</p>
                  <ol class="list-inside list-decimal">
                    {v.requirements.map((v, k)=> (
                      <li key={k}>{v}</li>          
                    ))}
                  </ol>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </>
        ))}
      </div>
    </div>
  );
}