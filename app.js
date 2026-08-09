// app.js — minimal interactions for Franks-room
(function(){
  function $(id){return document.getElementById(id)}
  var showBtn = $('show-frank')
  var details = $('frank-details')
  var themeBtn = $('toggle-theme')
  var dark = false

  showBtn && showBtn.addEventListener('click', function(){
    if(details.style.display === 'none' || details.style.display === ''){
      details.style.display = 'block'
      showBtn.textContent = 'Hide Frank'
    } else {
      details.style.display = 'none'
      showBtn.textContent = 'Show Frank'
    }
  })

  themeBtn && themeBtn.addEventListener('click', function(){
    dark = !dark
    if(dark){
      document.documentElement.style.setProperty('--bg','#0f172a')
      document.documentElement.style.setProperty('--card','#0b1220')
      document.documentElement.style.setProperty('--text','#e6eef6')
      document.documentElement.style.setProperty('--accent','#60a5fa')
    } else {
      document.documentElement.style.setProperty('--bg','#f8fafc')
      document.documentElement.style.setProperty('--card','#fff')
      document.documentElement.style.setProperty('--text','#111')
      document.documentElement.style.setProperty('--accent','#0366d6')
    }
  })
})();
