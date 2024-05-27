var yourLinkRef = document.getElementById("your-link-ref")
var newLinkRef = document.getElementById("new-link-ref")


var btn = document.querySelectorAll("[type='button']")
btn[0].addEventListener("click", removeRef)

function removeRef() {
  let input = yourLinkRef.value
  let parts = input.split("?")
  let result = parts[0]
  newLinkRef.value = result 
}



var yourLinkReddit = document.getElementById("your-link-Reddit")
var iframe = document.getElementById("iframe")

//var btnReddit = document.querySelector("[type='button']") //!!!!!
var template = ""
var tem1 = "<iframe height='569' src='https://embed."
var tem2 = "' width='640px' scrolling='no' allowfullscreen='true' sandbox='allow-scripts allow-same-origin allow-popups' allow='clipboard-read; clipboard-write' style='border: none; max-width: 100%; border-radius: 8px; display: block; margin: 0px auto;'></iframe>"

btn[1].addEventListener("click", genIframe)

function genIframe() {
  let input = yourLinkReddit.value 


  let parts = input.split("https://www.") 
  let cutLink = parts[1]
  let template = tem1 + cutLink + tem2

  iframe.value = template

}



var yourLinkTwitter = document.getElementById("your-link-Twitter")
var twitter = document.getElementById("twitter")

btn[2].addEventListener("click", xToTwitter)

function xToTwitter() {
  let input = yourLinkTwitter.value 
  let res = input.replace("x", "twitter")
  twitter.value = res

}

var yourLinkInstagram = document.getElementById("your-link-Instagram")
var instagram = document.getElementById("instagram")

btn[3].addEventListener("click", instagramEmbed)

function instagramEmbed() {
  let input = yourLinkInstagram.value 
  let embed = "embed"
  let temp1 = "<iframe src='"
  let temp2 = "' width='100%' height='350' scrolling='no'></iframe>"
  let res = temp1 + input + embed + temp2
  instagram.value = res

}

