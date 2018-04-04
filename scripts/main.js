(function() {
  var mBubble = document.createDocumentFragment();
  var pBubble = document.createDocumentFragment();
  
  var toggleMenu = function (event) {
    //runs on "toggler" click event

    if (slideMenu.style.display == 'inline-block') {
        console.log(event.target.parentNode.parentNode.id);
        

        if (event.target.parentNode.parentNode.id == 'closeMenu') {
          hidesEverything();
        }

        slideMenu.style.animationName = 'slideout';
        window.setTimeout(function () {
          // wait for the transition to finish
           slideMenu.style.display= 'none';
        }, 500);
      }
      else {
        slideMenu.style.animationName = 'slidein';
        slideMenu.style.display = 'inline-block';
      }
    };
    
    var unhideName = function () {
      var name = document.getElementById('defaultNav').getElementsByTagName('p')[0];
      
      if (window.scrollY > 400) {
        name.style.display = 'inline-block';
      } else {
        name.style.display = 'none';
      }

    };

    var createMailBubble = function () {
      var name = 'camila';
      var lastName = 'paschini';
      var domain = 'gmail.com';
      
      var place = document.getElementById('mailBubble');
      
      var title = document.createElement('h2');
      title.innerHTML = 'Mail me:'
      
      var p = document.createElement('p');
      p.innerHTML = '<a href="mailto:'+name+'.'+lastName+'@'+domain+'">'
        +name+'.'+lastName+'@'+domain+'</a>';

      mBubble.appendChild(title);
      mBubble.appendChild(p);
      
      place.style.display = 'none';
      place.innerHTML = '';
      place.appendChild(mBubble);
    };

    var createPhoneBubble = function () {
      var name = 'camila';
      var lastName = 'paschini';
      var domain = 'gmail.com';
      
      var place = document.getElementById('phoneBubble');
      
      var title = document.createElement('h2');
      title.innerHTML = 'Call/SMS me:'
      
      var p = document.createElement('p');
      p.innerHTML = '73-052-21-77';

      pBubble.appendChild(title);
      pBubble.appendChild(p);
      
      place.style.display = 'none';
      place.innerHTML = '';
      place.appendChild(pBubble);
    };

    var toggleMailBubble = function () {
      var place = document.getElementById('mailBubble');
      var phantom = document.getElementById('phoneBubble');
      
      if (place.style.display == 'none') {
        phantom.style.display = 'none';
        place.style.animationName = 'bubblein';
        place.style.display = 'inline-block';
      } else {
        place.style.animationName = 'bubbleout';
        window.setTimeout(function () {
          // wait for the transition to finish
           place.style.display= 'none';
          }, 500);
      }
    };

    var togglePhoneBubble = function () {
      var place = document.getElementById('phoneBubble');
      var phantom = document.getElementById('mailBubble');

      if (place.style.display == 'none') {
        phantom.style.display = 'none';
        place.style.animationName = 'bubblein';
        place.style.display = 'inline-block';
      } else {
        place.style.animationName = 'bubbleout';
        window.setTimeout(function () {
          // wait for the transition to finish
           place.style.display= 'none';
          }, 500);
      }
    };

    var hidesEverything = function () {
      var phoneBubble = document.getElementById('phoneBubble');
      var slideMenu = document.getElementById('slideMenu');

      if (mailBubble.style.display == 'inline-block') {
        mailBubble.style.animationName = 'bubbleout';
        window.setTimeout(function () {
          // wait for the transition to finish
           mailBubble.style.display= 'none';
          }, 500);
      }

      if (phoneBubble.style.display == 'inline-block') {
        phoneBubble.style.animationName = 'bubbleout';
        window.setTimeout(function () {
          // wait for the transition to finish
           phoneBubble.style.display= 'none';
          }, 500);
      }

      if (slideMenu.style.display == 'inline-block') {
        slideMenu.style.animationName = 'slideout';
        window.setTimeout(function () {
          // wait for the transition to finish
           slideMenu.style.display= 'none';
        }, 500);
      } 
    };

    var handlesClick = function (event) {
      if (event.target.tagName !== 'svg' && event.target.tagName !== 'path') {
        hidesEverything();
      }
      
    };
  
  
  var initialize = function() {
    var toggler = document.getElementsByClassName('toggler');
    var slideMenu = document.getElementById('slideMenu');
    var defaultNav = document.getElementById('defaultNav');

    for ( i=0; i<toggler.length; i++) {
      //adds click listeners to all menu togglers
      toggler[i].addEventListener('click', toggleMenu);
    }

    var mail = document.getElementsByClassName('mail');
    var phone = document.getElementsByClassName('phone');

    for ( i=0; i<mail.length; i++ ) {
      //shows mail info
      mail[i].addEventListener('click', toggleMailBubble);
    }

    createMailBubble();

    for ( i=0; i<phone.length; i++ ) {
      //shows phone info
      phone[i].addEventListener('click', togglePhoneBubble);
    }

    createPhoneBubble();

    //for showing/hiding the name on the nav bar at the top
    window.addEventListener('scroll', unhideName);
    window.addEventListener('click', handlesClick);
  };

  initialize();
})();
