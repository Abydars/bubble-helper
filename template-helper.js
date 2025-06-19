const LesscodeTemplateHelper = {
  api: "https://marketplace-api.lesscode.io/api",
  demos: {
    "lctrainedagent": {
      "marketplace": ""
    },
    "simple-chat-template": {
      "marketplace": "https://bubble.io/template/chatgpt-assistants-1741032755257x977731786733518800"
    },
    "lesscode-lp-real-estate": {
      "marketplace": "https://bubble.io/template/real-estate-expert---lp-1741979940239x275241382038732800"
    },
    "brellions": {
      "marketplace": "https://bubble.io/template/lucky-draw-multiple-signs-1748868878278x471030439192035300"
    },
    "abid-39518": {
      "marketplace": ""
    },
    "email-marketing-template": {
      "marketplace": "https://bubble.io/template/email-marketing-template-1749691927375x521395502640529400"
    }
  },
  currentDemo: null,
  currentDemoKey: null,
  init: function() {
    var href = window.location.href;
    Object.entries(this.demos).map(([k,v]) => {
      if(href.indexOf(k) > 0) {
        this.currentDemoKey = k;
        this.currentDemo = v;
      }
    });

    if(this.currentDemo) {
      this.submitVisit();
      
      document.addEventListener('DOMContentLoaded', () => {
        this.topBar();
      });
    }
  },
  topBar: function() {
    var $ = jQuery;
    
    const marketplaceUrl = this.currentDemo.marketplace;
    var topBar = $('<div/>');
    var btnStyles = 'padding: 10px 20px;background: none;border-radius: 30px;color: #0a7cac;font-size: 14px;display: inline-block;font-weight: 600;border: 1px solid #0a7cac;text-decoration: none !important;';

    var closeBtn = $(`<a href="#">Close</a>`);
    closeBtn.attr('style', btnStyles);
    closeBtn.on('click', function(e) {
      e.preventDefault();
      topBar.slideUp();
    });
    
    var buyHref = $(`<a target="_blank" href="https://bubble.io/template/${marketplaceUrl}">Buy this template</a>`);
    buyHref.attr('style', btnStyles);

    var profileHref = $(`<a target="_blank" href="https://bubble.io/agency/lesscodeio">About Lesscode.io</a>`);
    profileHref.attr('style', btnStyles);
    
    topBar.attr('style', 'gap: 10px;padding: 15px;justify-content: end;display: flex;background: rgba(33, 185, 202, 0.12);border: 2px dotted rgba(0, 0, 0, 0.12);margin: 15px;border-radius: 10px;position: static;top: 0px;right: 0px;left: 0px;z-index: 2002;');
    
    topBar.append(buyHref);
    topBar.append(profileHref);
    topBar.append(closeBtn);
    topBar.hide();
    
    $('body').append(topBar);

    setTimeout(function() {
      topBar.slideDown();
    }, 3000);
  },
  submitVisit: function() {
    fetch(`${this.api}/create_visit`, {
      method: 'POST',
      body: JSON.stringify({
        'type': this.currentDemoKey
      })
    });
  }
};

LesscodeTemplateHelper.init();
