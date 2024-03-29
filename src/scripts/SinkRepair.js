import { Requests } from "./Requests.js"
import { ServiceForm } from "./ServiceForm.js"

export const SinkRepair = () => {
    return `
        <header class="header">
            <img src="./image/logo1.png" alt="M&M Logo"/>
            <h1>Maude and Merle's Sink Repair</h1>
        </header>
        
        <section class="serviceForm">
            ${ServiceForm()}
        </section>

        <section class="serviceRequests">
            <h2>Service Requests</h2>
            ${Requests()}
        </section>
    `
}