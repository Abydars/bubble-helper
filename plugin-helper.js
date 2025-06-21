if(!BubbleHelper) {
  const BubbleHelper = {
    replacePlaceholders: function(str, properties) {
      return str.replaceAll(/%([\w_]+)%/g, (match, key) => {
        // If the key exists in properties, replace it; otherwise, keep the original placeholder.
        return key in properties ? properties[key] : match;
      });
    },
    applyStyles: function($element, bubble) {
      try {
        if (!$element || !$element.jquery) {
          console.error("Invalid jQuery element provided.");
          return;
        }
        
        const styles = {};
        
        if (typeof bubble.fit_width === "function" && typeof bubble.width === "function") {
          styles.width = bubble.fit_width() ? "auto" : bubble.width() + "px";
        }
        
        if (typeof bubble.fit_height === "function" && typeof bubble.height === "function") {
          styles.height = bubble.fit_height() ? "auto" : bubble.height() + "px";
        }
        
        if (typeof bubble.min_width_css === "function") {
          styles["min-width"] = bubble.min_width_css();
        }
        
        if (typeof bubble.max_width_css === "function") {
          styles["max-width"] = bubble.max_width_css();
        }
        
        if (typeof bubble.min_height_css === "function") {
          styles["min-height"] = bubble.min_height_css();
        }
        
        if (typeof bubble.max_height_css === "function") {
          styles["max-height"] = bubble.max_height_css();
        }
        
        if (typeof bubble.margin_top === "function") {
          styles["margin-top"] = bubble.margin_top() + "px";
        }
        
        if (typeof bubble.margin_bottom === "function") {
          styles["margin-bottom"] = bubble.margin_bottom() + "px";
        }
        
        if (typeof bubble.margin_left === "function") {
          styles["margin-left"] = bubble.margin_left() + "px";
        }
        
        if (typeof bubble.margin_right === "function") {
          styles["margin-right"] = bubble.margin_right() + "px";
        }
        
        if (typeof bubble.background_style === "function") {
          let bg;
          if (
            bubble.background_style() === "gradient" &&
            typeof bubble.background_gradient_direction === "function" &&
            typeof bubble.background_gradient_from === "function" &&
            typeof bubble.background_gradient_to === "function"
          ) {
            bg = `linear-gradient(${bubble.background_gradient_direction()}, ${bubble.background_gradient_from()}, ${bubble.background_gradient_to()})`;
          } else if (typeof bubble.background_image === "function" && bubble.background_image()) {
            bg = bubble.background_image();
          } else if (typeof bubble.bgcolor === "function") {
            bg = bubble.bgcolor();
          }
          if (bg !== undefined) {
            styles.background = bg;
          }
        }
        
        if (typeof bubble.four_border_style === "function") {
          if (bubble.four_border_style()) {
            if (
              typeof bubble.border_width === "function" &&
              typeof bubble.border_style === "function" &&
              typeof bubble.border_color === "function"
            ) {
              styles.border = `${bubble.border_width()}px ${bubble.border_style()} ${bubble.border_color()}`;
            }
            if (typeof bubble.border_roundness === "function") {
              styles["border-radius"] = bubble.border_roundness() + "px";
            }
          } else {
            styles.border = "none";
            styles["border-radius"] = "0";
          }
        }
        
        if (typeof bubble.padding_vertical === "function") {
          const paddingVertical = bubble.padding_vertical();
          styles["padding-top"] = paddingVertical + "px";
          styles["padding-bottom"] = paddingVertical + "px";
        }
        
        if (typeof bubble.padding_horizontal === "function") {
          const paddingHorizontal = bubble.padding_horizontal();
          styles["padding-left"] = paddingHorizontal + "px";
          styles["padding-right"] = paddingHorizontal + "px";
        }
        
        if (typeof bubble.boxshadow_style === "function") {
          if (
            bubble.boxshadow_style() !== "none" &&
            typeof bubble.boxshadow_horizontal === "function" &&
            typeof bubble.boxshadow_vertical === "function" &&
            typeof bubble.boxshadow_blur === "function" &&
            typeof bubble.boxshadow_spread === "function" &&
            typeof bubble.boxshadow_color === "function"
          ) {
            styles["box-shadow"] = `${bubble.boxshadow_horizontal()}px ${bubble.boxshadow_vertical()}px ${bubble.boxshadow_blur()}px ${bubble.boxshadow_spread()}px ${bubble.boxshadow_color()}`;
          } else {
            styles["box-shadow"] = "none";
          }
        }
        
        if (typeof bubble.font_size === "function") {
          styles["font-size"] = bubble.font_size() + "px";
        }
        
        if (typeof bubble.font_alignment === "function") {
          styles["text-align"] = bubble.font_alignment();
        }
        
        if (typeof bubble.bold === "function") {
          styles["font-weight"] = bubble.bold() ? "bold" : "normal";
        }
        
        if (typeof bubble.italic === "function") {
          styles["font-style"] = bubble.italic() ? "italic" : "normal";
        }
        
        if (typeof bubble.underline === "function") {
          styles["text-decoration"] = bubble.underline() ? "underline" : "none";
        }
        
        if (typeof bubble.font_color === "function") {
          styles["color"] = bubble.font_color();
        }
        
        if (typeof bubble.font_face === "function") {
          styles["font-family"] = bubble.font_face();
        }
        
        if (typeof bubble.is_visible === "function") {
          styles.display = bubble.is_visible() ? "block" : "none";
        }
        
        $element.css(styles);
      } catch(e) {
        console.error(e);
      }
    }
  };
}
