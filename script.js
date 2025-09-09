
onEvent("button1", "click", function() {
  console.log("buttonclicked");
  setProperty("button1", "color", "pink");
  setText("label1", "Monday");
});

onEvent("button2", "mouseover",function() { 
    console.log ("buttonMousedOver");
    setProperty ("button2", "color", "teal");
    setText("label1", "Tuesday");
});

