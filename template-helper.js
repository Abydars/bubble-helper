var LesscodeTemplateHelper = {
  debug: 0,
  api: "https://marketplace-api.lesscode.io/api",
  demos: {
    "ai-agent-healthcare": {
      "marketplace": "ai-agent---healthcare-1750392833583x432150744419794940"
    },
    "lctrainedagent": {
      "marketplace": "ai-agent---job-proposal-writer-1750132027129x247139300384440320"
    },
    "simple-chat-template": {
      "marketplace": "chatgpt-assistants-1741032755257x977731786733518800"
    },
    "lesscode-lp-real-estate": {
      "marketplace": "real-estate-expert---lp-1741979940239x275241382038732800"
    },
    "brellions": {
      "marketplace": "lucky-draw-multiple-signs-1748868878278x471030439192035300"
    },
    "abid-39518": {
      "marketplace": ""
    },
    "email-marketing-template": {
      "marketplace": "email-marketing-template-1749691927375x521395502640529400"
    }
  },
  currentDemo: null,
  currentDemoKey: null,
  elementsTimeout: (0.1 * 60 * 1000),
  init: function() {
    var href = window.location.href;
    Object.entries(this.demos).map(([k,v]) => {
      if(href.indexOf(k) > 0) {
        this.currentDemoKey = k;
        this.currentDemo = v;
      }
    });

    if(this.currentDemo || this.debug == 1) {
      this.submitVisit();
      
      // document.addEventListener('DOMContentLoaded', () => {
        this.showTopBar();
        this.showFeedbackPopup();
      // });
    }
  },
  topBar: function() {
    var $ = jQuery;
    
    const marketplaceUrl = this.currentDemo?.marketplace || "";
    var topBar = $('<div/>');
    //var btnStyles = 'padding: 10px 20px;background: none;border-radius: 30px;color: #0a7cac;font-size: 14px;display: inline-block;font-weight: 600;border: 1px solid #0a7cac;text-decoration: none !important;';
    var btnStyles = 'padding: 10px 20px;background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);border-radius: 30px;color: white;font-size: 14px;display: inline-block;font-weight: 600;border: none;text-decoration: none !important;box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);transition: all 0.3s ease;';

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
    
    // Add feedback button with modern background
    var feedbackBtn = $(`<a href="#">Submit Feedback</a>`);
    feedbackBtn.attr('style', btnStyles);
    feedbackBtn.on('click', function(e) {
      e.preventDefault();
      this.createFeedbackPopup();
    }.bind(this));
    
    topBar.attr('style', 'gap: 10px;padding: 15px;justify-content: end;display: flex;background: rgba(33, 185, 202, 0.12);border: 2px dotted rgba(0, 0, 0, 0.12);margin: 15px;border-radius: 10px;position: static;top: 0px;right: 0px;left: 0px;z-index: 2002;');
    
    topBar.append(buyHref);
    topBar.append(profileHref);
    topBar.append(feedbackBtn);
    topBar.append(closeBtn);
    topBar.hide();
    
    $('body').prepend(topBar);

    topBar.find('a').on('mouseenter', function() {
      $(this).attr('style', btnStyles + 'transform: translateY(-2px);box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);');
    });
    topBar.find('a').on('mouseleave', function() {
      $(this).attr('style', btnStyles);
    });

    topBar.slideDown();
  },
  submitVisit: function() {
    fetch(`${this.api}/create_visit`, {
      method: 'POST',
      body: JSON.stringify({
        'type': this.currentDemoKey
      })
    });
  },
  showTopBar: function() {
    setTimeout(() => {
      this.topBar();
    }, this.elementsTimeout);
  },
  showFeedbackPopup: function() {
    setTimeout(() => {
      this.createFeedbackPopup();
    }, this.elementsTimeout);
  },
  createFeedbackPopup: function() {
    var $ = jQuery;
    
    if($('#lesscode-feedback-popup').length > 0) 
      $('#lesscode-feedback-popup').remove();

    // Create modern feedback popup overlay with backdrop blur
    var overlay = $('<div id="lesscode-feedback-popup"/>');
    overlay.attr('style', 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.6); backdrop-filter: blur(8px); z-index: 9999; display: flex; justify-content: center; align-items: center; animation: fadeIn 0.3s ease;');
    
    // Create modern feedback form container
    var popup = $('<div/>');
    popup.attr('style', 'background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%); padding: 40px; border-radius: 20px; max-width: 450px; width: 90%; box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15); border: 1px solid rgba(255, 255, 255, 0.2); animation: slideUp 0.3s ease;');
    
    // Modern form title with icon
    var title = $('<div><span style="font-size: 24px; margin-right: 10px;">💬</span><h3 style="display: inline; margin: 0; color: #1a202c; font-size: 24px; font-weight: 700;">We\'d love your feedback!</h3></div>');
    title.attr('style', 'margin: 0 0 30px 0; text-align: center;');
    
    var subtitle = $('<p>Help us improve this template by sharing your thoughts</p>');
    subtitle.attr('style', 'margin: 0 0 25px 0; color: #64748b; text-align: center; font-size: 16px;');
    
    // Create form
    var form = $('<form/>');
    
    // Modern email input with floating label effect
    var emailContainer = $('<div/>');
    emailContainer.attr('style', 'position: relative; margin-bottom: 20px;');
    var emailInput = $('<input type="email" name="email" required placeholder=" "/>');
    emailInput.attr('style', 'width: 100%; padding: 16px 16px 16px 16px; border: 2px solid #e2e8f0; border-radius: 12px; box-sizing: border-box; font-size: 16px; transition: all 0.3s ease; background: #ffffff;');
    var emailLabel = $('<label>Email Address</label>');
    emailLabel.attr('style', 'position: absolute; left: 16px; top: 16px; color: #64748b; font-size: 16px; pointer-events: none; transition: all 0.3s ease; background: white; padding: 0 4px;');
    
    emailInput.on('focus blur', function() {
      var hasValue = $(this).val().length > 0;
      var isFocused = $(this).is(':focus');
      if (hasValue || isFocused) {
        emailLabel.attr('style', 'position: absolute; left: 12px; top: -8px; color: #667eea; font-size: 12px; pointer-events: none; transition: all 0.3s ease; background: white; padding: 0 4px; font-weight: 600;');
        $(this).attr('style', 'width: 100%; padding: 16px 16px 16px 16px; border: 2px solid #667eea; border-radius: 12px; box-sizing: border-box; font-size: 16px; transition: all 0.3s ease; background: #ffffff; outline: none;');
      } else {
        emailLabel.attr('style', 'position: absolute; left: 16px; top: 16px; color: #64748b; font-size: 16px; pointer-events: none; transition: all 0.3s ease; background: white; padding: 0 4px;');
        $(this).attr('style', 'width: 100%; padding: 16px 16px 16px 16px; border: 2px solid #e2e8f0; border-radius: 12px; box-sizing: border-box; font-size: 16px; transition: all 0.3s ease; background: #ffffff;');
      }
    });
    
    emailContainer.append(emailInput);
    emailContainer.append(emailLabel);
    
    // Modern feedback textarea with floating label
    var feedbackContainer = $('<div/>');
    feedbackContainer.attr('style', 'position: relative; margin-bottom: 30px;');
    var feedbackTextarea = $('<textarea name="feedback" rows="4" required placeholder=" "></textarea>');
    feedbackTextarea.attr('style', 'width: 100%; padding: 16px; border: 2px solid #e2e8f0; border-radius: 12px; box-sizing: border-box; resize: vertical; font-size: 16px; font-family: inherit; transition: all 0.3s ease; background: #ffffff; min-height: 120px;');
    var feedbackLabel = $('<label>Your Feedback</label>');
    feedbackLabel.attr('style', 'position: absolute; left: 16px; top: 16px; color: #64748b; font-size: 16px; pointer-events: none; transition: all 0.3s ease; background: white; padding: 0 4px;');
    
    feedbackTextarea.on('focus blur', function() {
      var hasValue = $(this).val().length > 0;
      var isFocused = $(this).is(':focus');
      if (hasValue || isFocused) {
        feedbackLabel.attr('style', 'position: absolute; left: 12px; top: -8px; color: #667eea; font-size: 12px; pointer-events: none; transition: all 0.3s ease; background: white; padding: 0 4px; font-weight: 600;');
        $(this).attr('style', 'width: 100%; padding: 16px; border: 2px solid #667eea; border-radius: 12px; box-sizing: border-box; resize: vertical; font-size: 16px; font-family: inherit; transition: all 0.3s ease; background: #ffffff; min-height: 120px; outline: none;');
      } else {
        feedbackLabel.attr('style', 'position: absolute; left: 16px; top: 16px; color: #64748b; font-size: 16px; pointer-events: none; transition: all 0.3s ease; background: white; padding: 0 4px;');
        $(this).attr('style', 'width: 100%; padding: 16px; border: 2px solid #e2e8f0; border-radius: 12px; box-sizing: border-box; resize: vertical; font-size: 16px; font-family: inherit; transition: all 0.3s ease; background: #ffffff; min-height: 120px;');
      }
    });
    
    feedbackContainer.append(feedbackTextarea);
    feedbackContainer.append(feedbackLabel);
    
    // Modern buttons container
    var buttonContainer = $('<div/>');
    buttonContainer.attr('style', 'display: flex; gap: 12px; justify-content: flex-end;');
    
    // Modern submit button with gradient
    var submitBtn = $('<button type="submit"><span style="margin-right: 8px;">✨</span>Send Feedback</button>');
    var submitBtnStyles = 'padding: 14px 28px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; border-radius: 12px; cursor: pointer; font-weight: 600; font-size: 16px; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);';
    submitBtn.attr('style', submitBtnStyles);
    
    submitBtn.on('mouseenter', function() {
      $(this).attr('style', submitBtnStyles + 'transform: translateY(-2px); box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);');
    });
    submitBtn.on('mouseleave', function() {
      $(this).attr('style', submitBtnStyles);
    });
    
    // Modern close button
    var closeBtn = $('<button type="button">Cancel</button>');
    var closeBtnStyles = 'padding: 14px 28px; background: #f1f5f9; color: #475569; border: none; border-radius: 12px; cursor: pointer; font-weight: 600; font-size: 16px; transition: all 0.3s ease;';
    closeBtn.attr('style', closeBtnStyles);
    
    closeBtn.on('mouseenter', function() {
      $(this).attr('style', closeBtnStyles + 'background: #e2e8f0;');
    });
    closeBtn.on('mouseleave', function() {
      $(this).attr('style', closeBtnStyles);
    });
    
    // Assemble form
    form.append(emailContainer);
    form.append(feedbackContainer);
    buttonContainer.append(closeBtn);
    buttonContainer.append(submitBtn);
    form.append(buttonContainer);
    
    popup.append(title);
    popup.append(subtitle);
    popup.append(form);
    overlay.append(popup);
    
    // Add CSS animations
    var style = $('<style>@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } } @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }</style>');
    $('head').append(style);
    
    // Event handlers
    closeBtn.on('click', function() {
      overlay.css('animation', 'fadeOut 0.3s ease');
      setTimeout(() => overlay.remove(), 300);
    });
    
    overlay.on('click', function(e) {
      if (e.target === overlay[0]) {
        overlay.css('animation', 'fadeOut 0.3s ease');
        setTimeout(() => overlay.remove(), 300);
      }
    });
    
    submitBtn.on('click', function(e) {
      e.preventDefault();
      
      // Add loading state
      submitBtn.attr('style', submitBtnStyles + 'opacity: 0.7; cursor: not-allowed;');
      submitBtn.html('<span style="margin-right: 8px;">⏳</span>Sending...');
      
      var formData = {
        email: emailInput.val(),
        feedback: feedbackTextarea.val(),
        visit_url: window.location.href,
        type: this.currentDemoKey
      };
      
      // Submit to feedback endpoint
      fetch('https://marketplace-api.lesscode.io/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => {
        if (response.ok) {
          // Show modern success message
          popup.html('<div style="text-align: center; padding: 20px;"><div style="font-size: 48px; margin-bottom: 20px;">🎉</div><h3 style="color: #059669; margin-bottom: 15px; font-size: 24px; font-weight: 700;">Thank you!</h3><p style="margin-bottom: 25px; color: #64748b; font-size: 16px;">Your feedback has been submitted successfully. We appreciate your input!</p><button type="button" style="padding: 14px 28px; background: linear-gradient(135deg, #059669 0%, #047857 100%); color: white; border: none; border-radius: 12px; cursor: pointer; font-weight: 600; font-size: 16px; transition: all 0.3s ease;">Close</button></div>');
          popup.find('button').on('click', function() {
            overlay.css('animation', 'fadeOut 0.3s ease');
            setTimeout(() => overlay.remove(), 300);
          });
        } else {
          submitBtn.attr('style', submitBtnStyles);
          submitBtn.html('<span style="margin-right: 8px;">✨</span>Send Feedback');
          alert('There was an error submitting your feedback. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        submitBtn.attr('style', submitBtnStyles);
        submitBtn.html('<span style="margin-right: 8px;">✨</span>Send Feedback');
        alert('There was an error submitting your feedback. Please try again.');
      });
    });
    
    // Add to page
    $('body').append(overlay);
  },
};

LesscodeTemplateHelper.init();