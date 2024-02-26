<script setup></script>

<template>
  <div class="card">
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <div>
          <h1 class="card-title">
            <a
              href="https://www.ensma.fr/"
              target="_blank"
              class="link-dark link-underline-opacity-0"
              rel="noopener noreferrer"
            >
              ISAE-ENSMA
            </a>
            (2021-2024)
          </h1>
          <p>Étuidant ingénieur aérospatial spécialisé en développement informatique</p>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/fr/thumb/0/00/Logo_ISAE-ENSMA.svg/1200px-Logo_ISAE-ENSMA.svg.png"
          style="width: 12%"
        />
      </div>
      <h2>Liste des cours</h2>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              3ème année - Informatique / Systèmes
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="row">
                <div class="col">
                  <ul>
                    <li>Types de Données Abstraits & Base de la Programmation Orienté Objet</li>
                    <li>Conception Logiciel</li>
                    <li>Ingénierie des modèles</li>
                    <li>Interfaces Hommes-Systèmes</li>
                    <li>Programmation Embarquée</li>
                  </ul>
                </div>
                <div class="col">
                  <ul>
                    <li>Logiciels sûrs</li>
                    <li>Applications Mobiles</li>
                    <li>Simulation des systèmes embarqués</li>
                    <li>Validation Temporelle</li>
                    <li>Systèmes avioniques</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              2ème année - Tronc commun
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="row">
                <div class="col">
                  <ul>
                    <li>Calcul scientifique (analyse)</li>
                    <li>Calcul scientifique (numérique)</li>
                    <li>Contrôle automatique des systèmes</li>
                    <li>Conception de systèmes industriels- CATIA pour l’aéronautique</li>
                    <li>Mécanique des fluides</li>
                    <li>Mécanique des structures</li>
                    <li>Science des matériaux</li>
                    <li>Rayonnement thermique</li>
                    <li>Convection</li>
                    <li>Conduite de projet</li>
                    <li>Communication professionnelle</li>
                    <li>Energie et Environnement : les outils</li>
                  </ul>
                </div>
                <div class="col">
                  <ul>
                    <li>CATIA avancé</li>
                    <li>Probabilités</li>
                    <li>Ingénierie des systèmes critiques</li>
                    <li>Apprentissage automatique appliqué</li>
                    <li>Projet conception-avionique</li>
                    <li>Dynamique des gaz</li>
                    <li>Projet aérodynamique-Structures-Matériaux</li>
                    <li>Vibrations-Méthodes des Elements Finis</li>
                    <li>Mécanique des fluides industriels</li>
                    <li>Moteurs et propulseurs</li>
                    <li>Projet thermique-énergétique</li>
                    <li>Sciences humaines économiques et sociales</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              1ère année - Tronc commun
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="row">
                <div class="col">
                  <ul>
                    <li>Signal et Systèmes</li>
                    <li>Mathématiques</li>
                    <li>Mécanique analytique</li>
                    <li>Thermodynamique des machines thermiques</li>
                    <li>Mécanique des solides</li>
                    <li>Mécanique du vol</li>
                    <li>Algorithmes et systèmes numériques</li>
                    <li>Outils pour la conception</li>
                    <li>Physique</li>
                    <li>Fabrication et transport</li>
                    <li>Connaissance de l’entreprise</li>
                    <li>Energie et Environnement : les défis</li>
                    <li>Management</li>
                  </ul>
                </div>
                <div class="col">
                  <ul>
                    <li>Calcul tensoriel</li>
                    <li>Base de la conception logicielle</li>
                    <li>Introduction au C et aux méthodes numériques</li>
                    <li>Systèmes embarqués</li>
                    <li>Utilisation et exploitation de données</li>
                    <li>Défi Signal-Système-Simulation</li>
                    <li>Sciences industrielles pour l’ingénieur</li>
                    <li>Etudes de systèmes industriels – CAO</li>
                    <li>Science des matériaux</li>
                    <li>Mécanique des fluides</li>
                    <li>Résistance des matériaux</li>
                    <li>Conduction</li>
                    <li>Sciences humaines économiques et sociales</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Cours optionnels
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <ul>
                <li>Mécanique Spatiale</li>
                <li>Mécanismes spatiaux</li>
                <li>Aircraft Design</li>
                <li>Histoire des sciences</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
