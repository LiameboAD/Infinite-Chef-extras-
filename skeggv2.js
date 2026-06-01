// More info about enabling, testing, and submitting mods: https://R74ncom.github.io/InfiniteChef-Mods/

// Add a basic ingredient using the 'egg' ingredient as a base

addIngredient("skegg",{
    name:"Skegg",
    type:"egg", //will inherit all properties of the "egg" ingredient
    color:"#9AB1FF" //sky blue
});
// Add a detailed ingredient with custom Shape and other properties
// All Shape IDs can be found here: https://R74n.com/shapes/
// A list of properties can be found at the top of: https://R74n.com/cook/foodData.js
addIngredient("bb_powder",{ //ID should be lowercase with underscores
    name:"BB Powder"
    color:"#000000", //black
    innerColor:"#000000", //black
    type:"flour", ///type can be any other ingredient
});
// Add ingredient with reactions
addIngredient("rgb_jelly",{
    name:"RGB Jelly"
    type:"jam",
    color:"#12fe67",
    reactions: {
        // meat: { set1:"" },
       // vegetable: { set1:"", tempMin:60 },
       // oil: { set1: "rainbow_oil" }
    }   
});
addIngredient("glitched_drink",{
    name:"Glitched Drink"
    type:"water",
    color:"#676767",
    reactions: {
        // meat: { set1:"glitchy_meat" },
       // vegetable: { set1:"glitched_veggie", tempMin:60 },
       // oil: { set1: "glitched_oil" }
    }   
});
addIngredient("red_spice",{
    name:"Red Spice"
    type:"salt",
    color:"#ff0000",
    reactions: {
        // meat: { set1:"cured_meat" },
       // vegetable: { set1:"spiced_veggie", tempMin:60 },
       // oil: { set1: "spicy_oil" }
    }   
});
addIngredient("gallsugar",{
    name:"Gallsugar"
    type:"sugar",
    color:"#00ff67",
    reactions: {
        // meat: { set1:"" },
       // vegetable: { set1:"sweet_veggie", tempMin:60 },
       // oil: { set1: "ant_threatened_oil" }
    }   
});
addIngredient("fritz",{
    name:"Fritz"
    type:"butter",
    color:"#00ff00",
    reactions: {
        // meat: { set1:"buttery_meat" },
       // vegetable: { set1:"fritz_veggie", tempMin:60 },
       // oil: { set1: "lining_oil" }
    }   
});
// Add a recipe with an optional ingredient
addRecipe("cake+sprinkles?+chocolate+fritz","fretective chocolate cake");
