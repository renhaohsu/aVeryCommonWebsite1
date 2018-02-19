sidebar = document.getElementById("sidebar")
header = document.getElementById("header")
my_btn = document.getElementById("my_btn")
sidebarRight = document.getElementById("sidebarRight")

var appearValue = false

my_btn.onclick = function() { 
  	if(!appearValue){
    	sidebar.style.width = "304px"
    	appearValue = true
    	console.log(appearValue)
    	sidebarRight.style.display = 'block'
    	sidebarRight.style.pointerEvents = 'auto'
    	sidebarRight.style.width = document.body.clientWidth - 304 + 'px'
    //會出問題 拉動時他的值不會跟著改變 不過只能先這樣@@
	}
}

sidebarRight.onclick = function() {
	if (appearValue) {
		sidebar.style.width = "0px"
    	appearValue = false
    	console.log(appearValue)
    	sidebarRight.style.display = 'none'
    	sidebarRight.style.pointerEvents = 'none'
	}
}