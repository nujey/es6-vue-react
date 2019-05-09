fetch(url).then(Response => {
  if (Response.of) {
    Response.json()
  }
}).then(data => {
  // ...
}).catch(err => {
  // ... 
})
