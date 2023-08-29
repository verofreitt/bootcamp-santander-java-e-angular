class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
        
    }
    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const CardLeft = document.createElement("div");
        CardLeft.setAttribute("class", "card_left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");
        
        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url")

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        CardLeft.appendChild(autor);
        CardLeft.appendChild(linkTitle);
        CardLeft.appendChild(newsContent);

        const CardRight = document.createElement("div");
        CardRight.setAttribute("class", "card_right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo");
        newsImage.alt = "Foto da noticia";
        CardRight.appendChild(newsImage);

        componentRoot.appendChild(CardLeft);
        componentRoot.appendChild(CardRight);

        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
        .card {
            width: 80%;
            box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
            -webkit-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        
        .card_left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 10px;
        }
        
        .card_left > span {
            font-weight: 400;
        }
        
        .card_left > a {
            margin-top: 15px;
            font-size: 25px;
            color: black;  
            text-decoration: none;
            font-weight: bold;
        }
        
        .card_left > p {
            color: rgb(109, 108, 108);
        }
        
        img {
            width: 300px;
            height: 200px;
        }
        `


        return style;
    }
}

customElements.define("card-news", CardNews);