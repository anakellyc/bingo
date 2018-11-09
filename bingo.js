$(document).ready(function(){
  $("#triggerLine").hide();
  $("#closeModal").hide();
  $(".game").hide();
  $("nav .start").hide()
  // $("img.kim1").hide()
  // $("img.jason1").hide()
  // $("img.steve1").hide()
  // $("img.et1").hide()
  // $("img.grandma1").hide()

  var getaudio = $('#player')[0];
  var audiostatus = 'off';

  $(document).on('click touchend', '.speaker', function() {
    if (!$('.speaker').hasClass("speakerplay")) {
      if (audiostatus == 'off') {
        $('.speaker').addClass('speakerplay');
        getaudio.load();
        getaudio.play();
        audiostatus = 'on';
        return false;
      } else if (audiostatus == 'on') {
        $('.speaker').addClass('speakerplay');
        getaudio.play()
      }
    } else if ($('.speaker').hasClass("speakerplay")) {
      getaudio.pause();
      $('.speaker').removeClass('speakerplay');
      audiostatus = 'on';
    }
  });

  $('#player').on('ended', function() {
    $('.speaker').removeClass('speakerplay');
    audiostatus = 'off';
  });


  $("input:button").click(function() {
    var PlayersString = $(this).val();
    nrOfPlayers = parseInt(PlayersString.slice(0,1))
    console.log(nrOfPlayers)
    document.cookie = "nrOfPlayers=" + nrOfPlayers
    playersArray = []
    avatarArray.forEach(function (el) {
      el.removeClass("blocked")
      el.removeClass("border")
    })
  })
  
  var avatarArray =[]
  var playersArray = []
  
  $(".avatars img").click(function(){
    if (nrOfPlayers ==1 ){
      avatar1 = $(this).prop("class")
      playersArray.push(avatar1)
      avatarArray =[$("img.kim"),$("img.jason"),$("img.steve"),$("img.et")]
      //index = avatarArray.indexOf(event.currentTarget)
      //var avatarChosen = avatarArray.slice(avatarArray.indexOf(this,1))
      document.cookie = "avatar1=" + avatar1
      $(this).addClass("border")
      avatarArray.forEach(function (el) {
        el.addClass("blocked")
      })
    } else {
    avatar2 = $(this).prop("class")
    playersArray.push(avatar2)
    avatarArray =[$("img.kim"),$("img.jason"),$("img.steve"),$("img.et")]
    //index = avatarArray.indexOf(event.currentTarget)
    //var avatarChosen = avatarArray.slice(avatarArray.indexOf(this,1))
    document.cookie = "avatar2=" + avatar2
    $(this).addClass("border")
    avatarArray.forEach(function (el) {
      el.addClass("blocked")
    })
  }
    console.log(playersArray)
    console.log(avatar1)
  })

  $(".avatars2 img").click(function(){
    avatar1 = $(this).prop("class")
    playersArray.push(avatar1)
    avatarArray2 =[$("img.kim2"),$("img.jason2"),$("img.steve2"),$("img.et2")]
    //index = avatarArray2.indexOf(event.currentTarget)
    //var avatarChosen = avatarArray.slice(avatarArray.indexOf(this,1))
    document.cookie = "avatar1=" + avatar1
    $(this).addClass("border")
    avatarArray2.forEach(function (el) {
      el.addClass("blocked")
    })
    console.log(playersArray)
    console.log(avatar2)
  })

  // $(".avatars img").click(function(){
  //   avatarArray.push()
  //   avatar1 = $(this).attr("class")
  //   // avatarArray =[$("img.kim"),$("img.jason"),$("img.steve"),$("img.et")]
  //   // var avatarChosen = avatarArray.slice(avatarArray.indexOf($(this),1))
  //   document.cookie = "avatar1=" + avatar1
  //   $(this).addClass("border")
  //   //$(this).addClass("blocked")
  //   console.log(avatar1)
  // })

  function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }

    // avatar1 = getCookie("avatar1")+"1"
    // avatar2 = "grandma1"

  var nrOfPlayers = getCookie("nrOfPlayers")

  $(".start-game").click(function() {
    if (nrOfPlayers == 1) {
      player1 = $("#1player").val()
      player2 = "Grandma"
      avatar1 = playersArray[0]
      //avatar2 = ""
      document.cookie = "player1=" + player1
      document.cookie = "player2=" + player2
      document.cookie = "avatar1" + avatar1
      } else {
      player1 = $("#player1").val()
      player2 = $("#player2").val()
      avatar1 = playersArray[0]
      avatar2 = playersArray[1]
      document.cookie = "player1=" + player1
      document.cookie = "player2=" + player2
      document.cookie = "avatar1" + avatar1
      document.cookie = "avatar2" + avatar2
    }
    avatarcount = 0;
    console.log(avatar1)
    console.log(avatar2)
  })

  var player1 = getCookie("player1")
  var player2 = getCookie("player2")
  var avatar1 = getCookie("avatar1")
  var avatar2 = getCookie("avatar2")

  $(".text-container")[0]

  if (nrOfPlayers ==1 ) {
    document.getElementsByClassName("pregamePart1")[0].firstElementChild.innerHTML
    $(".pregamePart1")[0].firstElementChild.innerHTML = player1.toUpperCase()
    $(".pregamePart1")[0].firstElementChild.append($("img."+avatar1)[0])
    $("img."+avatar1).addClass("avatarNameRow avatars-extra name")
    $(".pregamePart1")[0].lastElementChild.innerHTML = player2.toUpperCase()
    $(".pregamePart1")[0].lastElementChild.append($("img.grandma1")[0])
    $("img.grandma1").addClass("avatarNameRow avatars-extra name")
  } else {
    $(".pregamePart1")[0].firstElementChild.innerHTML = player1.toUpperCase()
    $(".pregamePart1")[0].firstElementChild.append($("img."+avatar2)[0])
    $("img."+avatar2).addClass("avatarNameRow avatars-extra name")
    $(".pregamePart1")[0].lastElementChild.innerHTML = player2.toUpperCase()
    $(".pregamePart1")[0].lastElementChild.append($("img."+avatar1)[0])
    $("img."+avatar1).addClass("avatarNameRow avatars-extra name")
  }
  
  
  var bingoLine = false

  function loadBoard () {
    let fullBoard = document.createElement("table")
    $("#board").append(fullBoard)
    fullBoard.setAttribute("class","board-table")
    for (let y=1; y<11 ; y++) {
      let boardrow = document.createElement("tr")
      boardrow.setAttribute("class","boardrow") 
      $("table").append(boardrow)
      for (let x=0; x<9; x++) {
        let column = document.createElement("td")
        column.setAttribute("class","board-cell")
        document.getElementsByClassName("boardrow")[y-1].appendChild(column)
        column.innerHTML= (y + 10*x).toString()
      }
    }
  }
  loadBoard()

  function loadBall () {
    let allnumbers = []
    for (let i = 1; i<91;i++) {
      allnumbers.push(i)
    }
    return allnumbers
  }

  function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }

  let startGame = $(".start")[1]
  var drawInterval;
  let takenBalls = []
  var playerName;

  startGame.onclick = function() {
    $("nav").prepend($(".start")[1])
    $(".start").html("Restart Game")
    $(".start").removeClass("change-btn")
    $("header").addClass("animated fadeOutUp")
    $(".game").addClass("animated fadeInUp").show()
    $(".cards-area").addClass("animated fadeInUpBig")
    // $("img."+avatar1).show()
    // $("img."+avatar2).show()
    //
    $("#nanaphoto").hide();
    
    bingoLine = false

    $(".board-cell").removeClass("small-circle")
    clearInterval(drawInterval)
    $("#card").empty()
    takenBalls = []
    var cardsCounter = 1;
    let ball = loadBall()

    drawInterval = setInterval(function() {
      $("#rollingBall")

      let shownum = document.getElementById("current-number")

      if (ball.length > 0) {
        var num = ball.splice(Math.floor(Math.random()*ball.length), 1);
        shownum.innerHTML = num
        numString = parseInt(num[0])
        takenBalls.push(numString)
      } else {
        clearInterval(drawInterval)
      }

      //grandma/computer playing
      
      if(nrOfPlayers == 1) {
        $(".column-grandma").trigger("click")
      }

      $(".board-cell").filter(function() {
        return $(this).text() == numString.toString()
      }).addClass("small-circle")

    }, 500);

    //check number of players and load respective cards
    if (nrOfPlayers == 1 ) {
      playerName = player2.toUpperCase()
      loadCardGrandma(createCard())
      playerName = player1.toUpperCase()
      loadCard(createCard())  
     
    } else {
        playerName = player2.toUpperCase()
        loadCard(createCard())
        playerName = player1.toUpperCase()
        loadCard(createCard())
        
    }
  }

  function shuffleCards (array) { 
    let currentIndex = array.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
    return array;
  }

  function createCard () {
    let card = []
    let cardinit = [];
    let n = 15;
    for (let b=0; b<n; b++) {
      let rdn = Math.floor(Math.random()*90+1)
      if (cardinit.includes(rdn)) {
        n++
        continue;
      }
      else {
      cardinit.push(rdn)
      }
    }
    for (let i = 0; i<3; i++) {
      let cardrow =[]
      for (let b = 0; b<5; b++) {
        cardrow.push(cardinit[b])
      }
      cardinit.splice(0,5)
      cardrow.push(0,0,0,0)
      shuffleCards(cardrow)
      card.push(cardrow)
    }
  return card
  }

  var avatarcount = 0;
  function loadCard (array) {
    avatarcount ++
    //clearing the current number
    $("#current-number").html("")

    var hiding = setTimeout (function () {
      $("header").hide()
      clearInterval(hiding)
    }, 400)

    //creating card container
    let checkCounter = 0;
    let cardArea = $("<div></div>")
    $("#card").prepend(cardArea)
    cardArea.addClass("card-space")
    let table = $("<table></table>")
    let nameRow = $("<p></p>")
    nameRow.addClass("name")
    cardArea.prepend(nameRow)
    if (avatarcount == 1) {
      cardArea.prepend($("img."+avatar1)).show().addClass("avatarNameRow avatars name")
    } else {
      cardArea.prepend($("img."+avatar2)).show().addClass("avatarNameRow avatars name")
    }
    nameRow.html(playerName)
    cardArea.append(table)
    table.addClass("table")

    //create the start of line counter
    var matchedNumber = [0,0,0]

    //adds rows and columns
    for (let i=0; i<array.length;i++) {
      let row = document.createElement("tr")
      row.setAttribute("class","row") 
      $("table")[1].appendChild(row)
      for (let x=0; x< array[i].length; x++) {
        let column = document.createElement("td")
        column.setAttribute("class","column loaded-card")
        document.getElementsByClassName("row")[i].appendChild(column)
        column.innerHTML=array[i][x]
        if (array[i][x] == "0") {column.style.color ="darkgrey" , column.style.backgroundColor = "darkgray", column.setAttribute("class","column loaded-card checked blocked")}
        
        //creates the clicking event and counts
        column.addEventListener("click", function() {
          
          let shownum = document.getElementById("current-number").innerHTML
          if (this.innerHTML == shownum) {
            this.setAttribute("class", "column loaded-card checked blocked")
            checkCounter ++
            matchedNumber[i]++
            
          } else if (takenBalls.includes(parseInt(this.innerHTML))) {
            this.setAttribute("class", "column loaded-card checked blocked")
            checkCounter ++
            matchedNumber[i]++ 
          }

          let line = setInterval(function() {
            if (matchedNumber[i] == 5 && bingoLine == false) {
              bingoLine = true
              $(".alert").html(column.parentNode.parentNode.previousSibling.innerHTML + " made a LINE!!!")
              $("#triggerLine").trigger("click")
              var closeModal = setInterval (function() {
                $("#closeModal").trigger("click")
                $("#closeModal").off("click")
                clearInterval(closeModal)
              }, 800)
              }
              $("#closeModal").off("click")
              $("#triggerLine").off("click")
              clearInterval(line)
          }, 100)
         
          let win = setInterval(function() {
            if (checkCounter == 15) {
              clearInterval(drawInterval)
              clearInterval(win)
              $(".column").addClass("blocked")
              $(".alert").html("BINGO! " +column.parentNode.parentNode.previousSibling.innerHTML +" wins!!!")
              $("#closeModal").show();
              $("#triggerLine").trigger("click")
            }
            $("#triggerLine").off("click") 
            clearInterval(win)
          }, 100) 
        })
      } 
    } 
  }


    function loadCardGrandma (array) {
      var grandmaCounter =0;
      let cardArea = $("<div></div>")
      $("#card").prepend(cardArea)
      cardArea.addClass("card-space")
      let table = $("<table></table>")
      let nameRow = $("<p></p>")
      nameRow.addClass("name")
      cardArea.prepend(nameRow)
      cardArea.prepend(`<img class="grandma1" src="avatars/nana.png">`).addClass("avatarNameRow avatars name")
      // $("img."+avatar2).addClass("avatarNameRow")
      nameRow.html(playerName)
      cardArea.append(table)
      table.addClass("table")

      //create the start of line counter
      var matchedNumber = [0,0,0]

      //adds rows and columns
      for (let i=0; i<array.length;i++) {
        let row = document.createElement("tr")
        row.setAttribute("class","row") 
        $("table")[1].appendChild(row)
        for (let x=0; x< array[i].length; x++) {
          var column = document.createElement("td")
          column.setAttribute("class","column-grandma loaded-card")
          document.getElementsByClassName("row")[i].appendChild(column)
          column.innerHTML=array[i][x]
          if (array[i][x] == "0") {column.style.color ="darkgrey" , column.style.backgroundColor = "darkgray", column.setAttribute("class","column loaded-card checked blocked")}
          
        column.addEventListener("click", function() {
          let shownum = document.getElementById("current-number").innerHTML
          if (this.innerHTML == shownum) {
            this.setAttribute("class", "column loaded-card checked blocked")
            grandmaCounter ++
            matchedNumber[i] ++
            }
          
            let line = setInterval(function() {
              if (matchedNumber[i] == 5 && bingoLine == false) {
                bingoLine = true
                $(".alert").html(column.parentNode.parentNode.previousSibling.innerHTML + " made a LINE!!!")
                $("#triggerLine").trigger("click")
                var closeModal = setInterval (function() {
                  $("#closeModal").trigger("click")
                  $("#closeModal").off("click")
                  clearInterval(closeModal)
                }, 800)
              }
              $("#closeModal").off("click")
              $("#triggerLine").off("click")
              clearInterval(line)
            }, 100)  

          let win = setInterval(function() {
            if (grandmaCounter == 15) {
              clearInterval(drawInterval)
              clearInterval(win)
              $(".column").addClass("blocked")
              $(".alert").html("BINGO! " +column.parentNode.parentNode.previousSibling.innerHTML +" wins!!!")
              $("#closeModal").show();
              $("#nanaphoto").show();
              $("#triggerLine").trigger("click") 
            }
            $("#triggerLine").off("click") 
            clearInterval(win)
          }, 100)
        })
      }}
    } 
    
})













