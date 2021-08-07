const axios = {
    _fake(url, data) {
        return new Promise((resolve) => {
            setTimeout(() => {
                let responseData = {
                    text: `${url} love you`
                }
                if (url.indexOf('it-kamasutra') > 0) {
                    responseData = {
                        requestedCount: data.count,
                        message: 'we will prepare students for you'
                    }
                } else if (url.indexOf('google') > 0) {
                    responseData = {
                        vacansies: 12
                    }
                }
                resolve({
                    request: {},
                    status: 200,
                    headers: {},
                    config: {},
                    data: responseData
                })
            }, 1000)
        })
    },
    post(url, data) {
        return this._fake(url, data)
    },
    get(url, data) {
        return this._fake(url, data)
    }
}