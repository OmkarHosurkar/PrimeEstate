document.addEventListener("DOMContentLoaded", () => {
    // Navigation
    const navLinks = document.querySelectorAll(".nav-link")
    const sections = document.querySelectorAll("section")
  
    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault()
        const targetId = this.getAttribute("href").substring(1)
        sections.forEach((section) => {
          section.classList.add("d-none")
          section.classList.remove("active-section")
        })
        document.getElementById(targetId).classList.remove("d-none")
        document.getElementById(targetId).classList.add("active-section")
      })
    })
  
    // Trending News
    const trendingNews = [
      {
        title: "Housing Market Trends 2025",
        description: "Experts predict significant changes in urban property demands.",
      },
      {
        title: "New Sustainable Housing Developments",
        description: "Eco-friendly homes are on the rise in major cities.",
      },
      {
        title: "Real Estate Investment Opportunities",
        description: "Analysts suggest promising areas for property investment.",
      },
    ]
  
    const trendingNewsContainer = document.getElementById("trending-news")
    trendingNews.forEach((news) => {
      const newsElement = document.createElement("div")
      newsElement.className = "col-md-4 mb-3"
      newsElement.innerHTML = `
              <div class="card">
                  <div class="card-body">
                      <h5 class="card-title">${news.title}</h5>
                      <p class="card-text">${news.description}</p>
                  </div>
              </div>
          `
      trendingNewsContainer.appendChild(newsElement)
    })
  
    // Property Listings
    const properties = [
      {
        id: 1,
        title: "Modern Apartment",
        price: "$250,000",
        image: "https://via.placeholder.com/300x200?text=Modern+Apartment",
      },
      { id: 2, title: "Cozy House", price: "$350,000", image: "https://via.placeholder.com/300x200?text=Cozy+House" },
      {
        id: 3,
        title: "Luxury Villa",
        price: "$1,200,000",
        image: "https://via.placeholder.com/300x200?text=Luxury+Villa",
      },
    ]
  
    const propertyListContainer = document.getElementById("property-list")
    properties.forEach((property) => {
      const propertyElement = document.createElement("div")
      propertyElement.className = "col-md-4 mb-3"
      propertyElement.innerHTML = `
              <div class="card property-card" data-id="${property.id}">
                  <img src="${property.image}" class="card-img-top" alt="${property.title}">
                  <div class="card-body">
                      <h5 class="card-title">${property.title}</h5>
                      <p class="card-text">${property.price}</p>
                  </div>
              </div>
          `
      propertyListContainer.appendChild(propertyElement)
    })
  
    // Property Modal
    const propertyModalElement = document.getElementById("property-modal")
    const propertyModal = new bootstrap.Modal(propertyModalElement)
    const propertyCards = document.querySelectorAll(".property-card")
    propertyCards.forEach((card) => {
      card.addEventListener("click", function () {
        const propertyId = this.getAttribute("data-id")
        const property = properties.find((p) => p.id == propertyId)
        const modalBody = document.querySelector("#property-modal .modal-body")
        modalBody.innerHTML = `
                  <img src="${property.image}" class="img-fluid mb-3" alt="${property.title}">
                  <h3>${property.title}</h3>
                  <p>Price: ${property.price}</p>
                  <p>Description: This is a beautiful property with amazing features...</p>
                  <h4>Contact Agent</h4>
                  <p>Name: John Doe</p>
                  <p>Phone: 123-456-7890</p>
                  <p>Email: john@realestate.com</p>
              `
        propertyModal.show()
      })
    })
  
    // Form Submissions
    const forms = document.querySelectorAll("form")
    forms.forEach((form) => {
      form.addEventListener("submit", function (e) {
        e.preventDefault()
        const formId = this.id
        let message = ""
        switch (formId) {
          case "sell-form":
            message = "Property listing submitted successfully!"
            break
          case "contact-form":
            message = "Message sent successfully!"
            break
          case "login-form":
            message = "Login successful!"
            break
          case "register-form":
            message = "Account created successfully!"
            break
        }
        alert(message)
        this.reset()
      })
    })
  })
  
  