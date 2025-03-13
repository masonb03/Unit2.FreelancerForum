const freelancers = [
    {name: "Alice", occupation: "Writer", starting: 30},
    {name: "Bob", occupation: "Teacher", starting: 50},
    {name: "Carol", occupation: "Programmer", starting: 70},
];

function init() {

    /**
     * Step 1: grab div with the id of "root"
     */

    const root = document.querySelector(`#root`)
    root.style.border = "2px, solid , black";
    root.style.marginLeft = "500px";
    root.style.marginRight = "500px";
    console.log(root);

    /**
     * Step 2: create 2 h1 element that says "Freelace Forum" and "Availiable Freelancers"
     * add element to the div
     */


    const h1 = document.createElement("h1");
    h1.innerHTML = "Freelance Forum";
    root.append(h1);

    const h2 = document.createElement("h2");
    h2.innerHTML = "Avaliable Freelancers";
    root.append(h2);

    const anveragePrice = document.createElement("p");
    anveragePrice.id = "averagePrice";
    root.append(anveragePrice);


    /**
     * Step 3:Create a container div to hold freelancer data
     */

    const freelanceContainer = document.createElement("div");
    freelanceContainer.id = "freelanceContainer";
    freelanceContainer.style.padding = "10px";
    freelanceContainer.style.marginTop = "10px";
    freelanceContainer.style.borderRadius = "8px";
    root.append(freelanceContainer);

  


    /**
     * Step 5: call the function in step 4
     * 
    */

    renderFreelance();

}

/**
 * Step 4: Createa a function to render the freelancers in the freelance array
 * 
*/

function renderFreelance(){
    const container = document.querySelector("#freelanceContainer");
    container.innerHTML = ""

    freelancers.forEach((freelancer)=>{
        const freelancerDiv = document.createElement("div");
        freelancerDiv.classList.add("free")
        freelancerDiv.innerHTML = `
                                    <span><strong> Name:</strong> ${freelancer.name}</span>
                                    <span><strong> Occupation:</strong> ${freelancer.occupation}</span>
                                    <span><strong> Starting Price:</strong> ${freelancer.starting}</span>
        `;

        container.append(freelancerDiv);
    });

    updateAveragePrice();
}

function updateAveragePrice(){
    const totalPrice = freelancers.reduce((sum, freelancer) => sum + freelancer.starting, 0);
    const averagePrice = (totalPrice / freelancers.length).toFixed(2);

    const averagePriceElement = document.querySelector("#averagePrice");
    averagePriceElement.innerHTML = `The average starting price is ${averagePrice}`
}

//call the function init
init();