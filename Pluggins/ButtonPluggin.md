Here is the minimum widget with a Button added — nothing extra, just what you need 👍
(Continuation of the 10-minute minimum plugin.)
🎯 Goal
✔ Widget loads in ICN
✔ Button is visible
✔ Button click works (alert + console log)
🧩 STEP 1: Update Widget HTML (Add Button)
QuickWidget.html
Copy code
Html
<div>
  <h3>My First ICN Widget</h3>

  <button
    data-dojo-type="dijit/form/Button"
    data-dojo-attach-event="onClick:onClickButton">
    Click Me
  </button>
</div>
🧠 STEP 2: Update Widget JavaScript (Button Logic)
QuickWidget.js
Copy code
Javascript
define([
  "dojo/_base/declare",
  "ecm/widget/_WidgetBase",
  "ecm/widget/_TemplatedMixin",
  "dojo/text!./QuickWidget.html",
  "dijit/form/Button"
], function (
  declare,
  _WidgetBase,
  _TemplatedMixin,
  template
) {

  return declare("quickPlugin.QuickWidget",
    [_WidgetBase, _TemplatedMixin], {

    templateString: template,

    postCreate: function () {
      this.inherited(arguments);
      console.log("Widget loaded successfully");
    },

    onClickButton: function () {
      alert("Button clicked!");
      console.log("Button clicked inside ICN widget");
    }
  });
});
✅ What Just Happened
Button is created using Dojo Dijit
data-dojo-attach-event binds click to function
Function executes inside ICN safely
🧪 How to Test
Deploy plugin
Add widget to ICN Desktop
Open Desktop
Click Click Me button
✔ Alert appears
✔ Console log prints message
🧠 Interview One-Liner
A button in an ICN widget is created using Dijit and handled through Dojo attach events inside a plugin-based widget.