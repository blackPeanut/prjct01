var famousQuotes = (function () {
    var 
        quotes = [{
                    text: "To infinity and beyond!",
                    author: "Buzz Lightyear"
                 },
                 {
                    text: "I don't do fear.",
                    author: "Raven"
                 },
                 {
                    text: "Just keep swimming.",
                    author: "Dory"
                 },
                 {
                    text: "I'm ready, I'm ready, I'm ready.",
                    author: "Spoungebob SquarePants"
                 },
                 {
                    text: "Was justice improve age article between. No projection as up preference reasonably delightful celebrated. Preserved and abilities assurance tolerably breakfast use saw. And painted letters forming far village elderly compact. Her rest west each spot his and you knew. Estate gay wooded depart six far her. Of we be have it lose gate bred. Do separate removing or expenses in. Had covered but evident chapter matters anxious.",
                    author: "Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch"
                 },
                 {
                    text: "Ipsum at sed vel interdum mi. Neque elit erat feugiat etiam vel ac id pede arcu massa vestibulum eget nulla condimentum magnis vitae ut. Nullam erat sed tempus euismod mattis in erat in proin.",
                    author: "Letter count: 156"
                 },
                 {
                    text: "Sed ante dignissimos dui turpis deserunt nunc diam diam orci eget donec. Luctus fermentum et faucibus in sit nibh duis sed sollicitudin penatibus vel. Nonummy duis nostra turpis mus bibendum arcu vitae nullam commodo.",
                    author: "Letter count: 181"
                 },
                 {
                    text: "Lorem nascetur arcu assumenda iaculis fermentum. Pellentesque lacus erat hic massa augue lacinia et conubia turpis vel quisque vestibulum id maecenas quis vel blandit. Varius etiam fusce neque in volutpat sollicitudin magna quis aenean.",
                    author: "Letter count: 200"
                 }
                ],
        getRandom = function () {
            var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            return randomQuote;
        }

    return {
        getRandom: getRandom 
    }
})();
