const jsonData = {
  produits: [
    {
      nom: "Produit 1",
      description: "Ceci est la description du produit 1.",
      notation: 4.5,
      prix: 29.99,
      image: "../Images/ch7.png",
    },
    {
      nom: "Produit 2",
      description: "Ceci est la description du produit 2.",
      notation: 4.0,
      prix: 19.99,
      image: "../Images/ch2.png",
    },
    {
      nom: "Produit 3",
      description: "Ceci est la description du produit 2.",
      notation: 4.0,
      prix: 19.99,
      image: "../Images/ch3.png",
    },
    {
      nom: "Produit 1",
      description: "Ceci est la description du produit 1.",
      notation: 4.5,
      prix: 29.99,
      image: "../Images/ch7.png",
    },
    {
      nom: "Produit 2",
      description: "Ceci est la description du produit 2.",
      notation: 4.0,
      prix: 19.99,
      image: "../Images/ch2.png",
    },
    {
      nom: "Produit 3",
      description: "Ceci est la description du produit 2.",
      notation: 4.0,
      prix: 19.99,
      image: "../Images/ch3.png",
    },
    {
      nom: "Produit 1",
      description: "Ceci est la description du produit 1.",
      notation: 4.5,
      prix: 29.99,
      image: "../Images/ch7.png",
    },
    {
      nom: "Produit 2",
      description: "Ceci est la description du produit 2.",
      notation: 4.0,
      prix: 19.99,
      image: "../Images/ch2.png",
    },
    {
      nom: "Produit 3",
      description: "Ceci est la description du produit 2.",
      notation: 4.0,
      prix: 19.99,
      image: "../Images/ch3.png",
    },
    {
      nom: "Produit 1",
      description: "Ceci est la description du produit 1.",
      notation: 4.5,
      prix: 29.99,
      image: "../Images/ch7.png",
    },
    {
      nom: "Produit 2",
      description: "Ceci est la description du produit 2.",
      notation: 4.0,
      prix: 19.99,
      image: "../Images/ch2.png",
    },
    {
      nom: "Produit 3",
      description: "Ceci est la description du produit 2.",
      notation: 4.0,
      prix: 19.99,
      image: "../Images/ch3.png",
    },
    // Ajoutez d'autres produits ici...
  ],
};

// Sélectionnez la div où vous souhaitez afficher les produits
const dataDiv = document.getElementById("data");

// Parcourez les produits et créez des éléments HTML pour les afficher
jsonData.produits.forEach((produit) => {
    const produitDiv = document.createElement("div");
    produitDiv.classList.add("produit");

    const imageElement = document.createElement("img");
    imageElement.src = produit.image;

    const nomElement = document.createElement("h2");
    nomElement.textContent = produit.nom;

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = produit.description;

    const prixElement = document.createElement("p");
    prixElement.textContent = "Prix : $" + produit.prix;
     prixElement.classList.add("prix");

    const boutonAjouter = document.createElement("button");
    boutonAjouter.textContent = "Ajouter au panier";
    boutonAjouter.classList.add("ajouter-au-panier");

    boutonAjouter.addEventListener("click", () => {
        // Ajoutez ici la logique pour ajouter le produit au panier
        // Vous pouvez stocker les produits dans un tableau ou une autre structure de données
        console.log("Produit ajouté au panier : " + produit.nom);
    });

    produitDiv.appendChild(imageElement);
    produitDiv.appendChild(nomElement);
    produitDiv.appendChild(descriptionElement);
    produitDiv.appendChild(prixElement);
    produitDiv.appendChild(boutonAjouter);

});
