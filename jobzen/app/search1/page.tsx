// Importer les bibliothèques nécessaires
"use client";
import React, { useState } from 'react';
import axios from 'axios';

// Définir le composant de recherche
const Search1 = () => {
  // États pour suivre le type de recherche, le terme de recherche et les résultats
  const [searchType, setSearchType] = useState<string>('job');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<any[]>([]);

  // Gestionnaire de changement de type de recherche
  const handleSearchTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchType(event.target.value);
  };

  // Gestionnaire de changement de terme de recherche
  const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Gestionnaire de soumission du formulaire
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // Effectuer la recherche en fonction du type sélectionné
      const response = await axios.get(`http://localhost:3000/jobCategory/jobCategory`);
      setSearchResults(response.data);
      console.log("Success",response);
      
    } catch (error) {
      console.error('Erreur lors de la recherche :', error);
    }
  };

  return (
    <div>
      {/* Formulaire de recherche */}
      <form className="flex flex-col md:flex-row gap-1" onSubmit={handleSubmit}>
        <div className="flex relative">
          <div className="flex border-4 border-[#267296] rounded-full">
            <input
              type="text"
              placeholder="Recherchez l'outil que vous aimez"
              className="text-black w-40 md:w-40 px-10 h-10 rounded-full border-0 focus:outline-none"
              value={searchTerm}
              onChange={handleSearchTermChange}
            />
            <select
              id="searchingType"
              name="searchingType"
              title="Recherche..."
              className="h-10 border-0 focus:outline-none text-[#267296] rounded-full font-bold px-2 md:px-3 py-0 md:py-1 tracking-wider bg-white"
              value={searchType}
              onChange={handleSearchTypeChange}
            >
              <option value="job">JOB</option>
              <option value="skill">COMPANY</option>
            </select>
          </div>
          <button
            type="submit"
            aria-label="Go"
            className="bg-[#267296] text-white rounded-full w-16 h-15 hover:bg-[#254b5d]"
          >
            Go
          </button>
        </div>
      </form>

      {/* Afficher les résultats de la recherche */}
      {searchResults.length > 0 && (
        <div>
          <h2>Résultats de la recherche :</h2>
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>{result.category /* Remplacez 'name' par le champ approprié dans vos données */}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search1;
