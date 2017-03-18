$(document).ready(function() {

        //List of Quotes

        var quotes = [
        "Men are like brooches. Your outfit looks amazing without one, but they are a nice accessory to have.",
        "If not then whatever.",
        "If it's meant to be, it's meant to be.",
        "Don't have kids before you are 30. Seriously.",
        "You're not even 30 yet!! Why the hell do you want to get married?",
        "It's better to be by yourself than with a guy who doesn't treat you like a goddess-princess-cupcake-queen.",
        "Wear makeup for yourself. Wear a beautiful outfit for yourself. Do your hair for yourself. Spray on some perfume for yourself. This is all for YOU and no one else.",
        "What do YOU want?",
        "Do you want to meet the love of your life? Look in the mirror.",
        "If you want something said, ask a man; if you want something done, ask a woman.",
        "Hoes before bros, always.",
        "If you're not 100% yourself in the relationship, then what's the point?",
        "If you can't make it better, laugh at it.",
        "A strong woman doesn't need a man, she wants a man. If that man starts slacking, then she's better off without him.",
        "You are responsible for your own happiness.",
        "There is nothing more beautiful than a woman being unapologetically herself.",
        "Don't use men to get what you want in life. Get it yourself.",
        "Never be afraid to be on your own.",
        "You're not a princess - you don't need saving. You're a QUEEN, you got this shit handled.",
        "You don't need a man to validate your existence. Ever.",
        "The smartest thing a woman can ever learn is to never need a man.",
        "Don't forget to fall in love with yourself first.",
        "Be with a man you WANT to be with, not need to be with.",
        "You do not need a partner to feel worthy.",
        "When in doubt, ALWAYS say what you want to your partner.",
        "You will hold yourself to a standard of grace, not perfection."
        ];

        //Click Event

        var oldNum;
        var randNum;

        function tweet() {
          window.open('https://twitter.com/intent/tweet?hashtags= alternatemom&text='   + encodeURIComponent($(".panel").html()));
        };

        $("#btn-generate").click(function() {
          while (randNum == oldNum) {
            randNum = Math.floor(Math.random() * quotes.length);
          }
          $(".panel").fadeOut(300,function() {
            $(".panel").html(quotes[randNum]);
            oldNum = randNum;
            $(".panel").fadeIn(300)
          });
        });

        $("#btn-twitter").on("click", tweet);
      });