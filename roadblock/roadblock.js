   
       function skipAd(event) {
            const roadblock = document.querySelector('.roadblock');
            roadblock.style.opacity = '0';
            setTimeout(() => {
                roadblock.style.display = 'none';
                document.getElementById('roadblock-wrap').style.pointerEvents = 'none';
            }, 1000); // Match the transition duration
        }

        window.onload = function() {
            setTimeout(() => {
                skipAd(event);
            }, 5000); // Adjust the delay as needed (5000ms = 5 seconds)
        }
