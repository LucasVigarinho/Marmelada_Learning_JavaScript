     // Creating a function to solve the question below
    // - 3. Change the webpage in ways to select the style (external CSS) by clicking a button.
    // - 2. Create two external style sheets: “Creative” and “Professional”, with a background, different text formatting, etc.
	// 	Define style sheet Creative
	// 	Define style sheet Professional -->
    function swapStyle(sheet) {
        document.getElementById("pageStyle").setAttribute('href', sheet);

    }

    <!-- Initializing all the javascript functions -->
    function start(){
        display_Current_Time();
        startTimer();
    }

     <!-- Script in javascript in order to put back the main image from Lucas on his CV  periodically-->
    function displayImage() {
        document.getElementById("myImage").src = "images/Lucas_Cv_photo.jpeg";
    }
    function startTimer() {
        setInterval(displayImage, 6000);
    }

     <!-- 7. Make the web page display the current time (hours:minutes:seconds) every 3 seconds, under the TU Dublin logo. -->
     function display_current(){
         var refresh = 3000;
         mytime = setTimeout('display_Current_Time()', refresh);
         }
     function display_Current_Time() {
         var x = new Date();
         // var x1=x.getMonth() + 1+ "/" + x.getDate() + "/" + x.getFullYear();
         // x2 = x1 + " - " +  x.getHours( )+ ":" +  x.getMinutes() + ":" +  x.getSeconds();
         document.getElementById('time').innerHTML = x;
         display_current();
     }
