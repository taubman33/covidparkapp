import { api } from './auth'

const tryCatchAPICall = async (methodString, urlString, data = null) =>
{
    // console.log(urlString + " " + data)
    try
    {
        let response = await api({ method: methodString, url: urlString, data: data })
        return response
    }
    catch (error)
    {
        console.log(error)
    }
}

export const getAllParks = async () =>
{
    let response = await tryCatchAPICall("GET", "/parks")
    return response
}

export const getPark = async (parkId) =>
{
    let response = await tryCatchAPICall("GET", `/parks/${parkId}`)
    return response
}

export const getUser = async (userId) =>
{
    let response = await tryCatchAPICall("GET", `/users/${userId}`)
    return response
}
