 
if (document.getElementById("easter-egg-modal")) {
        // Modal JS

            document.getElementById("click-o").addEventListener('click',function (){
                document.getElementById("easter-egg-modal").style.display = "block";
            }); 


            document.querySelector(".close").addEventListener('click',function (){
                document.getElementById("easter-egg-modal").style.display = "none";
            }); 



            document.getElementById("easter-egg-input").addEventListener('keyup',function (e){
                var value = e.target.value;
                if (value === "39887") {
                    alert("Your the winner!. Report to Tim at the front desk with your code and recieve the grand prize");
                    //document.getElementById('easter-egg-input').value = "";
                } else if (e.target.value.length > 4) {
                    alert("Sorry, your code is invalid!");
                    document.getElementById('easter-egg-input').value = "";
                }
                
            }); 
            console.log('modal running');
};

if (document.getElementById("countdown")) {
        // Countdown Timer JS
 
            var countDownDate = new Date('October 11, 2019 00:00:00').getTime(); //destination time

            // Update the count down every 1 second
            var x = setInterval(function() {
            
            var now = new Date().getTime(); //current time
            
            // Find the distance between now and the count down date
            var distance = countDownDate - now;
            
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Display the result in the element with id="countdown"
            document.getElementById("countdown").innerHTML = "Time Remaining Until Conference: " + days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";
            
            // If the count down is finished, write some text 
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("countdown").innerHTML = "CONFERENCE IS FINISHED";
            }
            }, 1000);
            console.log('countdown running');
};

// Top Three Script
if (document.getElementsByClassName("rating-button")) {

    var rating = document.getElementsByClassName("rating-button");
    //convert HTML collection to Array
    var rate = Array.from(rating);
    //empty array for selected three
    var topThree = [];
    //for loop to add event listener to each name button
    for ( var i = 0; i < rate.length; i++) {
        rate[i].addEventListener('click', function(e) {
            
            //will only push to top 3 array as long as it holds 3 or less or alert will show
            if (topThree.length < 3) {
                topThree.push(e.target.textContent);
            } else {
                alert("Too Many Choices");
            }

            //loop for top 3 array that then shows each name on a new line using 'join' method
            for (var i = 0; i < topThree.length; i++) {
                document.getElementById('top-3').innerHTML = topThree.join("<br>");
                console.log(topThree[i]);
            }
             console.log(e);
        });
    }

    //add click event for submit button. When clicked <section id="speaker-rating-section"> is displayed as none
    var submit = document.querySelector('.submit-rating-btn');
    submit.addEventListener('click', function(e) {
        document.getElementById('speaker-rating-section').style.display = 'none';
        //innerHTML for thank you to a new div in HTML that is also styled in CSS
        document.getElementById('thank-you').innerHTML = "Thank You";
        console.log(e);
    });

};






 






    