
const Suggestions=({name})=>{
    console.log(name.slice(-5,-4))

    const data=[
        {disease:"Leaf Scorch Tree Disease",control:"Several steps can be taken to prevent more severe damage. Deep watering will help with moisture uptake. You need to make sure lack of water is the problem as too much water can also become a problem. Spring application of a complete fertilizer may help but do not fertilize after June."},
        {disease:"Powdery Mildew Disease",control:"Several steps can be taken to prevent more severe damage. Deep watering will help with moisture uptake. You need to make sure lack of water is the problem as too much water can also become a problem. Spring application of a complete fertilizer may help but do not fertilize after June."},
        {disease:"Anthracnose Disease",control:"Neem oil spray is an organic, multi-purpose fungicide/insecticide/miticide that kills eggs, larvae and adult stages of insects as well as prevents fungal attack on plants. Apply early, at the first sign of spring budding, every 7-14 days as a preventative measure or on a 7-day schedule until existing problems are eliminated."},
        {disease:"Downy Mildew",control:"Wet leaves are necessary for this type of mildew to invade plants. Eliminate moisture by pruning plants to improve air circulation. In row crops, make sure to space plants to allow for good air circulation even after they are mature. Make sure the rows are far enough apart, as well."},
    ]
return(
<div class="card w-96 bg-primary-content shadow-xl">
  <div class="card-body text-black">
    <h2 class="card-title ">{data[name.slice(-5,-4)].disease}</h2>
    <p>{data[name.slice(-5,-4)].control}</p>
  </div>
</div>
);
}

export default Suggestions