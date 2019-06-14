$(document).ready(function() {
  let mainContent = $('main').html()
  $('main').empty()
  $('#login-button').click(() => {
    let password = $('#password').val()
    if (password === 'LHL2019') {
      setTimeout(() => {
        console.log(password)
        $('#login-form').hide()
        $('main').html(mainContent)
        load()
      }, 500)
    } else {
      alert("Incorrect Password")
    }
  })
})
