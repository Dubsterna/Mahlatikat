
$("#myButton").click(function()  {                    
  window.location.href = 'omasivu.html';
      window.localStorage.setItem("loginname", $("#nimi").val());
    return false;
    
});


$("#luo").click(function()  {                    
  window.location.href = 'rekisterointi.html';
    return false;
    
});