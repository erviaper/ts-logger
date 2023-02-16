# ts-logger
## Installation Instructions

- Add script library

```

  <script src="https://static.zdassets.com/zendesk_app_framework_sdk/2.0/zaf_sdk.min.js"></script>

```

- Init: Instantiate a TSLogger object, using the static values for your installation:

```

  let myLogger = new TSLogger({
    "app_name": 'My Test App',
    "subdomain": 'z3n-mysubdomain',
    "agent_email": "superhero@zendesk.com"
  });

```

- Usage - Populate default Log Attributes "LA1-LA5" with any desired Sheet column values, then call the logEvent method.
  The intention is that LA1 would be at the top of a hierarchy of possible events levels for your app, and hopefully allow some 
  reporting across dissimilar apps. But you can define any custom column names and values. Eg:

```
myLogger.logEvent({"LA1":"Install", "LA2":"sub-module A", "LA3": "Code red!", "LA5": "?"});

```
- Use the TSLogger Sidebar app for Google Sheets to acquire log data, and create reports
