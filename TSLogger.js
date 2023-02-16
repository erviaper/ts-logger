class TSLogger {
  constructor(data) {
    this.app_name = data.app_name;
    this.subdomain = data.subdomain;
    this.agent_email = data.agent_email;
  }
  logEvent(loggingAttributes) {
    for (let [key, value] of Object.entries(loggingAttributes)) {
      this[key] = loggingAttributes[key];
    }
    this.timestamp = new Date().toISOString();
    var requestOptions = {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this),
      redirect: 'follow'
    };
    fetch('https://4fmlaiap4e.execute-api.us-east-1.amazonaws.com/prod/log', requestOptions)
      .then(response => response.text())
      .then(result => console.log('result', result))
      .catch(error => console.log('error', error));
  }
}
