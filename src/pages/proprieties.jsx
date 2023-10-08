import React, { useState } from 'react'
import Navbar from '../pages/components/Navbar'
import Link from 'next/link'



const Properties = () => {
  // Exemple de données de propriétés immobilières
  const propertiesData = [
    {
      id: 1,
      title: 'Belle maison à vendre',
      location: 'Paris, France',
      price: '$500,000',
      type: 'Maison',
    },
    {
      id: 2,
      title: 'Appartement moderne',
      location: 'New York, USA',
      price: '$300,000',
      type: 'Appartement',
    },
    // Ajoutez d'autres propriétés ici
  ]

  
  // État des filtres
  const [filters, setFilters] = useState({
    propertyType: 'Tous', // Initialiser à "Tous" pour afficher toutes les propriétés
    location: '',
    minPrice: '',
    maxPrice: '',
  }) 

  // Fonction pour mettre à jour les filtres
  const handleFilterChange = (e) => {
    const { name, value } = e.target 
    setFilters({ ...filters, [name]: value }) 
  } 

  // Filtrer les propriétés en fonction des critères de recherche
  const filteredProperties = propertiesData.filter((property) => {
    return (
      (filters.propertyType === 'Tous' || property.type === filters.propertyType) &&
      (filters.location === '' || property.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (filters.minPrice === '' || parseFloat(property.price.replace('$', '').replace(',', '')) >= parseFloat(filters.minPrice)) &&
      (filters.maxPrice === '' || parseFloat(property.price.replace('$', '').replace(',', '')) <= parseFloat(filters.maxPrice))
    ) 
  }) 

  return (
    <div className="container mx-auto max-w-screen-lg bg-blue-4 rounded-xl overflow-hidden">
      <header>
        <Navbar />
      </header>
      <h1 className="text-3xl text-center font-semibold mb-4">Liste des Propriétés Immobilières</h1>

      {/* ... Vos options de recherche et de filtrage ... */}
        <div className="bg-green-200 rounded-lg p-4 mb-4">
        <form className="flex flex-wrap justify-center items-center" action="">
          <div className="flex items-center justify-center mb-2">
            <label htmlFor="propertyType" className="mr-2 font-bold">Type de propriété :</label>
            <select
              id="propertyType"
              name="propertyType"
              className="border border-gray-300 rounded-lg px-4 py-2"
              value={filters.propertyType}
              onChange={handleFilterChange}
            >
              <option value="Tous">Tous</option>  
              <option value="maison">Maison</option>
              <option value="appartement">Appartement</option>
              <option value="terrain">Terrain</option>
              <option value="studio">Studio</option>
              <option value="chambre">Chambre</option>
            </select>
          </div>

          <div className="flex items-center justify-center mb-2">
            <label htmlFor="location" className="mr-2 font-bold">Localisation :</label>
            <input
        
              id="location"
              type="text"
              name="location"
              className="border border-gray-300 rounded-lg px-4 py-2"
              placeholder="Ex: Paris, New York..."
              value={filters.location}
              onChange={handleFilterChange}
            />
          </div>

          <div className="flex items-center justify-center mb-2">
            <label htmlFor="priceRange" className="mr-2 font-bold">Plage de prix :</label>
            <input
              id="minPrice"
              type="number"
              name="minPrice"
              className="border border-gray-300 rounded-lg px-4 py-2 w-24"
              placeholder="Min"
              value={filters.minPrice}
              onChange={handleFilterChange}
            />
            <span className="mx-2">à</span>
            <input
              id="maxPrice"
              type="number"
              name="maxPrice"
              className="border border-gray-300 rounded-lg px-4 py-2 w-24"
              placeholder="Max"
              value={filters.maxPrice}
              onChange={handleFilterChange}
            />
          </div>

          <button className="bg-blue-500 text-white rounded-full px-4 py-2 ml-2" type="submit">Rechercher</button>
        </form>
      </div>

      {/* Liste des propriétés */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {propertiesData.map((property) => (
          <Link href={`/property/${property.id}`} key={property.id}>
            <div className="bg-blue-400 rounded-lg shadow-md p-4 cursor-pointer">
              <img
                src={property.imageUrl}
                alt={property.title}
                className="rounded-full w-32 h-32 mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{property.title}</h2>
              <p className="text-gray-600">{property.location}</p>
              <p className="text-lg font-bold mt-2">{property.price}</p>
              <p className="text-gray-500">{property.type}</p>
            </div>
          </Link>
        ))}
      </div>
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

export default Properties
