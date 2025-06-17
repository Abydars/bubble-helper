const LesscodeTemplateHelper = {
  topBar: function(domain, marketplaceUrl) {
    document.addEventListener('DOMContentLoaded', function() {
          if(window.location.href.indexOf(domain) > 0) {
              var acon = document.createElement('div');
              var ahref = document.createElement('a');
              ahref.id="buytemplate";
              ahref.href=`https://bubble.io/template/${marketplaceUrl}`;
              ahref.innerText = "Buy this template";
              ahref.style="padding: 10px;background: #0a7cac;border-radius: 5px;color: white;display: inline-block;";
              acon.style="padding: 15px;text-align: right;display: flex;background: rgb(33 185 202 / 12%);border: 2px dotted rgb(0 0 0 / 12%);margin: 15px;border-radius: 10px;position: fixed;top: 0;right: 0;left: 0;z-index: 2002;";
              acon.appendChild(ahref);
              document.body.appendChild(acon);
          }
    });
  }
};
