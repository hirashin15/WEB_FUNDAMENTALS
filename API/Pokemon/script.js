$(document).ready(function(){

  for(var i=1; i<50; i++){
    $.get("https://pokeapi.co/api/v2/pokemon/"+i+"", function(pokemon){
      var image = pokemon.sprites.front_default;
      $(".images").append("<img id="+pokemon.id+" src='"+image+"' alt='pokemon-icon'>");
    }, "json")
  }

  $(document).on('click', 'img', function(){
    console.log("img was clicked");
    var id=$(this).attr("id");
    $.get("https://pokeapi.co/api/v2/pokemon/"+id+"", function(pokemon){
      $("aside h2").html(pokemon.name)
      $("img.aside").attr("src", pokemon.sprites.front_default)
      $(".hidden").show();
      $("div.height").html(pokemon.height);
      $("div.weight").html(pokemon.weight);

      for(var i=0; i<pokemon.types.length; i++){
        $(".type ul").html("<li>"+pokemon.types[i].type.name+"</li>")
      }
    }, "json");
  })

})