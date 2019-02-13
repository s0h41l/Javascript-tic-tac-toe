var Data=function(){
    var board=["","","","","","","","",""];
    var player=0;
  return({
    board:board,
    player:player,
    changePlayer:()=>{
      console.log("change player!");
    },
    winCheck(){
        if((board[0]=="X" && board[1]=="X" && board[2]=="X") || (board[0]=="X" && board[3]=="X" && board[6]=="X") || (board[2]=="X" && board[5]=="X" && board[8]=="X") || (board[6]=="X" && board[7]=="X" && board[8]=="X") || (board[0]=="X" && board[4]=="X" && board[8]=="X") || (board[2]=="X" && board[4]=="X" && board[6]=="X") || (board[1]=="X" && board[4]=="X" && board[7]=="X") || (board[3]=="X" && board[4]=="X" && board[5]=="X")){
            alert("Player 0 win!");
            document.querySelector("#winner").innerHTML="Player "+this.player+" Won";
            this.restart();
        }

        if((board[0]=="O" && board[1]=="O" && board[2]=="O") || (board[0]=="O" && board[3]=="O" && board[6]=="O") || (board[2]=="O" && board[5]=="O" && board[8]=="O") || (board[6]=="O" && board[7]=="O" && board[8]=="O") || (board[0]=="O" && board[4]=="O" && board[8]=="O") || (board[2]=="O" && board[4]=="O" && board[6]=="O") || (board[1]=="O" && board[4]=="O" && board[7]=="O") || (board[3]=="O" && board[4]=="O" && board[5]=="O")){
            alert("Player 1 win!");
            document.querySelector("#winner").innerHTML="Player "+this.player+" Won";
            this.restart();
        }

    },
    placePeg(position){
      if(this.player==0){
          if(board[position]==""){
            board[position]="X"
            this.winCheck();
            this.player=1-this.player;
          }else{
              if(this.drawCheck()){
                  alert("Draw!");
                  this.restart();

              }else{

                  alert("Can't place here! "+player);
              }
          }

      }else if(this.player==1){
            if(board[position]==""){
              board[position]="O"
              this.winCheck();
              this.player=1-this.player;
            }else{
                if(this.drawCheck()){
                    document.querySelector("#draw").innerHTML="Game Draw!";
                    alert("Draw!");
                    this.restart();

                }else{

                    alert("Can't place here! "+player);
                }
            }

        }


    },
    drawCheck(){
        for(i=0;i<9;i++){
            if(board[i]==""){
                return false;
            }
        }
        return true;
    },
    restart(){
      for(i=0;i<9;i++){
          board[i]="";
      }
      UI_Update().updateUI();
    }


  });
}();


var UI_Update=function(data=Data){
  return({
    updateUI(){
      document.querySelector("#player").innerHTML="Player "+data.player;
      for(i=0;i<9;i++){
        document.querySelector("#peg"+i).innerHTML = data.board[i];
      }

      for(i=0;i<9;i++){
        if(data.board[i]=="X"){
          document.querySelector("#peg"+i).classList.add("text-danger");
        }else if(data.board[i]=="O"){
          document.querySelector("#peg"+i).classList.add("text-success");
        }
      }
    },
  });

};

var UI_Event=function(data,UI){
  document.querySelector("#boardContainer").addEventListener('click',function(event){
    var ids=[0,1,2,3,4,5,6,7,8];
    if(event.target.id in ids){
      console.log("Clicked!");
      data.placePeg(event.target.id);
      UI.updateUI();

    }

  });

}(Data,UI_Update(Data));
