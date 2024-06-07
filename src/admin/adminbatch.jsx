
const Batch=({batchData})=>{
  return (
    <>
    {batchData.map((item,index)=>(
        <div className="cf0todif" key={index}>
                      <div className="w2mfpq6n">
                        <div className="bk6x83">{item.batchId}</div>
                      </div>
                      <div className="bk6x83">{item.batchName}</div>
                      <div className="bk6x83">{item.strength}</div>
                    </div>
    ))}
    </>
  )
}
export default Batch;