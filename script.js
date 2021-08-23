const balance = document.getElementById( "balance" );
const moneyPlus = document.getElementById( "money-plus" );
const moneyMinus = document.getElementById( "money-minus" );
const listHistory = document.getElementById( "list" );
const form = document.getElementById( "form" );
const text = document.getElementById( "text" );
const amount = document.getElementById( "amount" );
const totalIncome = document.getElementById( "total-income" );
const inTotal = document.getElementById( "intotal" );
const totalExpense = document.getElementById( "total-expense" );
const submitBtn = document.getElementById( "submit-btn" );

// let deleteItems = [];

// function removeItem ( d )
// {
//     deleteItems.push( d );
//     if ( deleteItems != null )
//     {
//         const allDelete = document.getElementById( "all-delete" );
//         allDelete.style.display = "none";
//     };
    
// }

function addTransactionDom ( t,a )
{
    const symbole = +a.value > 0 ? "+" : "-";

    const item = document.createElement( "li" );

    item.classList.add( +a.value > 0 ? "minus" : "plus" );
    item.innerHTML =`
    ${t.value } <span>${ symbole } ${ Math.abs( +a.value )}</span>
    <button class="delete" id="delete-btn">X</button>
    `
    listHistory.appendChild( item );    
}

let allPositiveNumber = [];
let allNegativeNumber = [];

submitBtn.addEventListener( "click", function ( e )
{
    e.preventDefault();
    // updateValue();
    addTransactionDom( text, amount );
    // console.log(amount.value );
    
    if ( amount.value > 0 )
    {
        // totalIncome.innerText = amount.value;
        allPositiveNumber.push( amount.value );
        
        const allTotalIncome = allPositiveNumber.reduce( ( total, curr ) => ( total += +curr ), 0 );
        
        totalIncome.innerText = allTotalIncome;
        
        amount.value = "";
    } else
    {
        allNegativeNumber.push( amount.value );
    
        const allTotalExpense = Math.abs( allNegativeNumber.reduce( ( total, curr ) => ( total += +curr ), 0 ) );

        totalExpense.innerText = allTotalExpense;
        amount.value = "";
    }

    const useableBalance = totalIncome.innerText - totalExpense.innerText;

    inTotal.innerText = useableBalance;

} );


listHistory.addEventListener( "click", function ( e )
{

    const deleteBtn = e.target.innerText;
    if ( deleteBtn == "X" )
    {
        e.target.parentNode.style.display = "none";
    }
} );


