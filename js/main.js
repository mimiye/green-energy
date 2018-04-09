const topics = {
    wind: {
        title: "Solar Energy",
        text: "Solar energy is radiant light and heat from the Sun that is harnessed using a range of ever-evolving technologies such as solar heating, photovoltaics, solar thermal energy, solar architecture, molten salt power plants and artificial photosynthesis.",
        image: "img/solar.jpg"
    },
    solar: {
        title: "Wind Energy",
        text: "Wind power is the use of air flow through wind turbines to mechanically power generators for electric power. Wind power, as an alternative to burning fossil fuels, is plentiful, renewable, widely distributed, clean, produces no greenhouse gas emissions during operation, consumes no water, and uses little land.[2] The net effects on the environment are far less problematic than those of nonrenewable power sources.",
        image: "img/wind.jpg"
    },
    hydroelectric: {
        title: "Hydroelectric Energy",
        text: "Hydroelectricity is electricity produced from hydropower. In 2015 hydropower generated 16.6% of the world\'s total electricity and 70% of all renewable electricity,[1] and was expected to increase about 3.1% each year for the next 25 years. Hydropower is produced in 150 countries, with the Asia-Pacific region generating 33 percent of global hydropower in 2013.",
        image: "img/hydroelectric.jpg"
    },
    
};

const buttons = document.querySelectorAll(".main-content button");
const article = document.querySelector("article");

function loadContent(ev) {
    let clickedBtn = ev.target;
    let key = clickedBtn.getAttribute("data-content");
    
    article.innerHTML = "";  
    
   /* while(article.firstChild) {
        // Reference: 
        // https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove 
        // https://developer.mozilla.org/en-US/docs/Web/API/Node/firstChild
         
        article.firstChild.remove();
    }
    */
    
    /*
    // Reference: https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
    article.innerHTML = `<h2>${topics[key].title}</h2>`; 
    */
    
    let h2 = document.createElement("h2");
    h2.textContent = topics[key].title;
    article.appendChild(h2);
    
    
    let p = document.createElement("p");
    p.textContent = topics[key].text;
    article.appendChild(p);
    
    let img = document.createElement("img");
    img.setAttribute("src", topics[key].image );
    article.appendChild(img);  
    
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", loadContent);
}

