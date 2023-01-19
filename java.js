console.log("welcome to M company");

//intialize the variables
let songindex= 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay= document.getElementById('masterplay');
let myProgressbar= document.getElementById('myProgressbar');
let mastersongname= document.getElementById('masterplaysong');
let gif = document.getElementById('gif');
let songitem = Array.from(document.getElementsByClassName('songitem'));


let songs =[
    {songName:"salam-a-iskq", filepath:'songs/1.mp3' , cover:'covers/1.jpg'},
    {songName:"love story-indila", filepath:'songs/2.mp3' , cover:'covers/2.jpg'},
    {songName:"joker bgm-indila", filepath:'songs/3.mp3' , cover:'covers/3.jpg'},
    {songName:"Enemy - imagine dragons", filepath:'songs/4.mp3' , cover:'covers/4.jpg'},
    {songName:"cardless- masked wolf", filepath:'songs/5.mp3' , cover:'covers/5.jpg'},
    {songName:"beliver - imagine dragon", filepath:'songs/6.mp3' , cover:'covers/7.jpg'},
    {songName:"can i fuck you", filepath:'songs/7.mp3' , cover:'covers/8.jpg'},
    {songName:"salam-a-iskq", filepath:'songs/8.mp3', cover:'covers/9.jpg'},
    {songName:"salam-a-iskq", filepath:'songs/9.mp3', cover:'covers/10.jpg'},
    {songName:"salam-a-iskq", filepath:'songs/10.mp3', cover:'covers/6.jpg'},
    {songName:"salam-a-iskq", filepath:'songs/10.mp3', cover:'covers/6.jpg'},
    

]

songitem.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].cover; 
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName; 
})
 

//handle play/pause click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        audioElement.pause();
        gif.style.opacity=0;

    }
})


//listen to the Events

audioElement.addEventListener('timeupdate', ()=>{
 //updare secbar
 progress = parseFloat((audioElement.currentTime/audioElement.duration)*100);
 myProgressbar.value=progress;
     
})
    
myProgressbar.addEventListener('change', ()=>{
    audioElement.currentTime=myProgressbar.value * audioElement.duration/100;
})
audioElement.addEventListener('ended',  ()=>{ 
    audioElement.play();})
   
//song playing infos
const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })
    
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        makeAllPlays();
        
        songindex =parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add("fa-circle-pause");
        audioElement.src =`songs/${songindex+1}.mp3`;
        mastersongname.innerText = songs[songindex].songName;
        audioElement.currentTime = 0 ;
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songindex >=songs.length-1)
    {songindex=0}
    else{songindex+=1}

    audioElement.src =`songs/${songindex+1}.mp3`;
    mastersongname.innerText = songs[songindex].songName;
    audioElement.currentTime = 0 ;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }

    audioElement.src =`songs/${songindex+1}.mp3`;
    mastersongname.innerText = songs[songindex].songName;
    audioElement.currentTime = 0 ;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})