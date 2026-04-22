import { useState } from 'react'
import './App.css'

export default function App() {
  return (
    <>
      <main className="app">

        <section className="container">

          <section className="hero">
            <h1>Neymar Jr </h1>
            <p>Talento, ousadia e magia dentro de campo o 10 da copa.</p>
          </section>

          <section className="grid">

            <section className="card">
              <h2> Velocidade</h2>
              <p>Arrancadas rápidas e explosivas.</p>
            </section>

            <section className="card">
              <h2>Drible</h2>
              <p>Um dos melhores dribladores do mundo.</p>
            </section>

            <section className="card">
              <h2> Criatividade</h2>
              <p>Jogadas geniais que so ele consegue fazer.</p>
            </section>

            <section className="card">
              <h2>Finalizacao</h2>
              <p>Uma chapa muito boa.</p>
            </section>

            <section className="card">
              <h2> Estilo</h2>
              <p>Ousadia e alegria, dribles.</p>
            </section>

          </section>

        </section>

      </main>
    </>
  )
}