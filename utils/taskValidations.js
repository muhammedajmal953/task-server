

export function taskValidation(data) {
    const { title, content, endDate, country } = data
    if (!title || !title.match(/(^[A-Z],[a-b]{2,})/)) {
        return 'No title provided'
    }
    if (!content || !content.match(/(^[A-Z],[a-b]{2,})/)) {
        return 'No content provided'
    }
    if (!endDate) {
        return 'No endDate provided'
    }
    if (!country || !country.match(/(^[A-Z],[a-b]{2,})/)) {
        return 'No country provided'
    }

    return ''
    
}