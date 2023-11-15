async function getAPI(){
    let table= document.getElementById('data')
    const resp = await axios.get('/api/cupcakes');
    console.log("it worked")
    console.log(resp.data[0]['flavor'])
    setTimeout(3000)
    for (let i =0 ; i <= 3; i++){
    let trs= document.createElement('tr')
    let lis= document.createElement('th')
    let lis1= document.createElement('th')
    let lis2= document.createElement('th')
    let lis3= document.createElement('th')
    let trs1= document.createElement('tr')
    lis.innerText= resp.data[i]['flavor'] 
    lis1.innerText= resp.data[i]['size'] 
    lis2.innerText= resp.data[i]['rating'] 
    lis3.innerText= resp.data[i]['image']
    table.appendChild(trs)
    table.appendChild(lis)
    table.appendChild(lis1)
    table.appendChild(lis2)
    table.appendChild(lis3)
    table.appendChild(trs1)
}
   
     return table
}
getAPI()

function addCupcake(){

let showFlavor= document.getElementById('flavor').value
let showSize=document.getElementById('size').value
let showRating=document.getElementById('rating').value
let showImage=document.getElementById('image').value

let frame= document.getElementById('data')
let ts= document.createElement('tr')
let lit= document.createElement('th')
let li1= document.createElement('th')
let li2= document.createElement('th')
let li3= document.createElement('th')
let ts1=document.createElement('tr')

lit.innerText=showFlavor
li1.innerText=showSize
li2.innerText=showRating
li3.innerText=showImage
frame.appendChild(ts)
frame.appendChild(lit)
frame.appendChild(li1)
frame.appendChild(li2)
frame.appendChild(li3)
frame.appendChild(ts1)
console.log(frame)
return frame
}


const submit = document.getElementById('button')

submit.addEventListener('click', function(e) {
e.preventDefault(); addCupcake()
}
)
