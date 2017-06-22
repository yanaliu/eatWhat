var restaurant = ["即品", "食堂", "麻辣烫", "黄焖鸡", "711", "融科", "烤翅一绝", "减肥吧","驴肉火烧"];


// window.onload = function() {
// 	var can1 = document.getElementById("can1");
// 	var res = document.getElementById("res");
// 	can1.onclick = function() {
// 		let id = Math.floor(Math.random() * 9);
	
// 		// console.log(restaurant[id]);
// 		// console.log("hele:" + res.innerHTML);
// 		res.innerHTML = restaurant[id];
// 		this.onClick = function(){};
// 	}

// 	// can1.addEventListener("click", onClick(), false);
// }

function onClick(o) {
	let id = Math.floor(Math.random() * 9);
	var res = document.getElementById("res");
		// console.log(restaurant[id]);
		// console.log("hele:" + res.innerHTML);
		res.innerHTML = restaurant[id];
		this.onClick = function(){
			alert("只有一个选择，想吃吃，不想吃饿着！！！");
		};
}