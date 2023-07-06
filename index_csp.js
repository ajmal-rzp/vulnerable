document.getElementById('source1').addEventListener('input', (e)=>{
  document.getElementById('sink1').innerHTML=e.target.value;
})

window.addEventListener('message', (e)=>{
  document.getElementById('sink2').innerHTML=e.data;
})
