 function changeAudio(test) {
    var src = test;
    if(src.search("none") > -1){
         src = 'music/music.mp3';
    }
var audioElement = document.getElementById('audio');
audioElement.setAttribute('src', src);
// Load src of the audio file
audioElement.load();
audioElement.play();
};

$('#search').keyup(function() {
    var searchField = $('#search').val();
    var myExp = new RegExp(searchField, "i");
$.getJSON('JSON/data.json', function(data) {
    var output = '<ul class ="searchresults">';

    var buttonPause = '<button onClick="document.getElementById('+"'audio'"+ ').pause()">Pause</button>';
    $.each(data, function(key, val){
        if(val.name.search(myExp) != -1){
            output += '<li>';
            output += '<h2>' + val.name + '</h2>';
            output += '<img src="images/champion-images/' + val.name.replace(/'| /g, "") + 'Square.png" alt="'+ val.name +'" />';
            output += '<table><thead><tr><th>Lane</th><th>Song</th></tr></thead>';
            output += '<tr><td>Top</td><td>' + val.toplane.replace(/-/g, " ").split(".")[0] + "<button onClick=\"changeAudio('music/"+val.name+"/"+ val.toplane +"');\">Play</button>"+ buttonPause + '</td></tr>';
            output += '<tr><td>Mid</td><td>' + val.midlane.replace(/-/g, " ").split(".")[0] + "<button onClick=\"changeAudio('music/"+val.name+"/"+ val.midlane +"');\">Play</button>" + buttonPause +'</td></tr>';
            output += '<tr><td>Jungle</td><td>' + val.jungle.replace(/-/g, " ").split(".")[0] + "<button onClick=\"changeAudio('music/"+val.name+"/"+ val.jungle +"');\">Play</button>" + buttonPause +'</td></tr>';
            output += '<tr><td>Bot</td><td>' + val.botlane.replace(/-/g, " ").split(".")[0] + "<button onClick=\"changeAudio('music/"+val.name+"/"+ val.botlane +"');\">Play</button>" + buttonPause +'</td></tr>';
            output += '<tr><td>Support</td><td>' + val.support.replace(/-/g, " ").split(".")[0] + "<button onClick=\"changeAudio('music/"+val.name+"/"+ val.support +"');\">Play</button>" + buttonPause +'</td></tr>';
            output += '</table>';
            output += '</li>';
        }
    });
    output += '</ul>';
    $('#update').html(output);
}); //get JSON
});//#search
