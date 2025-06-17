const LesscodeTemplateHelper = {
  topBar: function(domain, marketplaceUrl) {
    var $ = jQuery;
    
    document.addEventListener('DOMContentLoaded', function() {
      if(window.location.href.indexOf(domain) > 0) {
        var topBar = $('<div/>');
        var buyHref = $(`<a href="https://bubble.io/template/${marketplaceUrl}">Buy this template</a>`);
        buyHref.attr('style', 'padding: 10px;background: #0a7cac;border-radius: 5px;color: white;display: inline-block;');

        var profileHref = $(`<a href="https://bubble.io/contributor/1685979404807x551826349360229570">About Lesscode.io</a>`);
        profileHref.attr('style', 'padding: 10px;background: #0a7cac;border-radius: 5px;color: white;display: inline-block;');
        
        topBar.attr('style', 'padding: 15px;text-align: right;display: flex;background: rgb(33 185 202 / 12%);border: 2px dotted rgb(0 0 0 / 12%);margin: 15px;border-radius: 10px;position: fixed;top: 0;right: 0;left: 0;z-index: 2002;');
        topBar.append(buyHref);
        topBar.append(profileHref);
        
        $('body').append(topBar);
      }
    });
  }
};
