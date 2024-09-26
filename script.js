let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
//   console.log(hours)
if(hours>=0 && hours<12){
    speak("Good Morning Sir")
}
else if(hours>=12 && hours <16){
    speak("Good afternoon Sir")
}else{
    speak("Good evening Sir")
}
}
window.addEventListener('load',()=>{
  wishMe()
})
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript= event.results[currentIndex][0].transcript
    content.innerText=transcript 
  takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
  recognition.start()
  btn.style.display="none"
  voice.style.display="block"
})
function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"

    if(message.includes("hello")||message.includes("hey")){
        speak("hello sir, what can i help you?")
    }
    else if(message.includes("who are you")){
        speak ("i am virtual assistant called Sunny ,created by Developer Sahas Sir ")
    }else if (message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://youtube.com/","_blank")
    }
    else if (message.includes("open google")){
        speak("opening google...")
        window.open("https://google.com/","_blank")
    }
    else if (message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://facebook.com/","_blank")
    }
    else if (message.includes("open calculator")){
        speak ("opening calculator...")
        window.open("https://www.calculator.net/","_blank")
    }
    else if (message.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://instagram.com/","_blank")
    }
    else{
        let finalText="this is what i found on internet regarding" + message.replace("sunny","") || message.replace("shanny","") 
        speak(finalText)
        window.open( `https://www.google.com/search?q=${message.replace("sunny","")}` )
    }
}
