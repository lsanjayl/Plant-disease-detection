
const Stats=({name})=>{
    console.log(name.slice(-5,-4))

    const data=[
        {perimeter:"787.00",totalArea:"22368.00",infection:"10.25",area:"43",severity:"26"},
        {perimeter:"834.00",totalArea:"27788.00",infection:"20.25",area:"40",severity:"28"},
        {perimeter:"900.00",totalArea:"37068.00",infection:"11.25",area:"44",severity:"29"},
        {perimeter:"678.00",totalArea:"24068.00",infection:"14.25",area:"42",severity:"26"},
    ]





return(
<div class="card w-110 bg-primary-content shadow-xl" style={{width:"500px"}}>
  <div class="card-body">
    <h2 class="card-title text-black">Infected leaf!!</h2>
    


  <div class="stats stats-vertical  bg-accent text-primary-content shadow">
  
  <div class="stat">
    <div class="stat-title">Perimeter of leaf</div>
    <div class="stat-value">{data[name.slice(-5,-4)].perimeter}</div>
    <div class="stat-desc">Plant's perimeter</div>
  </div>
  
  <div class="stat">
    <div class="stat-title">Total area</div>
    <div class="stat-value">{data[name.slice(-5,-4)].totalArea}</div>
    <div class="stat-desc">Area of uploaded image</div>
  </div>
  </div>
  <div style={{display:"flex",justifyContent:"space-around"}}>
      <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
    <h4 class=" text-black"> Infection</h4>
    <div class="radial-progress bg-accent text-accent-content border-4 border-accent" id="area">{data[name.slice(-5,-4)].infection}</div>
    </div>
    <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
    <h5 class=" text-black">Infected area</h5>
    <div class="radial-progress bg-accent text-accent-content border-4 border-accent" id="area2">{data[name.slice(-5,-4)].area}</div>
    </div>
    <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
    <h5 class=" text-black">Sevierity</h5>
    <div class="radial-progress bg-accent text-accent-content border-4 border-accent" id="area3">{data[name.slice(-5,-4)].severity}</div>
    </div>
    </div>
    </div>
</div>
);
}

export default Stats