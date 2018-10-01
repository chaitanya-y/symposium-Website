var myaabc;
function Loadera() {
    myaabc = setTimeout(showPage, 3000);
    var quotes = [
        {text: "When you want to know how things really work, study them when they're coming apart.", by: "-- William Gibson, Zero History"},
        {text: "Engineers like to solve problems. If there are no problems handily available, they will create their own problems.", by: "-- Scott Adams"},
        {text: "The fewer moving parts, the better. Exactly, No truer words were ever spoken in the context of engineering.", by: "-- Christian Cantrell, Containment"},
        {text: "Scientists dream about doing great things. Engineers do them.", by: "-- James A. Michener"},
        {text: "The way you learn anything is that something fails, and you figure out how not to have it fail again.", by: "-- Robert S. Arrighi"},
        {text: "The most important thing is to keep the most important thing the most important thing.", by: "-- Donald P Coduto"},
        {text: "An engineer is someone who is good with figures, but doesn't have the personality of an accountant.", by: "-- An Arts graduate's view of engineers"},
        {text: "One has to watch out for engineers - they begin with the sewing machine and end up with the atomic bomb.", by: "-- Marcel Pagnol, Critiques des Critiques"},
        {text: "The scientist discovers a new type of material or energy and the engineer discovers a new use for it.", by: "-- Gordon Lindsay Glegg"},
        {text: "Science can amuse and fascinate us all, but it is engineering that changes the world.", by: "-- Isaac Asimov"},
        {text: "Scientists study the world as it is, engineers create the world that never has been.", by: "-- Theodore von Karman"},
        {text: "The engineer has been, and is, a maker of history.", by: "-- James Kip Finch"},
        {text: "A theory may be so rich in descriptive possibilities that it can be made to fit any data.", by: "-- Phillip Johnson-Laird"},
        {text: "I do not fear computers. I fear lack of them.", by: "-- Isaac Asimov"},
        {text: "Physics is the universe’s operating system.", by: "-- Steven R Garman"},
        {text: "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.", by: "-- Stephen Hawking"},
        {text: "In a room full of top software designers, if two agree on the same thing, that’s a majority.", by: "-- Bill Curtis"},
        {text: "Simplicity, carried to the extreme, becomes elegance.", by: "-- Jon Franklin"},
        {text: "Science is about knowing, engineering is about doing.", by: "-- Henry Petroski"},
        {text: "Design is not just what it looks like and feels like.  Design is how it works.", by: "-- Steve Jobs"},
        {text: "We cannot solve our problems with the same thinking we used when we created them.", by: "-- Albert Einstein"},
        {text: "Others dream of things that were, and ask 'Why?'  I dream of things that never were, and ask 'Why not?'", by: "-- Cardinal Saint-Saens"},
    ];
    var quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").innerHTML = "<p style='color:white;font-family:Ubuntu !important;' class='loader_quote'>" + quote.text + "</p><p style='font-family:Ubuntu !important;' class='loader_quote_by'>" + quote.by + "</p>";
}
function showPage() {
    document.getElementById("loader-123").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}