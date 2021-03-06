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

export const getZone = async (zoneId) =>
{
    let response = await tryCatchAPICall("GET", `/zones/${zoneId}`)
    return response
}

export const getAllZones = async () =>
{
    let response = await tryCatchAPICall("GET", `/zones/`)
    return response
}

export const getUser = async (userId) =>
{
    let response = await tryCatchAPICall("GET", `/users/${userId}`)
    return response
}


export const createPost = async (post) =>
{
    let response = await tryCatchAPICall("POST", `/posts`, post)
    return response
}


export const editPost = async (zoneId, postId) =>
{
    let response = await tryCatchAPICall("PUT", `/zones/${zoneId}/${postId}`)
    return response
}


export const getProfile = async () =>
{
    let response = await tryCatchAPICall("GET", `/profile`)
    return response
}

export const editProfile = async (editedProfile) =>
{
    let response = await tryCatchAPICall("PUT", `/profile`, editedProfile)
    return response
}