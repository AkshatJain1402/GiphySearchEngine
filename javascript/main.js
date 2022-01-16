
// takes the default value 
// let input= document.querySelector('.js-userinput').value;
// console.log(input);

// document.querySelector('.js-go').addEventListener('click',function(){
// let input= document.querySelector('.js-userinput').value;
// console.log(input);
// push(input);

// });
document.querySelector('.js-userinput').addEventListener('keyup', function (a) {

    let input = document.querySelector('.js-userinput').value;

    if (a.which === 13) {
        push(input);
    }

});
document.querySelector('.js-userinput').addEventListener('keyup', function (a) {

    let input = document.querySelector('.js-userinput').value;

    var url = "https://api.giphy.com/v1/gifs/search?api_key=3fQ3pEMEVRLFQEv6Jcz1QVTuAep0AOLk&q="+input+"&limit=200&offset=0&rating=g&lang=en"
;
    // added this if bcuz otherwise it was searching with every pressed key
    if(a.which===13){
        console.log(url);
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open('GET', url);
    GiphyAJAXCall.send();
    GiphyAJAXCall.addEventListener('load', function (e) {
        var data = e.target.response;
        // console.log(data);
        clear();
        function clear(){
            var cont=document.querySelector(".js-container");
            cont.innerHTML="";
        
        }
        push(data);

    });
    }
});



// ajax req 




// function push(input) {
//     var respons=JSON.parse(input);
//     var imageURLs=respons.data;

//     imageURLs.forEach(function(image){
//     var localsrc=image.images.fixed_height.url;
//     console.log(localsrc);
//       var container = document.querySelector('.js-container');
//     container.innerHTML = container.innerHTML+"<img src=\"" +localsrc +"\" >";

//     });

function push(input) {
    var respons = JSON.parse(input);
    var lengthOfData = Object.keys(respons.data).length;

    console.log(lengthOfData);
    for (let i = 0; i < lengthOfData; i++) {
        var imageURLs = respons.data[i].images.fixed_height.url;
        console.log(imageURLs);
        console.log(i);
        var container = document.querySelector('.js-container');
        container.innerHTML = container.innerHTML + "<img src=\"" + imageURLs + "\" >";
    }



};


