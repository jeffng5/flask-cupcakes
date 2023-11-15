async function getAPI(){
    let frame= document.createElement('ul');
    const resp = await axios.get('/api/cupcakes');
    console.log("it worked")
    console.log(resp.data)
    setTimeout(3000)
    let lis= document.createElement('li').append(resp.data)

    frame.append(lis)

    
    
  return frame  ;

}
getAPI()

// function addCupcake(){

// let showFlavor= document.getElementById('flavor').value
// let showSize=document.getElementById('size').value
// let showRating=document.getElementById('rating').value
// let showImage=document.getElementById('image').value

// let frame= document.createElement('ul')
// console.log(frame)
// let div1=document.createElement('li').innerHTML(showFlavor)
// let div2=document.createElement('li').innerHTML(showSize)
// let div3=document.createElement('li').innerHTML(showRating)
// let div4=document.createElement('li').innerHTML(showImage)
// frame.appendChild(div1)
// frame.appendChild(div2)
// frame.appendChild(div3)
// frame.appendChild(div4)
// return frame};



// let submit = document.getElementById('button')
// submit.addEventListener('click', (e)=> {
// e.preventDefault(); addCupcake()
// }
// )

// addCupcake()