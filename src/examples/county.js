var root = document.getElementById('root');

var name="Samsung S10";
var price = 5000;
var description = "Çok iyi bir telefon";

var product={
    name:"Samsung S10",
    price: 5000,
    description:"Çok iyi bir telefon",
    types:[]
}

function getDescription(description){
    if(description){
        return <p id="product-desc">{description}</p>;
    }
}

var template2 =
    <div id="product-details">
        <h2 id="product-name">name:{product.name ? product.name:'no name'}</h2>
        {(product.price && product.price>0) && <p>price:{product.price} TL</p>}
        {getDescription(product.description)}
        <p>{product.types.length>0?'there are options':'no option'}</p>
    </div>;

var number = 0;
var btnOneClassName="btnRed";
var btnMinusClassName="btnBlue";


function addOne(){
    number++;
    renderApp();
    console.log('add one');
}

function minusOne(){
    number--;
    renderApp();
    console.log('minus one');
}
 
//React
/*var template = React.createElement(
'h1',
null,
'Hello Word'
);*/

//ReactDOM

function renderApp(){
    var template3 =    
    <div>
        <h1>Number: {number}</h1>
        <button id="btnPlusOne" className={btnOneClassName} onClick={addOne}>+1</button>
        <button id="btnPlusOne" className={btnMinusClassName} onClick={minusOne}>-1</button>
    </div>;
    ReactDOM.render(template3,root);
}

function tick(){
    var element = (
        <div>
            <h2>time is:{new Date().toLocaleDateString()}</h2>
        </div>
    );

    ReactDOM.render(element,root);
        
    
}

//setInterval(tick,1000);
//tick();
renderApp();