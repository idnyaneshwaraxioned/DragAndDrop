
function dragDrop() {
	let start = document.querySelector('.start');
	let restart = document.querySelector('.restart');
	let span = document.querySelectorAll('.taskspan span');
	let taskcontainer = document.querySelectorAll('.taskcontainer li');
	let dragItem = null;

	// ==============Start Btn==========

	start.addEventListener('click', function () {
		console.log('click')
		if (start.innerHTML === "Start") {
			span.forEach(function (val) {
				val.setAttribute('draggable', 'true');
			})
			start.innerHTML = "Stop";
		}
		else {
			span.forEach(function (val) {
				val.setAttribute('draggable', 'false');
			})
			start.innerHTML = "Start";
		}
	});

	span.forEach(function (val) {
		val.addEventListener('dragstart', function () {
			// console.log('dragged');
			dragItem = this;
		})
	})

	// span.forEach(function(span){
	//     span.addEventListener('dragend',function(){
	//         taskcontainer.forEach(function(val){
	//             val.appendChild(dragItem);
	//         });  
	//     })
	// })

	// ==================drag event==============

	for (let i = 0; i < taskcontainer.length; i++) {
		taskcontainer[i].addEventListener('dragover', dragOver);
		taskcontainer[i].addEventListener('drop', drop);
	}

	function drop(e) {
		e.target.appendChild(dragItem);
	}

	function dragOver(e) {
		e.preventDefault()
		this.style.border = "2px solid tan"
	}

	//    ==============Restart btn=======

	restart.addEventListener('click', function (e) {
		e.preventDefault();
		// for (let j = 0; j < taskcontainer.length; j++) {
		// taskcontainer[j].remove(span);
		// }
		for (let k = 0; k < 5; k++) {
			document.querySelector('.taskspan').appendChild(span[k]);
		}
	});
}

dragDrop();








