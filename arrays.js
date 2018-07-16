var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
function addElementToBeginningOfArray(array, element){
			var chocolateBars = [element, ...array];
			return chocolateBars;
		}
function destructivelyAddElementToBeginningOfArray(array, element){
	 array.unshift(element);
	 return array
	}
	function addElementToEndOfArray(array, element){
			var vv = [array, ...element];
			return vv;
		}
function destructivelyAddElementToEndOfArray(array, element){
			array.push(element)
			return array;
		}
function accessElementInArray(array, index){
			return array[index];
	}
	function destructivelyRemoveElementFromBeginningOfArray(array){
			array.shift();
			return array;
	}
	function removeElementFromBeginningOfArray(array){
			array.slice(0);
			return array;
		}