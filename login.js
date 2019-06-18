$(document).ready(function() {
  let mainContent = $('main').html()
  $('main').empty()
  $('#login-button').click(() => {
    let password = $('#password').val()
    if (password === 'LHLCS') {
      setTimeout(() => {
        console.log(password)
        $('#login-form').hide()
        $('main').html(mainContent)
        load()  
      }, 1000)
    } else {
      alert("WRONG")
    }
  })
})
