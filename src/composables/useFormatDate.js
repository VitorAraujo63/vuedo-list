export function useFormatDate() {
    const formatarData = (timestamp) => {
        if (!timestamp) return ''

        const data = new Date(timestamp)

        return new Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }).format(data)
    }

    return {
        formatarData
    }
}