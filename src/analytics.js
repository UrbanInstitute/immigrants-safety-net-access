/**
 * refers to the entire viz component this project fuels
 */
let dataviz_title = "";

/**
 * sends event data to GTM and GA. call in event handlers for each event type you wish to track.
 * @param {Node} target the div experiencing this click, which is accessed differently depending on the handler's event structure
 * @param {String} data a string in the format "what's_happening--click_specifics" where "what's_happening is the type of click, such as "map_click" or "dropdown_select" and "click_specifics" refers to the selected option, region, or specific function.
 */
export let logClickToGA = (target, data) => {
  gtag("event", "dataviz_click", {
    dataviz_title: dataviz_title,
    dataviz_target: target,
    dataviz_detail: data,
  });
};

/**
 * sets the unique analytics title for the project. call this onload.
 * @param {String} title the unique analytics slug for this project.
 */
export let setDatavizTitle = (title) => {
  dataviz_title = title;
};
