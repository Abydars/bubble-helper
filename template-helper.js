const LesscodeTemplateHelper = {
  topBar: function(domain) {
    document.addEventListener('DOMContentLoaded', function() {
          if(window.location.href.indexOf(domain) > 0) {
              var acon = document.createElement('div');
              var ahref = document.createElement('a');
              ahref.id="buytemplate";
              ahref.href="";
              ahref.innerText = "Buy this template";
              ahref.style="padding: 10px;background: #0a7cac;border-radius: 5px;color: white;display: inline-block;";
              acon.style="padding: 15px;text-align: right;display: block;background: #ebfdff;border: dotted 2px #DDD;margin: 15px;border-radius: 10px;";
              acon.appendChild(ahref);
              document.body.appendChild(acon);
          }
    });
  }
};
