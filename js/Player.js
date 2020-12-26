class Player {
    constructor(){

    }
    // read playerCount
    getCount(){
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value",function(data){
            playerCount = data.val();
        })
    }
    // update playerCount
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }

    // update name of player
    update(name){
        var playerIndex = "player"+playerCount;
        database.ref(playerIndex).set({
            name:name
        })
    }
}