/* eslint-env jquery */



// create references to the modal...
var modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
var images = document.getElementsByClassName('myImages');
// the image in the modal
var modalImg = document.getElementById("img01");
// and the caption in the modal
var captionText = document.getElementById("caption");

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

var span = document.getElementsByClassName("close")[0];


span.onclick = function() {
  modal.style.display = "none";
}



// Read More

jQuery(function ($) {
  function AddReadMore() {
     var carLmt = 385;
     var readMoreTxt = "... read more";
     var readLessTxt = " read less";

     $(".add-read-more").each(function () {
        if ($(this).find(".first-section").length)
           return;

        var allstr = $(this).text();
        if (allstr.length > carLmt) {
           var firstSet = allstr.substring(0, carLmt);
           var secdHalf = allstr.substring(carLmt, allstr.length);
           var strtoadd = firstSet + "<span class='second-section'>" + secdHalf + "</span><span class='read-more'  title='Click to Show More'>" + readMoreTxt + "</span><span class='read-less' title='Click to Show Less'>" + readLessTxt + "</span>";
           $(this).html(strtoadd);
        }
     });

     $(document).on("click", ".read-more,.read-less", function () {
        $(this).closest(".add-read-more").toggleClass("show-less-content show-more-content");
     });
  }

  AddReadMore();
});


$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});



$(document).ready(function() {
   $('.zoom-gallery').magnificPopup({
     delegate: 'a',
     type: 'image',
     closeOnContentClick: false,
     closeBtnInside: false,
     mainClass: 'mfp-with-zoom mfp-img-mobile',
     image: {
       verticalFit: true,
       titleSrc: function(item) {
         return item.el.attr('title') + ' · image source';
       }
     },
     gallery: {
       enabled: true
     },
     zoom: {
       enabled: true,
       duration: 300, // don't foget to change the duration also in CSS
       opener: function(element) {
         return element.find('img');
       }
     }
     
   });
 });

 

 