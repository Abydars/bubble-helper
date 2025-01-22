const BubbleHelper = {
  applyStyles: function($element, bubble) {
    try {
      if (!$element || !$element.jquery) {
        console.error("Invalid jQuery element provided.");
        return;
      }
      
      const styles = {
        width: bubble.fit_width() ? "auto" : bubble.width() + "px",
        height: bubble.fit_height() ? "auto" : bubble.height() + "px",
        "min-width": bubble.min_width_css(),
        "max-width": bubble.max_width_css(),
        "min-height": bubble.min_height_css(),
        "max-height": bubble.max_height_css(),
        "margin-top": bubble.margin_top() + "px",
        "margin-bottom": bubble.margin_bottom() + "px",
        "margin-left": bubble.margin_left() + "px",
        "margin-right": bubble.margin_right() + "px",
        "background": bubble.background_style() === "gradient"
        ? `linear-gradient(${bubble.background_gradient_direction()}, ${bubble.background_gradient_from()}, ${bubble.background_gradient_to()})`
        : bubble.background_image() || bubble.bgcolor(),
        "border": bubble.four_border_style()
        ? `${bubble.border_width()}px ${bubble.border_style()} ${bubble.border_color()}`
        : "none",
        "border-radius": bubble.four_border_style() ? bubble.border_roundness() + "px" : "0",
        "padding-top": bubble.padding_vertical() + "px",
        "padding-bottom": bubble.padding_vertical() + "px",
        "padding-left": bubble.padding_horizontal() + "px",
        "padding-right": bubble.padding_horizontal() + "px",
        "box-shadow": bubble.boxshadow_style() !== "none"
        ? `${bubble.boxshadow_horizontal()}px ${bubble.boxshadow_vertical()}px ${bubble.boxshadow_blur()}px ${bubble.boxshadow_spread()}px ${bubble.boxshadow_color()}`
        : "none",
        "font-size": bubble.font_size() + "px",
        "text-align": bubble.font_alignment(),
        "font-weight": bubble.bold() ? "bold" : "normal",
        "font-style": bubble.italic() ? "italic" : "normal",
        "text-decoration": bubble.underline() ? "underline" : "none",
        "color": bubble.font_color(),
        "font-family": bubble.font_face(),
        "display": bubble.is_visible() ? "block" : "none",
      };
      
      $element.css(styles);
    } catch(e) {
      console.error(e);
    }
  }
}
