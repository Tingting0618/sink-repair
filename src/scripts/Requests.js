import { getRequests } from "./dataAccess.js"
import { deleteRequest } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests()

    let html = "<ul>"
    // Use .map() for converting objects to <li> elements
    const listItems =requests.map(request => {
        return `<li>
            <div name="request" value="${request.id}" /> ${request.description}
                <button class="request__delete"
                        id="request--${request.id}">
                    Delete
               </button>
        </li>`
    })
    // Join all of the strings in the array into a single string
    html += listItems.join("")
    html += "</ul>"
    return html
}
const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})