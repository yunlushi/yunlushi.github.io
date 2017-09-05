//Float circular menu

// Open and close sidebar
function openNav() {
    document.getElementById("mySidebar").style.width = "60%";
    document.getElementById("mySidebar").style.display = "block";
}

function closeNav() {
    document.getElementById("mySidebar").style.display = "none";
}
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    //console.log("hihi");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

var me = {};
// me.avatar = "https://lh6.googleusercontent.com/-lr2nyjhhjXw/AAAAAAAAAAI/AAAAAAAARmE/MdtfUmC0M4s/photo.jpg?sz=48";

var you = {};
// you.avatar = "https://a11.t26.net/taringa/avatares/9/1/2/F/7/8/Demon_King1/48x48_5C5.jpg";

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}            

//-- No use time. It is a javaScript effect.
function insertChat(who, chattext, time = 0){
    var control = "";
    var date = formatAMPM(new Date());
    
    if (who == "me"){
        
        control = '<li style="width:100%">' +
                        '<div class="msj macro">' +
                        '<div class="avatar"><img class="img-circle" style="width:100%;" src="'+ me.avatar +'" /></div>' +
                            '<div class="chattext chattext-l">' +
                                '<p>'+ chattext +'</p>' +
                                '<p><small>'+date+'</small></p>' +
                            '</div>' +
                        '</div>' +
                    '</li>';                    
    }else{
        control = '<li style="width:100%;">' +
                        '<div class="msj-rta macro">' +
                            '<div class="chattext chattext-r">' +
                                '<p>'+chattext+'</p>' +
                                '<p><small>'+date+'</small></p>' +
                            '</div>' +
                        '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="'+you.avatar+'" /></div>' +                                
                  '</li>';
    }
    setTimeout(
        function(){                        
            $("ul").append(control);

        }, time);
    
}

function resetChat(){
    $("ul").empty();
}

$(".mychattext").on("keyup", function(e){
    if (e.which == 13){
        var chattext = $(this).val();
        if (chattext !== ""){
            insertChat("me", chattext);              
            $(this).val('');
        }
    }
});

//-- Clear Chat
resetChat();

//-- Print Messages
// insertChat("me", "Hello, I'm glad you are here.", 0);
// insertChat("me", "What do you want to know today?", 1500);    
// insertChat("you", "Tell me more about yourself", 2500);
// insertChat("me", "I am a UX designger, also an architect", 4000);
// insertChat("you", "Tell me a joke",7000);
// insertChat("me", "Spaceman: Computer! Computer! Do we bring battery?!", 9500);
// insertChat("you", "LOL", 12000);
insertChat("me", "Hello, I'm glad you are here.", 0);
insertChat("me", "What do you want to know today?", 1500);    
insertChat("you", "Tell me more about yourself.", 3500);
insertChat("me", "I am a UX designger, also an architect. You are welcome to scroll down and view more in the 'About me' section.", 6000);
insertChat("you", "Cool, can you tell me more about your recent works?",9000);
insertChat("me", "Sure, please scroll down and click the 'Portfolio' section.", 12000);
insertChat("you", "Thank you!", 14000);


//-- NOTE: No use time on insertChat.