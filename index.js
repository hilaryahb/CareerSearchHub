$(document).ready(function() {
  $('.application').hide()
  $('.github').hide()
  $('.interviewskills').hide()
  $('.networking').hide()
  $('.huntr').hide()
  $('.resume').hide()

$('.applications').on('click', function() {
  $('.github').hide()
  $('.interviewskills').hide()
  $('.networking').hide()
  $('.huntr').hide()
  $('.application').show()

  }
)
$('.GitHub').on('click', function() {
  $('.application').hide()
  $('.interviewskills').hide()
  $('.networking').hide()
  $('.huntr').hide()
  $('.github').show()
  }
)

$('.interviews').on('click', function() {
  $('.application').hide()
  $('.github').hide()
  $('.networking').hide()
  $('.huntr').hide()
  $('.interviewskills').show()
  }
)

$('.gohome').on('click', function() {
  location.reload();
  }
)


$('.Networking').on('click', function() {
  $('.application').hide()
  $('.github').hide()
  $('.interviewskills').hide()
  $('.huntr').hide()
  $('.networking').show()
  }
)

$('.resumeheading').on('click', function() {
  if($('#resume').css('display') !== 'none')
   $('#resume').slideUp()
   else{
     $('#resume').slideDown()
   }
   }
 )

 $('.portfoliosheading').on('click', function() {
   if($('#portfolio').css('display') !== 'none')
    $('#portfolio').slideUp()
    else{
      $('#portfolio').slideDown()
    }
    }
  )

  $('.coverletterheading').on('click', function() {
    if($('#coverletter').css('display') !== 'none')
     $('#coverletter').slideUp()
     else{
       $('#coverletter').slideDown()
     }
     }
   )

   $('.jobboardheading').on('click', function() {
     if($('#jobboard').css('display') !== 'none')
      $('#jobboard').slideUp()
      else{
        $('#jobboard').slideDown()
      }
      }
    )

    $('.prepheading').on('click', function() {
      if($('#prep').css('display') !== 'none')
       $('#prep').slideUp()
       else{
         $('#prep').slideDown()
       }
       }
     )

     $('.culturefitheading').on('click', function() {
       if($('#culturefit').css('display') !== 'none')
        $('#culturefit').slideUp()
        else{
          $('#culturefit').slideDown()
        }
        }
      )

      $('.techinterviewheading').on('click', function() {
        if($('#techinterview').css('display') !== 'none')
         $('#techinterview').slideUp()
         else{
           $('#techinterview').slideDown()
         }
         }
       )

       $('.followupheading').on('click', function() {
         if($('#followup').css('display') !== 'none')
          $('#followup').slideUp()
          else{
            $('#followup').slideDown()
          }
          }
        )

        $('.vancouver').on('click', function() {
          if($('#vancouver').css('display') !== 'none'){
           $('#vancouver').slideUp()
           $('#toronto').hide()
            $('#victoria').hide()
            $('#calgary').hide()
            $('#montreal').hide()
          }else{
             $('#vancouver').slideDown()
           }
           }
         )
         $('.toronto').on('click', function() {
           if($('#toronto').css('display') !== 'none'){
            $('#toronto').slideUp()
           $('#vancouver').hide()
            $('#victoria').hide()
            $('#calgary').hide()
            $('#montreal').hide()
           }else{
              $('#toronto').slideDown()
            }
            }
          )

          $('.victoria').on('click', function() {
            if($('#victoria').css('display') !== 'none'){
             $('#victoria').slideUp()
              $('#vancouver').hide()
            $('#toronto').hide()
            $('#calgary').hide()
            $('#montreal').hide()
            }else{
               $('#victoria').slideDown()
             }
             }
           )

           $('.calgary').on('click', function() {
             if($('#calgary').css('display') !== 'none'){
              $('#calgary').slideUp()
             $('#vancouver').hide()
            $('#toronto').hide()
            $('#victoria').hide()
            $('#montreal').hide()
             }else{
                $('#calgary').slideDown()
              }
              }
            )

            $('.montreal').on('click', function() {
              if($('#montreal').css('display') !== 'none'){
               $('#montreal').slideUp()
                $('#vancouver').hide()
            $('#toronto').hide()
            $('#victoria').hide()
            $('#calgary').hide()
              }else{
                 $('#montreal').slideDown()
               }
               }
             )

})
