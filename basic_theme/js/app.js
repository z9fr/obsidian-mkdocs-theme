console.log("hi")

const NavBarHide = () => {
  const bar = document.getElementById("navBar")
  width = bar.style["width"]
  
  if(width === "300px" ){
    bar.style["width"] = "0px"
  } else{
    bar.style["width"] = "300px"
  }
}
