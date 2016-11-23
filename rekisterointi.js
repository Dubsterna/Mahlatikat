$("#peruuta").click(function()  {                    
  window.location.href = 'etusivu.html';
    return false;
    
});


$("#rekisteroidy").click(function()  {                    
  window.location.href = 'omasivu.html';
      window.localStorage.setItem("loginname", $("#uusinimi").val());
    return false;
    
});
