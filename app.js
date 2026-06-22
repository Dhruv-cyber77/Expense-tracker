const all = []

const product = document.querySelector(".product-name");
const amount = document.querySelector(".amount");
const category = document.querySelector(".type");
const addbtn = document.querySelector(".add");
const table = document.querySelector(".table");

function elements() {
    document.querySelectorAll(".row").forEach(row => row.remove());

    all.forEach((name, index)=> {
        const row = document.createElement("div");

        row.innerHTML = `
        <p>${name.name}</p>
        <p>${name.category}</p>
        <p>${name.amount}</p>
        <button class="delete">
                <i class="fa-solid fa-trash-can"></i>
        </button>
        `;
        row.querySelector(".delete").addEventListener("click",()=> {
            all.splice(index,1)
            elements()
        })
        table.appendChild(row)
        row.classList.add("row" ,"flex");
    });

    product.value = "";
    amount.value = "";
    category.selectedIndex = 0;
}

addbtn.addEventListener("click",() => {
    if(product.value !== "" && 
       amount.value !== "" &&
       category.value !== ""){
        all.push({
            name: product.value,
            amount:Number(amount.value),
            category: category.value
        });
        elements();
    }
});
