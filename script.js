function App(){

    const [quotes, setQuotes] = React.useState([]);
    const [color, setColor] = React.useState("fff");
    const [randomQuotes, setRandomQuotes] = React.useState("");

    React.useEffect(() =>{
        async function fetchData(){
            const response = await fetch('https://type.fit/api/quotes');
            const data = await response.json();
            setQuotes(data);
            let randIndex = Math.floor(Math.random() * data.length)
            setRandomQuotes(data[randIndex]);
            
        }
        fetchData();
    },[])

    const getNewQuote = () =>{
        const colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
        '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
        '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
        '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
        '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
        '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
        '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
        '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
        '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
        let randIndex = Math.floor(Math.random() * quotes.length)
        setRandomQuotes(quotes[randIndex]);
        let randColor = Math.floor(Math.random() * colors.length)
        setColor(colors[randColor]);
    }
    return (
        <body className="row align-items-center" style={{backgroundColor: color, minHeight: "100vh"}}>
        <div className="row">
       <div className="container pt-5">
        <div className="jumbotron mx-5">
            <div className="card">
                <div className="card-header">
                    Inspriational Quotes
                </div>
                <div className="card-body">
                {randomQuotes ? (
                <>
                <h5 className="card-title"> {randomQuotes.author || "No author"}</h5>
                <p className="card-text">&quot; {randomQuotes.text} &quot;</p>
                </>):(
                    <h2>Loading</h2>
                )}

                <div className="row">
                    <button className="col btn btn-primary ml-3 m-2" onClick={getNewQuote}>New Quote</button>
                    <a href={
                        "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="+
                        encodeURIComponent(
                            '"' + randomQuotes.text + '"' + randomQuotes.author
                        )
                        
                    }
                     target="_blank"
                     className="col btn btn-warning m-2"><i className="fa fa-twitter"></i></a>
                    <a href={
                        "https://www.tumblr.com/widgets/share/tool?posttype=quotes&tags=quotes,freecodecamp&caption="+
                        encodeURIComponent(randomQuotes.author) +
                        "&content="+
                        encodeURIComponent(randomQuotes.text) +
                        "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button" 
                        
                    }
                    target="_blank"
                    className="col btn btn-danger m-2"><i className="fa fa-tumblr"></i></a>
                </div>
                </div>
            </div>
        </div>

       </div>
       </div>
       </body>
    )
}

ReactDOM.render(<App/>,document.getElementById('app'));
