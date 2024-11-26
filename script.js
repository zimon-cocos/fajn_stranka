
const spark = document.getElementById("spark")
const popoutNavbar = document.getElementById("popoutNavbar")
const kategVeci = document.getElementById("kategVeci")
const body = document.getElementsByTagName("body")[0]


spark.addEventListener("click",()=>{
    console.log("Bruh")
    kategVeci.setAttribute("style","max-height:150px")
    body.setAttribute("style","background-color: white")
    spark.setAttribute("style","background: yellow")   
    
})

