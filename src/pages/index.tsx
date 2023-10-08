import Navbar from "../pages/components/Navbar"

function Index() {
  return (
    <div className="container mx-auto max-w-screen-lg bg-blue-4 rounded-xl overflow-hidden">
      <header>
        <Navbar />
      </header>

      <section>
      
        <section className="search-bar py-4" style={{
  
        backgroundImage: "url('https://as1.ftcdn.net/v2/jpg/06/21/86/52/1000_F_621865217_6xDWwoXR2XcgwHE8cfLipehrIji1m0wN.jpg')",  
        backgroundSize: "cover", // Ajuste la taille de l'image pour couvrir la section
        backgroundRepeat: "no-repeat", // Empêche la répétition de l'image
        backgroundPosition: "center center" // Centre l'image horizontalement et verticalement
        }}>
          <section className="banner py-10">
        
          <h1 className="text-4xl  text-white font-bold text-center mt-4">Bienvenue chez FYLS EASTATE</h1>
          <h2 className="text-3xl text-white text-center mt-1">Votre agence immobilière en ligne</h2>
          <h3 className="text-2xl text-white text-center mt-1 ">Acheter, louer ou Vendre votre bien immoblier</h3>
        </section>
        <section className="search-bar py-4">
          <div className="bg-green-400 rounded-lg p-4">
            <form className="flex flex-wrap justify-center items-center" action="">
                <div className="flex items-center justify-center mb-2">
                  <label htmlFor="propertyType" className="mr-2 font-bold">Type de propriété:</label>
                  <select id="propertyType" name="propertyType" placeholder="Selectionner un type de bien" className="border border-gray-300 rounded-lg px-4 py-2">
                    {/* Options pour les types de propriété */}
                    <option value="maison">Maison</option>
                    <option value="appartement">Appartement</option>
                    <option value="terrain">Terrain</option>
                    <option value="studio">Studio</option>
                    <option value="chambre">Chambre</option>
                  </select>
                </div>

                <div className="flex items-center justify-center mb-2">
                  <label htmlFor="location" className="mr-2 font-bold">Localisation:</label>
                  <input
                    id="location"
                    type="text"
                    name="location"
                    className="border border-gray-300 rounded-lg px-4 py-2"
                    placeholder="Ex: Yaoundé, Douala..."
                  />
                </div>
              <div className="flex items-center justify-center mb-2">  
                <label htmlFor="priceRange" className="mr-2 font-bold">Plage de prix:</label>  
                <input
                  id="minPrice"
                  type="number"
                  name="minPrice"
                  className="border border-gray-300 rounded-lg px-4 py-2 w-24"
                  placeholder="Min"
                  />
                  <span className="mx-2">à</span> 
                <input
                  
                  id="maxPrice"
                  type="number"
                  name="maxPrice"
                  className="border border-gray-300 rounded-lg px-4 py-2 w-24"
                  placeholder="Max"
                />
            
              </div>
              <button className="bg-blue-500 text-white rounded-full px-4 py-2 ml-2" type="submit">Rechercher</button>
            </form>
          </div>
      
        </section>

      <section className="search-bar py-4 text-center">
        <button className="bg-red-500 text-white rounded-r px-4 py-2 ml-2">
          Vendre votre bien
        </button>
      </section>
      
        </section>
      
        <section className="featured-properties py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="property-card">
              <h3 className="font-bold">Nom de la propriété</h3>
              <p>Description de la propriété</p>
              <a href="/path/to/property-details" className="text-blue-500">En savoir plus</a>
            </div>
            {/* Ajoutez d'autres biens immobiliers en vedette */}
          </div>
        </section>
        <section className="services py-8">
          <div className="text-center mb-4">
            <h4 className="font-bold">Services offerts</h4>      
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="service text-center">
              <i className="fas fa-home text-4xl mb-2"></i>
              <p>Plus de +1500 annonces</p>
            </div>
            <div className="service text-center">
              <i className="fas fa-home text-4xl mb-2"></i>
              <p>Accompagnement jusqu'à la signature du bail</p>
            </div>
            <div className="service text-center">
              <i className="fas fa-phone text-4xl mb-2"></i>
              <p>Contact direct avec le propriétaire</p>
            </div>
            <div className="service text-center">
              <i className="fas fa-home text-4xl mb-2"></i>
              <p>Achat immobilier 100% fiable</p>
            </div>
        </div>
      </section>
      <section className="testimonials py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="testimonial">
            <p className="italic">Témoignage de client satisfait</p>
            <span>- Nom du client</span>
          </div>
          {/* Ajoutez d'autres témoignages */}
        </div>
      </section>

      <section className="about py-8">
        <h2 className="text-2xl font-bold">À propos de notre agence immobilière</h2>
        <p className="mt-4">Description de votre agence</p>
      </section>
  
        


     </section>
      

      <footer className="py-4">
        <ul className="flex justify-center space-x-4">
          <li className="hover:text-blue-500">Mentions légales</li>
          <li className="hover:text-blue-500">Politique de confidentialité</li>
          <li className="hover:text-blue-500">Conditions d'utilisation</li>
        </ul>

        <div className="flex justify-center mt-4">
          <a href="https://facebook.com" className="text-blue-500 mx-2">Facebook</a>
          <a href="https://twitter.com" className="text-blue-500 mx-2">Twitter</a>
          <a href="https://instagram.com" className="text-blue-500 mx-2">Instagram</a>
        </div>
      </footer>

    </div>
    
  )
}

export default Index