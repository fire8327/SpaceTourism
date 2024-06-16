export const useFeedbackStore = defineStore("feedback", () => {
    const { showMessage } = useMessagesStore()

    const clearForm = (submitForm) => {
        Object.keys(submitForm).forEach(key => {
          submitForm[key] = ""
        })
    }
    
    const submitFeedback = async (message, form) => {
        const token = "7474011218:AAEm9AUCMVaBLvXjXk16ULjkV45XBn2mv3c"
        const chatId = "-4220457548"
        const URL = `https://api.telegram.org/bot${token}/sendMessage`

        const {data, error} = await useFetch(URL, {
            body:{
                'chat_id': chatId,
                'parse_mode': 'html',
                'text': message
            },
            method:'post'
        })

        if (error.value) return showMessage("При отправке произошла ошибка!", false)
            console.log(message)
        showMessage("Успешная отправка!", true)
        clearForm(form)
    }

    return { submitFeedback, clearForm }
})