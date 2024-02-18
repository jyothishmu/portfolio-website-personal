    const scriptURL = "https://script.google.com/macros/s/AKfycbzmysn9M3eskiCZ5TnRchzqqxjiaa5SC8nU9OkvV96EbnnCvpTmEB-qdfD6_FB11hUKbg/exec"

    const form = document.forms['contact-form']

    form.addEventListener('submit', e =>{
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(responce => alert("Thanks"))
      .then(() => { window.location.reload(); })
      .catch(error => console.error('Error!', error.message))
    })