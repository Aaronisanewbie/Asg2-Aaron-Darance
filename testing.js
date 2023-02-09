const track = document.getElementById("image-track");


const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
  track.dataset.percentage = nextPercentage;
  
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });
  
  for(const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}


window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);


<script>
  function scrollToCategory(category) {
    const categoryElement = document.getElementById(category);
    categoryElement.scrollIntoView({behavior: "smooth"});
  }
</script>

<select onchange="scrollToCategory(this.value)">
  <option value="">Categories</option>
  <option value="allProducts">All Products</option>
  <option value="popular">Popular</option>
  <option value="category2">New Arrivals</option>
  <!-- Add more options here -->
</select>

<!-- Add your categories below, make sure to give each a unique id -->
<div id="allProducts">
  <h2>All Products</h2>
  <!-- Add your product content here -->
</div>

<div id="category1">
  <h2>Category 1</h2>
  <!-- Add your product content here -->
</div>

<div id="category2">
  <h2>Category 2</h2>
  <!-- Add your product content here -->
</div>