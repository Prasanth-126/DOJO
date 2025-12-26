# Dojo + Servlet + FileNet CE + Logger (Full Working Example)

This document shows a **complete end-to-end enterprise example** using:

- Dojo Widgets (UI)
- AJAX
- Java Servlet
- FileNet Content Engine (CE)
- Log4j Logging

---

## 1. Project Structure

```

Dojo-CE-App
│
├── WebContent
│   └── index.html
│
├── src
│   └── DocumentSearchServlet.java
│
├── WEB-INF
│   ├── web.xml
│   ├── lib
│   │   ├── Jace.jar
│   │   ├── filenet.jar
│   │   ├── log4j-1.2.17.jar
│   │   └── commons-logging.jar
│   └── classes
│       └── log4j.properties

````

---

## 2. Frontend – Dojo Widget UI

### `index.html`

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Dojo + Servlet + FileNet CE</title>

<link rel="stylesheet"
 href="https://ajax.googleapis.com/ajax/libs/dojo/1.16.3/dijit/themes/claro/claro.css">

<script>
var dojoConfig = {
    async: true,
    parseOnLoad: true
};
</script>

<script src="https://ajax.googleapis.com/ajax/libs/dojo/1.16.3/dojo/dojo.js"></script>
</head>

<body class="claro">

<h2>FileNet Document Search</h2>

<label>Document ID:</label><br>
<input id="docId"
 data-dojo-type="dijit/form/ValidationTextBox"
 data-dojo-props="
   required:true,
   placeHolder:'Enter Document ID',
   invalidMessage:'Document ID is required'
 ">
<br><br>

<label>Document Type:</label><br>
<select id="docType" data-dojo-type="dijit/form/Select">
  <option value="Invoice">Invoice</option>
  <option value="Agreement">Agreement</option>
  <option value="Report">Report</option>
</select>
<br><br>

<button id="searchBtn" data-dojo-type="dijit/form/Button">
  Search
</button>

<br><br>

<div id="result"
 data-dojo-type="dijit/layout/ContentPane"
 style="border:1px solid #999; padding:10px; width:420px;">
</div>

<script>
require([
  "dojo/parser",
  "dojo/on",
  "dojo/request",
  "dijit/registry",
  "dojo/domReady!"
], function(parser, on, request, registry) {

  on(registry.byId("searchBtn"), "click", function () {

    var docId = registry.byId("docId");

    if (!docId.isValid()) {
      docId.focus();
      return;
    }

    request.get("DocumentSearchServlet", {
      query: {
        documentId: docId.get("value"),
        documentType: registry.byId("docType").get("value")
      },
      handleAs: "json"
    }).then(function (res) {

      registry.byId("result").set("content",
        "<b>Result</b><br>" +
        "ID: " + res.documentId + "<br>" +
        "Title: " + res.title + "<br>" +
        "Status: " + res.status
      );

    }, function () {
      registry.byId("result").set("content", "Server Error");
    });
  });
});
</script>

</body>
</html>
````

---

## 3. Logger Configuration

### `log4j.properties`

```properties
log4j.rootLogger=INFO, FILE

log4j.appender.FILE=org.apache.log4j.RollingFileAppender
log4j.appender.FILE.File=C:/filenet/logs/dojo-ce-app.log
log4j.appender.FILE.MaxFileSize=10MB
log4j.appender.FILE.MaxBackupIndex=5

log4j.appender.FILE.layout=org.apache.log4j.PatternLayout
log4j.appender.FILE.layout.ConversionPattern=%d{yyyy-MM-dd HH:mm:ss} %-5p %c - %m%n
```

---

## 4. Backend – Servlet with CE Connection & Logger

### `DocumentSearchServlet.java`

```java
import java.io.IOException;
import java.io.PrintWriter;

import javax.security.auth.Subject;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import com.filenet.api.core.*;
import com.filenet.api.util.UserContext;

@WebServlet("/DocumentSearchServlet")
public class DocumentSearchServlet extends HttpServlet {

    private static final Logger logger =
            Logger.getLogger(DocumentSearchServlet.class);

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String docId = request.getParameter("documentId");
        logger.info("Search request received. Document ID: " + docId);

        response.setContentType("application/json");
        PrintWriter out = response.getWriter();

        try {
            logger.info("Connecting to FileNet CE...");

            Connection conn = Factory.Connection.getConnection(
              "http://filenetserver:9080/wsi/FNCEWS40MTOM");

            Subject subject = UserContext.createSubject(
              conn,
              "ceadmin",
              "password",
              "FileNetP8WSI"
            );

            UserContext.get().pushSubject(subject);
            logger.info("Authentication successful");

            Domain domain = Factory.Domain.fetchInstance(conn, null, null);
            ObjectStore os = Factory.ObjectStore.fetchInstance(domain, "OS1", null);
            logger.info("Connected to Object Store: " + os.get_Name());

            Document doc = Factory.Document.fetchInstance(os, docId, null);
            String title = doc.getProperties().getStringValue("DocumentTitle");

            logger.info("Document found: " + title);

            out.print("{");
            out.print("\"documentId\":\"" + docId + "\",");
            out.print("\"title\":\"" + title + "\",");
            out.print("\"status\":\"Document Found in FileNet CE\"");
            out.print("}");

        } catch (Exception e) {
            logger.error("Error accessing FileNet CE", e);

            out.print("{");
            out.print("\"documentId\":\"" + docId + "\",");
            out.print("\"status\":\"Error or Document Not Found\"");
            out.print("}");

        } finally {
            UserContext.get().popSubject();
            logger.info("UserContext cleared");
        }

        out.flush();
    }
}
```

---

## 5. web.xml (Optional)

```xml
<web-app>
  <servlet>
    <servlet-name>DocumentSearchServlet</servlet-name>
    <servlet-class>DocumentSearchServlet</servlet-class>
  </servlet>

  <servlet-mapping>
    <servlet-name>DocumentSearchServlet</servlet-name>
    <url-pattern>/DocumentSearchServlet</url-pattern>
  </servlet-mapping>
</web-app>
```

---

## 6. Execution Flow

1. User enters Document ID (Dojo Widget)
2. Validation happens automatically
3. AJAX request sent to Servlet
4. Servlet connects to FileNet CE
5. Document is fetched from Object Store
6. JSON response returned
7. UI updated using Dojo widget
8. Logs written using Log4j

---

## 7. Interview Summary Line

> Dojo widgets handle UI, Servlets manage business logic, FileNet CE API accesses content, and Log4j ensures enterprise-grade logging and traceability.

