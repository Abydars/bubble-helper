const LesscodeTemplateHelper = {
  topBar: function(domain, marketplaceUrl) {
    var $ = jQuery;
    
    document.addEventListener('DOMContentLoaded', function() {
      if(window.location.href.indexOf(domain) > 0) {
        var topBar = $('<div/>');
        var btnStyles = 'padding: 10px;background: #0a7cac;border-radius: 5px;color: white;display: inline-block;';

        var closeBtn = $(`<a href="#">Close</a>`);
        closeBtn.attr('style', btnStyles);
        closeBtn.on('click', function(e) {
          e.preventDefault();
          topBar.fadeOut();
        });
        
        var buyHref = $(`<a target="_blank" href="https://bubble.io/template/${marketplaceUrl}">Buy this template</a>`);
        buyHref.attr('style', btnStyles);

        var profileHref = $(`<a target="_blank" href="https://bubble.io/agency/lesscodeio">About Lesscode.io</a>`);
        profileHref.attr('style', btnStyles);
        
        topBar.attr('style', 'gap: 10px; padding: 15px;text-align: right;display: flex;background: rgb(33 185 202 / 12%);border: 2px dotted rgb(0 0 0 / 12%);margin: 15px;border-radius: 10px;position: fixed;top: 0;right: 0;left: 0;z-index: 2002;');
        
        topBar.append(closeBtn);
        topBar.append(buyHref);
        topBar.append(profileHref);
        
        $('body').append(topBar);
      }
    });
  }
};
