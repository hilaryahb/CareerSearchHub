function load() {
 $('.application').hide()
  $('.github').hide()
  $('.interviewskills').hide()
  $('.networking').hide()
    $('.strategy').hide()
  $('.resume').hide()
  $('.boards').hide()

$('.applications').on('click', function() {
  $('.github').hide()
  $('.interviewskills').hide()
  $('.networking').hide()
  $('.strategy').hide()
  $('.application').slideDown()
  $('.boards').hide()
  }
)

$('.JobBoards').on('click', function() {
  $('.github').hide()
  $('.interviewskills').hide()
  $('.networking').hide()
    $('.strategy').hide()
  $('.boards').slideDown()
  $('.application').hide()
  }
)
$('.GitHub').on('click', function() {
  $('.application').hide()
  $('.interviewskills').hide()
  $('.networking').hide()
    $('.strategy').hide()
  $('.github').slideDown()
  $('.boards').hide()
  }
)

$('.interviews').on('click', function() {
  $('.application').hide()
  $('.github').hide()
  $('.networking').hide()
    $('.strategy').hide()
  $('.interviewskills').slideDown()
  $('.boards').hide()
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
  $('.strategy').hide()
  $('.networking').slideDown()
  $('.boards').hide()
  }
)

$('.Strategy').on('click', function() {
  $('.application').hide()
  $('.github').hide()
  $('.interviewskills').hide()
  $('.strategy').slideDown()
  $('.networking').hide()
  $('.boards').hide()
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
          if($('#vancouver').css('display') !== 'none')
           $('#vancouver').slideUp()
           else{
             $('#vancouver').slideDown()
             $('#toronto').hide()
             $('#victoria').hide()
             $('#calgary').hide()
             $('#montreal').hide()
           }
           }
         )
         $('.toronto').on('click', function() {
           if($('#toronto').css('display') !== 'none')
            $('#toronto').slideUp()
            else{
              $('#toronto').slideDown()
              $('#vancouver').hide()
              $('#victoria').hide()
              $('#calgary').hide()
              $('#montreal').hide()
            }
            }
          )

          $('.victoria').on('click', function() {
            if($('#victoria').css('display') !== 'none')
             $('#victoria').slideUp()
             else{
               $('#victoria').slideDown()
               $('#vancouver').hide()
               $('#toronto').hide()
               $('#calgary').hide()
               $('#montreal').hide()
             }
             }
           )

           $('.calgary').on('click', function() {
             if($('#calgary').css('display') !== 'none')
              $('#calgary').slideUp()
              else{
                $('#calgary').slideDown()
                $('#vancouver').hide()
                $('#toronto').hide()
                $('#victoria').hide()
                $('#montreal').hide()
              }
              }
            )

            $('.montreal').on('click', function() {
              if($('#montreal').css('display') !== 'none')
               $('#montreal').slideUp()
               else{
                 $('#montreal').slideDown()
                 $('#vancouver').hide()
                 $('#toronto').hide()
                 $('#victoria').hide()
                 $('#calgary').hide()
               }
               }
             )

}
