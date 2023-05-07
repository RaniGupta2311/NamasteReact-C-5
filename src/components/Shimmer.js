import ShimmerCard from "./ShimmerCard"
const Shimmer=()=>{
    return <div className="restaurant-list">
      {Array(12).fill("").map((e,index)=><ShimmerCard key={index}/>)}
    </div>
}
export default Shimmer