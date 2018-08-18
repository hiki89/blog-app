import moment from 'moment'

export const mixin1 = {
    filters: {
        formatDate (createdAt, outputFormat = 'YYYY-MM-DD HH:mm:ss') {
            return moment(createdAt).format(outputFormat)
        },

        diffForHumans (str) {
            return moment(str).from(moment())
        }
    }
}

