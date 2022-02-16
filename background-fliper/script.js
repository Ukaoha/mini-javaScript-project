// creat an evenlistner function
const clickColor = document
  .querySelector(".btn")
  .addEventListener("click", function () {
    // console.log("3");

    const color = (document.querySelector("body").style.backgroundColor =
      randomColors());
  });
//   generate random colors using math.random and trunc multiply it by hexacode ...16777215 is a number representing the rgba
// then turn it to string by using the tostring()
function randomColors() {
  const randomColors = "#" + Math.trunc(Math.random() * 16777215).toString(16);
  return randomColors;
}

/*
const colors = ['yellow','blue','red','green','brown','black','orange'] ;
const clickColor = document.querySelector('.btn').addEventListener('click' , function(){
    console.log('click')
});

function randomColors() {
    for( i = 0; i < colors.length ; i++ ) {
        console.log(i);
    }
}
randomColors()
*/
