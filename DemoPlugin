Below is the absolute minimum ICN plugin you can create in ~10 minutes.
No business logic, no CE calls — just plugin + widget loading successfully.
🎯 Goal (What You’ll Achieve)
✔ Plugin loads in IBM Content Navigator
✔ One widget appears in ICN Admin
✔ Widget renders a simple message
🕒 Time Split
Step
Time
Create files
3 min
Write code
5 min
Deploy & test
2 min
🧱 STEP 1: Minimum Folder Structure (3 min)
Copy code

QuickPlugin/
 ├── src/
 │   └── com.demo.icn
 │        └── QuickPlugin.java
 ├── WebContent/
 │   └── quickPlugin/
 │        ├── QuickWidget.js
 │        └── QuickWidget.html
 └── plugin.xml
⚙️ STEP 2: Plugin Java Class (2 min)
QuickPlugin.java
Copy code
Java
import com.ibm.ecm.extension.Plugin;

public class QuickPlugin extends Plugin {

    @Override
    public String getId() {
        return "QuickPlugin";
    }

    @Override
    public String getName() {
        return "Quick Plugin";
    }

    @Override
    public String getVersion() {
        return "1.0";
    }

    @Override
    public String getDojoModule() {
        return "quickPlugin";
    }
}
👉 This is the entry point. Without this, ICN won’t recognize your plugin.
🧾 STEP 3: plugin.xml (MOST IMPORTANT – 2 min)
plugin.xml
Copy code
Xml
<plugin>
  <id>QuickPlugin</id>

  <dojoModules>
    <dojoModule>quickPlugin</dojoModule>
  </dojoModules>

  <widgets>
    <widget
      id="QuickWidget"
      name="Quick Test Widget"
      module="quickPlugin/QuickWidget"
      type="feature"/>
  </widgets>
</plugin>
⚠️ If this file is wrong → widget will NOT appear.
🧩 STEP 4: Widget HTML (1 min)
QuickWidget.html
Copy code
Html
<div>
  <h3>🎉 Plugin Loaded Successfully</h3>
  <p>This is my first ICN widget.</p>
</div>
🧠 STEP 5: Widget JS (2 min)
QuickWidget.js
Copy code
Javascript
define([
  "dojo/_base/declare",
  "ecm/widget/_WidgetBase",
  "ecm/widget/_TemplatedMixin",
  "dojo/text!./QuickWidget.html"
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
      console.log("QuickWidget loaded");
    }
  });
});
This is a valid ICN Dojo widget.
🚀 STEP 6: Deploy & Verify (2 min)
Build WAR
Deploy to WebSphere
Login to ICN Admin
Go to Plugins → Add Plugin
Load your plugin
Go to Desktop → Features
Add Quick Test Widget
✅ SUCCESS CHECKLIST
✔ Plugin visible in ICN Admin
✔ Widget appears in Features
✔ Widget loads without error
✔ Console log: QuickWidget loaded
🧠 One-Line Interview Answer
A minimum ICN plugin consists of a Plugin Java class, plugin.xml, and a Dojo widget registered as a feature.