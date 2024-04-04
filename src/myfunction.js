import { gs } from '@servicenow/glide'

export const showStatusUpdate = function (newStatus, oldStatus) {
    gs.addInfoMessage(`Record updated. Old Status: ${oldStatus}`)

    // PUSHED LAST

    gs.addInfoMessage(`New Status: ${newStatus}`)
}
