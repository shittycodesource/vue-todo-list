export default {
	bind: function(el, binding, vnode) {
		
		el.clickOutsideEvent = function(event) {
		  	if (el !== event.target || !el.contains(event.target)) {
	    		vnode.context[binding.expression](event);
			}
		};

		document.body.addEventListener('click', el.clickOutsideEvent)
		event.stopPropagation();
	},
	unbind: function (el) {
		console.log('unbind');
		document.body.removeEventListener('click', el.clickOutsideEvent)
	},
}