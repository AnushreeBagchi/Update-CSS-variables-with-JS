const inputs=document.querySelectorAll('input');
console.log(inputs);

function handleUpdate(){
    var change=(this.value+this.dataset.sizing);
    console.log(change);
    document.documentElement.style.setProperty(`--${this.name}`,change)

};

inputs.forEach(input => {
    input.addEventListener('change',handleUpdate);
    input.addEventListener('mousemove',handleUpdate);

});
