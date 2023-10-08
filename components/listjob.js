import Image from "next/image";


export default function ListJob() {
  
  
    const numberOfTimes = 100; // Change this to the number of times you want to loop
    const cardElements = [];
  
    for (let i = 0; i < numberOfTimes; i++) {
      cardElements.push(
        <div className="card bg-base-100 border rounded-md" key={i}>
          {/* <figure><Image src="#" alt="Shoes" /></figure> */}
          <div className="card-body">
            <div className="avatar">
              <div className="w-20 rounded-xl">
                <Image src="https://raw.githubusercontent.com/rdimascio/icons/master/icons/facebook.svg" alt="company avatar" width={50} height={50}/>
              </div>
            </div>
            <h2 className="card-title font-extrabold">
              Project Manager
              <div className="badge bg-red-500 text-white text-sm">Feature</div>
            </h2>
            
            <p className=" font-light">
              Microsoft
              <span className="ml-2 text-gray-400 font-light">Remote &#x2022; Fulltime</span>
            </p>
            <p>Malaysia</p>
            {/* <p className=" text-gray-400">Remote &#x2022; Fulltime</p> */}
            <p className=" text-green-600 font-light">$1000 - $2000</p>
            <div className="card-actions justify-end">
              {/* <div className="badge badge-outline">Apply</div>  */}
              <a href="#" className="btn btn-mb btn-neutral">Apply</a>
              {/* <div className="badge badge-outline">Products</div> */}
            </div>
          </div>
        </div>
      );
    
  
    
  }

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {cardElements}
      </div>
    </div>
  );
}